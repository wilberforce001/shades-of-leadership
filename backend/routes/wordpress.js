import express from "express";
import axios from "axios";

const router = express.Router();

const WORDPRESS_API_BASE = "https://sol.rolecolorfinder.com/wp-json/wp/v2";

router.get("/home", async (req, res) => {
  try {
    const response = await axios.get(`${WORDPRESS_API_BASE}/pages?slug=home`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching WordPress data:", error.message);
    res.status(500).json({ error: "Failed to fetch WordPress data" });
  }
});

export default router;