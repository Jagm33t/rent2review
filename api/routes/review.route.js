import express from 'express';
import {readReview, createReview, getReviews,tenantReview ,readtenant} from '../controllers/review.controller.js'

const router = express.Router();


router.get('/read', readReview);
router.get('/readtenant', readtenant);
router.post('/create', createReview);
router.post('/tenant', tenantReview);
router.get('/get', getReviews);


export default router;