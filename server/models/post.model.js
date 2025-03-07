// models/post.model.js
const mongoose = require("mongoose");

// Define the schema for the Post model
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, default: "" },
  username: { type: String, required: true },
  categories: { type: String, default: "All" },
  createdDate: { type: Date, default: Date.now },
});

// Create the Post model based on the schema
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
   