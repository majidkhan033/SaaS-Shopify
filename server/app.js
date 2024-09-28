import express from "express";
import { Session } from "express-session";
import Shopify from "shopify-api-node";
import cors from "cors";
import "./config/dbConnect.js";
import authRoutes from "./controllers/auth.js";
import shopifyRoutes from "./controllers/shopify.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

const port = 5000;

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api", shopifyRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ success: "SaaS-Shopify Application" });
});

app.listen(port, () => {
  console.log("Server Started at Port : ", port);
});
