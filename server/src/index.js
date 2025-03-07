import app from './app.js';
import config from './config/index.js';
import connectDB from './config/database.js';

// Connect to database
if (config.server.env !== 'test') {
  connectDB();
}

// Start server
const server = app.listen(config.server.port, () => {
  console.info(`Server running in ${config.server.env} mode on port ${config.server.port}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  // Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

export default server; 