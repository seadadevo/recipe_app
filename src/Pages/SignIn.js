import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn({ setIsAuthenticated }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true); 
    navigate("/home");
  };

  return (
    <div className="form-container">
      <div className = "card">
         <h2 className = "title">Sign In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn" type="submit">Sign In</button>
      </form>
      <p className="para">
        Don't have an account? <Link className="btn-link" to="/signup">Sign Up</Link>
      </p>
      </div>
    </div>
  );
}
