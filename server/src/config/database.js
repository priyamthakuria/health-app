import mongoose from 'mongoose';
import config from './index.js';

// Set mongoose options
mongoose.set('strictQuery', false);

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database.url);
    
    console.info(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.info('MongoDB connection established');
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.info('MongoDB connection disconnected');
});

// Handle application termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.info('MongoDB connection closed due to app termination');
  process.exit(0);
});

export default connectDB; 