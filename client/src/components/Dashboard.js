import React, { useEffect, useState } from "react";
import { getShopifyData } from "../api";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Dashboard = ({ token, setToken }) => {
  const [shopifyData, setShopifyData] = useState({
    totalOrders: 0,
    totalSales: 0,
    conversionRate: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getShopifyData(token);
        setShopifyData(data);
      } catch (error) {
        console.error("Error in fetching the shopify data", error);
      }
    };
    fetchData();
  }, [token]);

  //logout functionality
  const handleLogout = () => {
    setToken(null); // Clear the token
    navigate("/"); // Redirect to login page
  };

  return (
    // <div className="dashboard">
    //   <button className="logout-button" onClick={handleLogout}>
    //     Logout
    //   </button>
    //   <h1>Dashboard</h1>
    //   <p>Total Orders : {shopifyData.totalOrders}</p>
    //   <p>Total Sales : ${shopifyData.totalSales.toFixed(2)}</p>
    //   <p>Conversion Rate : {shopifyData.conversionRate}%</p>
    // </div>

    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <p>Total Orders</p>
          <h2>{shopifyData.totalOrders}</h2>
        </div>
        <div className="stat-card">
          <p>Total Sales</p>
          <h2>${shopifyData.totalSales.toFixed(2)}</h2>
        </div>
        <div className="stat-card">
          <p>Conversion Rate</p>
          <h2>{shopifyData.conversionRate}%</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
