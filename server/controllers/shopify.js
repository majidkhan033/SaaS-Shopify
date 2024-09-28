import express from "express";
import axios from "axios";

const router = express.Router();

//Get Shopify data
router.get("/shopify-data", async(req, res) => {
    try {
        const response = await axios.get(`${process.env.SHOPIFY_STORE_URL}`, {
            headers: {
                "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
            },
        });

        const orders = response.data.orders;
        const totalOrders = orders.length;
        const totalSales = orders.reduce((total, order) => total + parseFloat(order.total_price), 0);
        const conversionRate = (totalOrders / 100) * 100;

        res.json({ totalOrders, totalSales, conversionRate });

    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with a status code
            console.error('Error Response Data:', error.response.data);
            console.error('Error Status:', error.response.status);
            console.error('Error Headers:', error.response.headers);
            res.status(error.response.status).json({ "error": error.response.data });
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error Request Data:', error.request);
            res.status(500).json({ "error": "No response from Shopify API" });
        } else {
            // Something else happened
            console.error('Error:', error.message);
            res.status(500).json({ "error": error.message });
        }
    }
    
});

export default router;