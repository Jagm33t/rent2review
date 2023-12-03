import Review from '../models/reviews.model.js';
import  errorHandler  from '../utils/error.js';



export const createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    console.log(req.body)
    return res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};