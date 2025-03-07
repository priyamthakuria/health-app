import express from 'express';
import { createPost, getAllPosts, getPostById } from '../controllers/post.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllPosts);
router.get('/:id', getPostById);

// Protected routes
router.post('/', protect, createPost);

export default router; 