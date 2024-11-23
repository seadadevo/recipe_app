import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    birthDate: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="form-container container">
      <div className="card">
        <h2 className="title">Sign-Up Page</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input className = "desc" type="date" name="birthDate" onChange={handleChange} required />
        <textarea
          name="description"
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button className="btn" type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link className="btn-link" to="/signin">Sign-In</Link>
      </p>
      </div>
    </div>
  );
}
