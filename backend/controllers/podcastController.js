import Podcast from "../models/Podcast.js";

// Get all podcasts
export const getPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcast.find().sort({ datePublished: -1 });
        res.json(podcasts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new podcast (for admin use)
export const addPodcast = async (req, res) => {
    const { title, description, audioUrl } = req.body;
    try {
        const podcast = new Podcast({ title, description, audioUrl });
        const saved = await podcast.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};