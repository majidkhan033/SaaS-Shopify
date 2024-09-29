import React, { useEffect, useState } from "react";
import { getShopifyData } from "../api";
import '../App.css';

const Dashboard = ({ token }) => {
  const [shopifyData, setShopifyData] = useState({
    totalOrders: 0,
    totalSales: 0,
    conversionRate: 0,
  });

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

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Orders : {shopifyData.totalOrders}</p>
      <p>Total Sales : ${shopifyData.totalSales.toFixed(2)}</p>
      <p>Conversion Rate : {shopifyData.conversionRate}%</p>
    </div>
  );
};

export default Dashboard;
