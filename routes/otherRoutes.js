import express from 'express';
import {
  contact,
  courseRequest,
  getDashboardStat,
} from '../controllers/othersController.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();
// For Contact
router.route('/contact').post(contact);

// Request a Course
router.route('/courserequest').post(courseRequest);

// Get Admin Stats

router
  .route('/admin/stats')
  .get(isAuthenticated, authorizeAdmin, getDashboardStat);
export default router;
