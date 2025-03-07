const Post = require('../models/post.model');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create a new post with image upload
const createPost = async (req, res) => {
  const { title, description, username, categories } = req.body;

  // Upload image to Cloudinary
  try {
    const fileStr = req.file.path; // file path from Multer
    const uploadedResponse = await cloudinary.uploader.upload(fileStr);

    // Create a new post with Cloudinary URL
    const newPost = new Post({
      title,
      description,
      picture: uploadedResponse.secure_url, // Store Cloudinary URL
      username,
      categories,
    });

    await newPost.save();
    res.status(201).json(newPost); // Return the newly created post
  } catch (error) {
    console.error('Error creating post:', error.message || error);
    res.status(400).json({ message: 'Error creating post', error: error.message || error });
  }
  
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Retrieve all posts
    res.json(posts); // Return the posts as a response
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(400).json({ message: 'Error fetching posts', error });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
