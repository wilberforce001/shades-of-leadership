import express from "express";
import { getPodcasts, addPodcast } from "../controllers/podcastController.js";

const router = express.Router();

// GET all podcasts
router.get("/", getPodcasts);

// POST new podcast (for admin)
router.post("/", addPodcast);

export default router;