import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes/api.routes.js';
import config from './config/index.js';

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize express app
const app = express();

// Middleware
app.use(cors(config.cors));
app.use(helmet()); // Adds security headers
app.use(morgan('dev')); // Logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Parse cookies

// API Routes
app.use('/api', apiRoutes);

// Serve static assets in production
if (config.server.env === 'production') {
  // Set static folder
  app.use(express.static(config.clientBuildPath));
  
  // Any route that is not an API route should be handled by the React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(config.clientBuildPath, 'index.html'));
  });
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server',
    error: config.server.env === 'production' ? {} : err
  });
});

export default app; 