# Health App

A modern web application for mental health services, providing resources, therapist booking, and support for users seeking mental health assistance.

## Features

- User Authentication (login/signup)
- Mental Health Resources
- Therapist Booking
- Chat Support
- Blog Articles

## Tech Stack

### Frontend
- React 18
- React Router
- Axios for API requests
- Vite for build tooling
- Vitest for testing

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- RESTful API architecture

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/priyo-m/health-app.git
cd health-app
```

2. Install dependencies for both client and server
```bash
# Install all dependencies (root, client, and server)
npm run install:all
```

3. Set up environment variables
```bash
# Copy the example .env file in the server directory
cp server/.env.example server/.env
# Edit the .env file with your configuration
```

### Running the Application

#### Development Mode

```bash
# Run both client and server concurrently
npm run dev

# Or run them separately
npm run server
npm run client
```

#### Production Mode

1. Build the client
```bash
npm run build
```

2. Start the server in production mode
```bash
npm start
```

## Project Structure

```
health-app/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source files
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # React components
│   │   ├── context/        # React context providers
│   │   ├── services/       # API services
│   │   └── styles/         # CSS styles
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend Node.js/Express application
│   ├── src/                # Source files
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   ├── app.js          # Express app setup
│   │   └── index.js        # Server entry point
│   ├── .env                # Environment variables
│   └── package.json        # Backend dependencies
│
├── .gitignore              # Git ignore file
├── package.json            # Root package.json for scripts
└── README.md               # Project documentation
```

## API Documentation

### Authentication Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `POST /api/users/forgot-password` - Request password reset
- `POST /api/users/reset-password` - Reset password with token

### User Endpoints

- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile

### Resource Endpoints

- `GET /api/resources` - Get mental health resources
- `GET /api/therapists` - Get available therapists

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

Project Link: [https://github.com/priyo-m/health-app](https://github.com/priyo-m/health-app)