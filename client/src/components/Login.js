import React, { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Login = ({ setToken }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(userData);
      setToken(data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className="container">
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register Now!</a>
      </p>
    </div>
  );
};

export default Login;
