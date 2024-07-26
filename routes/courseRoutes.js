import express from 'express';
import {
  addLectures,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from '../controllers/courseController.js';
import singleUpload from '../middlewares/multer.js';
import {
  authorizeAdmin,
  authorizeSubscribers,
  isAuthenticated,
} from '../middlewares/auth.js';

const router = express.Router();

// Get ALL courses without Lectures
router.route('/courses').get(getAllCourses);

// create new course - only admin
router
  .route('/createcourse')
  .post(isAuthenticated, authorizeAdmin, singleUpload, createCourse);

// Add lecture, Delete Course , Get Course Details

router
  .route('/course/:id')
  .get(isAuthenticated, authorizeSubscribers, getCourseLectures)
  .post(isAuthenticated, authorizeAdmin, singleUpload, addLectures)
  .delete(isAuthenticated, authorizeAdmin, deleteCourse);

// Delete Lecture

router.route('/lecture').delete(isAuthenticated, authorizeAdmin, deleteLecture);
export default router;
