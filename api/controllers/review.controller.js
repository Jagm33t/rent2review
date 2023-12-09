import Review from '../models/reviews.model.js';
import  errorHandler  from '../utils/error.js';

export const readReview = async (req, res, next) => {

  try {
    const review = await Review.find({});
    if (!review) {
      return next(errorHandler(404, 'Review not found!'));
    }
    res.status(200).json(review);
    console.log("revie", review)
  } catch (error) {
    next(error);
  }


}


export const createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    console.log(req.body)
    return res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};