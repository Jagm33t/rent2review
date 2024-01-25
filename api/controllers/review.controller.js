import Review from '../models/reviews.model.js';
import Tenant from '../models/tenant.model.js';
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
export const readtenant = async (req, res, next) => {

  try {
    const tenant = await Tenant.find({});
    if (!tenant) {
      return next(errorHandler(404, 'Tenant not found!'));
    }
    res.status(200).json(tenant);
    console.log("revie", tenant)
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
export const tenantReview = async (req, res, next) => {
  try {
    const tenant = await Tenant.create(req.body);
    console.log(req.body)
    return res.status(201).json(tenant);
  } catch (error) {
    next(error);
  }
};
export const getReviews = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;

    // Extract search parameters from the query
    const name = req.query.name || '';
    const city = req.query.city || '';
    const zip = req.query.zip || '';
    const state = req.query.state || '';
    const country = req.query.country || '';

    const sort = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';

    // Constructing the query with individual search parameters
    const searchQuery = {};
    if (name) searchQuery['property.name'] = { $regex: name, $options: 'i' };
    if (city) searchQuery['property.city'] = { $regex: city, $options: 'i' };
    if (zip) searchQuery['property.zip'] = { $regex: zip, $options: 'i' };
    if (state) searchQuery['property.state'] = { $regex: state, $options: 'i' };
    if (country) searchQuery['property.country'] = { $regex: country, $options: 'i' };

    // Find Reviews with the search query
    const Reviews = await Review.find(searchQuery)
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(Reviews);
  } catch (error) {
    next(error);
  }
};
