import express from 'express';
import {createReview} from '../controllers/review.controller.js'

const router = express.Router();

router.post('/create', createReview);


export default router;