import Navbar from "../Topbar/Navbar"; 
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {}

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
