import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerification,
} from '../controllers/paymentController.js';

const router = express.Router();

// Buy subscription

router.route('/subscribe').get(isAuthenticated, buySubscription);

// verify payment and store reference in data base
router.route('/paymentverification').post(isAuthenticated, paymentVerification);

// get RazorpayKey
router.route('/razorpaykey').get(getRazorPayKey);

router.route('/subscribe/cancel').delete(isAuthenticated, cancelSubscription);
export default router;
