import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import LoginPage from "./Login/LoginPage";
import RegisterPage from "./Register/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
