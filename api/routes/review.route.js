import express from 'express';
import {readReview, createReview, getReviews} from '../controllers/review.controller.js'

const router = express.Router();


router.get('/read', readReview);
router.post('/create', createReview);
router.get('/get', getReviews);


export default router;