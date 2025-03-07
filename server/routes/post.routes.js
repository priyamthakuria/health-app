// routes/post.routes.js
const express = require('express');
const { createPost, getAllPosts } = require('../controller/post.controller');

const router = express.Router();

// Route for creating a new post
router.post('/api/posts', createPost);

// Route for fetching all posts
router.get('/api/posts', getAllPosts);

module.exports = router;
