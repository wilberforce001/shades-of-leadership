import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    audioUrl: {
        type: String,
        required: true,
    },
    datePublished: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Podcast", podcastSchema);