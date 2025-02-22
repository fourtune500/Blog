import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/product page1">product page1</Link></li>
          <li><Link to="/product page 2">product page 2</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>

      {}
      <div className="main-content">
        <div className="content-box">
          <h1>Welcome to my Dashboard</h1>
          <p>This is my HomePage</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
