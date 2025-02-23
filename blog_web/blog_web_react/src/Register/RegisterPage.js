import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      toast.error("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/users");
      const existingUsers = response.data;
      const userExists = existingUsers.some(user => user.email === formData.email);

      if (userExists) {
        setError("User already exists");
        toast.error("User already exists");
        return;
      }

      await axios.post("http://localhost:3001/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Registration successful");
      
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError("An error occurred during registration");
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-content">
          <h2 className="register-title">Register</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="input-field"
                required
              />
            </div>
            <div className="Button">
              <button type="submit" className="register-button">Register</button>
            </div>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
