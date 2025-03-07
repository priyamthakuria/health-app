import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// ES module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 5001,
    env: process.env.NODE_ENV || 'development',
  },
  
  // Database configuration (to be implemented)
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/health-app',
  },
  
  // JWT configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'your_development_secret_key',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  
  // CORS configuration
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },
  
  // File upload configuration
  upload: {
    maxSize: process.env.UPLOAD_MAX_SIZE || 5 * 1024 * 1024, // 5MB
    directory: path.join(__dirname, '../../uploads'),
  },
  
  // Client build path for production
  clientBuildPath: path.join(__dirname, '../../../client/dist'),
};

export default config; 