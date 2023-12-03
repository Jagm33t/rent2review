import React, { useState } from 'react';
import axios from 'axios';

const PostReview = () => {
  const [review, setReview] = useState({
    property: {
      name: '',
      country: '',
      city:'',
      state:'',
      zip:'',
    },
    ratings: {
      healthAndSafety: 0,
      respect: 0,
      tenantPrivacy: 0,
      repair: 0,
      rentalStability: 0,
      overallCleanliness: 0,
      noiseLevel: 0,
      maintenanceResponse: 0,
      securityAndSafety: 0,
      amenities: 0,
      neighborhoodAndLocation: 0,
      managementResponsiveness: 0,
      pestControl: 0,
      valueForMoney: 0,
      leaseFlexibility: 0,
      utilityServices: 0,
      communityAndSocialEnvironment: 0,
      ecoFriendliness: 0,
      interiorCondition: 0,
      exteriorAndGrounds: 0,
    },
    reviewText: '',
    date: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in review.property) {
      setReview({ 
        ...review, 
        property: {
          ...review.property,
          [name]: value
        }
      });
    } else if (name in review.ratings) {
      setReview({ 
        ...review, 
        ratings: {
          ...review.ratings,
          [name]: value
        }
      });
    } else {
      setReview({
        ...review,
        [name]: value
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = review;
   
    try {
      const res = await fetch('/api/review/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...reviewData,
         
        }),
      });
      const data = await res.json();
    console.log("data sent", data)
      if (data.success === false) {
        setError(data.message);
      }
      
    } catch (error) {
      setError(error.message);
    }
    
  }
  // This is a placeholder for rating inputs, replace with your actual rating input components
  const renderRatingInput = (name) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((number) => (
          <label key={number} className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name={name}
              value={number}
              checked={review.ratings[name] === number}
              onChange={handleInputChange}
            />
            <span className="ml-1 text-sm">{number}</span>
          </label>
        ))}
      </div>
    );
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Submit Your Property Review</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Landlord Name (or Property Management Company) - No Addresses
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter property name"
            value={review.property.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyAddress">
          Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            name="country"
            placeholder="Enter  country"
            value={review.property.country}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyAddress">
          City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            name="city"
            placeholder="Enter City"
            value={review.property.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyAddress">
          State/Province
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            name="state"
            placeholder="Enter State/Province"
            value={review.property.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyAddress">
         ZIP/Postal Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            name="zip"
            placeholder="Enter ZIP/Postal Code"
            value={review.property.zip}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="rating rating-lg">
          <p className="text-gray-700 text-sm font-bold mb-2">Health and Safety Rating</p>
          {renderRatingInput('healthAndSafety')}
        </div>

        <div className="mb-4">
          <p className="text-gray-700 text-sm font-bold mb-2">Health and Safety Rating</p>
          {renderRatingInput('healthAndSafety')}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reviewText">
            Review Text
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reviewText"
            name="reviewText"
            placeholder="Enter your review"
            value={review.reviewText}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default PostReview;