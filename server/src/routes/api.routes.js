import express from 'express';
import userRoutes from './user.routes.js';
import postRoutes from './post.routes.js';

const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// Mount routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

// Example routes for a mental health app
router.get('/resources', (req, res) => {
  // This would typically fetch from a database
  const resources = [
    { id: 1, title: 'Coping with Anxiety', type: 'article', url: '/resources/anxiety' },
    { id: 2, title: 'Meditation Basics', type: 'video', url: '/resources/meditation' },
    { id: 3, title: 'Finding a Therapist', type: 'guide', url: '/resources/therapist-guide' }
  ];
  
  res.status(200).json({ resources });
});

// Placeholder for therapist booking endpoint
router.get('/therapists', (req, res) => {
  const therapists = [
    { id: 1, name: 'Dr. Jane Smith', specialty: 'Anxiety & Depression', available: true },
    { id: 2, name: 'Dr. John Doe', specialty: 'Trauma & PTSD', available: true },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Relationship Counseling', available: false }
  ];
  
  res.status(200).json({ therapists });
});

export default router; 