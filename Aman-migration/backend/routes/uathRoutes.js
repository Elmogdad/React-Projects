import express from 'express';
import {
  register,
  login,
  logout,
  getUsers,
  updateUser,
  deleteUser
} from '../controllers/authController.js';

import { protect, adminOnly, allowRoles } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/users', protect, adminOnly, getUsers);
router.put('/users/:id', protect, updateUser); // user or admin
router.delete('/users/:id', protect, adminOnly, deleteUser);

// Export the router
export default router;