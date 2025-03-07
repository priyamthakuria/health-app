import Post from '../models/post.model.js';

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, description, username, categories, picture } = req.body;

    // Create a new post
    const newPost = new Post({
      title,
      description,
      picture, // This would be a URL to the image
      username,
      categories,
    });

    await newPost.save();
    res.status(201).json({
      success: true,
      post: newPost
    });
  } catch (error) {
    console.error('Error creating post:', error.message || error);
    res.status(400).json({ 
      success: false,
      message: 'Error creating post', 
      error: error.message || error 
    });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Retrieve all posts
    res.status(200).json({
      success: true,
      posts
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(400).json({ 
      success: false,
      message: 'Error fetching posts', 
      error: error.message 
    });
  }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    
    res.status(200).json({
      success: true,
      post
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(400).json({ 
      success: false,
      message: 'Error fetching post', 
      error: error.message 
    });
  }
}; 