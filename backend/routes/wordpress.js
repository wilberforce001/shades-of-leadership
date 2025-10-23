import express from "express";
import axios from "axios";

const router = express.Router();

// Replace with your WordPress domain (without /wp-admin)
const WORDPRESS_BASE_URL = "https://sol.rolecolorfinder.com/wp-json/wp/v2";

// Route to fetch podcast posts
router.get("/podcasts", async (req, res) => {
  try {
    // You can use the default 'posts' endpoint or a custom post type if created
    const response = await axios.get(`${WORDPRESS_BASE_URL}/posts`);
    const podcasts = response.data.map((post) => ({
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      link: post.link,
      featuredImage:
        post.featured_media && post._embedded?.["wp:featuredmedia"]
          ? post._embedded["wp:featuredmedia"][0].source_url
          : null,
    }));
    res.json(podcasts);
  } catch (error) {
    console.error("Error fetching podcasts from WordPress:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch podcasts", error: error.message });
  }
});

export default router;
