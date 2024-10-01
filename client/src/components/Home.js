import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import shoppingImage from "./assets/shopping_image.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">
          <h1>
            {" "}
            <strong>ShopPulse</strong> <br />
            <h3>a SaaS-Shopify app</h3>
          </h1>
        </div>
        {/* <nav> */}
        {/* <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul> */}
        {/* </nav> */}
        <div className="auth-buttons">
          <button className="signup-button" onClick={() => navigate("/signUp")}>
            Sign Up
          </button>
          <button className="signin-button" onClick={() => navigate("/login")}>
            Sign In
          </button>
          {/* <button className="logout-button" onClick={() => navigate("/logout")}>
            LogOut
          </button> */}
        </div>
      </header>

      <div className="content">
        <div className="text-section">
          <h2>
            Organize your <br />
            orders and cart, easily.
          </h2>
          <p>
            Achieve products and your orders with{" "}
            <strong>SaaS - Shopify</strong>, the leading Shopify app worldwide.
          </p>
        </div>
        <div className="image-section">
          <img src={shoppingImage} alt="SaaS-Shopify" />
        </div>
      </div>
    </div>
  );
};

export default Home;
