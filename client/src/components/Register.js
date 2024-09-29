import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Register = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(userData);
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={userData.firstname}
          onChange={handleChange}
          placeholder="FirstName"
          required
        />
        <input
          type="text"
          name="lastname"
          value={userData.lastname}
          onChange={handleChange}
          placeholder="LastName"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="password2"
          value={userData.password2}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
