import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Settings from "./Pages/Settings";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <NavBar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} /> 
            <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
