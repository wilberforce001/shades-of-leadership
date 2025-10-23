import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import podcastRoutes from './routes/podcastRoutes.js'
import Podcast from "./models/Podcast.js";
import wordpressRoutes from "./routes/wordpress.js";

dotenv.config();
const app = express();

connectDB();

// Middleware
app.use(cors({
    origin: [
        "https://shades-of-leadership.onrender.com",
        "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/podcasts", podcastRoutes);
app.use("/api/wordpress", wordpressRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Shades of Leadership Backend Running...");
});

app.get("/api/seed", async (req, res) => {
  await Podcast.create({
    title: "The Art of Authentic Leadership",
    description: "A deep dive into leading with authenticity and empathy.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  });
  res.send("Sample podcast added!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));