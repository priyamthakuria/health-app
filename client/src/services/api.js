import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle session expiration or unauthorized access
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API service methods
const apiService = {
  // Health resources
  getResources: () => api.get('/resources'),
  
  // Therapists
  getTherapists: () => api.get('/therapists'),
  
  // Authentication
  login: (credentials) => api.post('/users/login', credentials),
  register: (userData) => api.post('/users/register', userData),
  
  // User profile
  getUserProfile: () => api.get('/users/me'),
  updateUserProfile: (data) => api.put('/users/me', data),
};

export default apiService; 