const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const {
  validateRegister,
  validateLogin,
  validatePasswordResetRequest,
  validatePasswordReset,
  validatePasswordChange,
  validateInput
} = require('../middleware/validation');

// Public routes

// POST /api/auth/register - Register new user
router.post('/register', validateInput(validateRegister), AuthController.register);

// POST /api/auth/login - Login user
router.post('/login', validateInput(validateLogin), AuthController.login);

// POST /api/auth/forgot-password - Request password reset
router.post('/forgot-password', validateInput(validatePasswordResetRequest), AuthController.requestPasswordReset);

// POST /api/auth/reset-password - Reset password with token
router.post('/reset-password', validateInput(validatePasswordReset), AuthController.resetPassword);

// POST /api/auth/refresh-token - Refresh access token
router.post('/refresh-token', AuthController.refreshToken);

// Protected routes (require authentication)

// GET /api/auth/profile - Get current user profile
router.get('/profile', authenticateToken, AuthController.getProfile);

// POST /api/auth/change-password - Change password
router.post('/change-password', authenticateToken, validateInput(validatePasswordChange), AuthController.changePassword);

// POST /api/auth/logout - Logout user
router.post('/logout', authenticateToken, AuthController.logout);

module.exports = router;