import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Signup Successful (frontend only)");
      console.log("Form Submitted:", formData);
      setFormData({ fullname: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div className="signup-overlay">
      <div className="signup-container">
        <Link to="/" className="close-btn">×</Link>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your fullname"
            />
            {errors.fullname && <span className="error">{errors.fullname}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button type="submit" className="submit-btn">Signup</button>
        </form>

      </div>
    </div>
  );
}

export default Signup;
