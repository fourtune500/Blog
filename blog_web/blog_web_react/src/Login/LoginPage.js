import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required!");
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        toast.success("Login successful");
        localStorage.setItem("user", JSON.stringify(user)); 
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setError("Invalid email or password");
        toast.error("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <h2 className="login-title">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input-field"
                required
              />
            </div>
            <div className="Button">
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>
          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
