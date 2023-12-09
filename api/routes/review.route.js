import express from 'express';
import {readReview, createReview} from '../controllers/review.controller.js'

const router = express.Router();


router.get('/get', readReview);
router.post('/create', createReview);


export default router;