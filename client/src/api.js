import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = async (data) =>
  await axios.post(`${API_URL}/auth/signUp`, data);

export const loginUser = async (data) =>
  await axios.post(`${API_URL}/auth/login`, data);

export const getShopifyData = async (token) =>
  await axios.get(`${API_URL}/shopify-data`, {
    headers: { Authorization: `Bearer ${token}` },
  });
