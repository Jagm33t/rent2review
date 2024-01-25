import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./ReadReview.scss";

const ReadTenantReview = () => {
  const [allTenantReviews, setAllTenantReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [searchParams, setSearchParams] = useState({
    name: '',
    city: '',
    zip: '',
    state: '',
    country: ''
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/review/readtenant`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setAllTenantReviews(data);
          setError(false);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);


  // Handle input change
  const handleInputChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const query = new URLSearchParams(searchParams).toString();
    const response = await fetch(`/api/review/get?${query}`);
    const data = await response.json();

    setReviews(data);
    setIsSearchActive(true);
    setLoading(false);
  };
  const sortedReviews = [...allTenantReviews].sort((a, b) => new Date(b.date) - new Date(a.date));

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={`w-4 h-4 text-${i < rating ? 'yellow-300' : 'gray-300'} dark:text-${i < rating ? 'yellow-300' : 'gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className='read-container mx-100% p-4'>
      <h1>Tenant's Review</h1>
<form onSubmit={handleSubmit} className="form-container">
  <input
    type="text"
    name="name"
    value={searchParams.name}
    onChange={handleInputChange}
    placeholder="Name"
    className="input-field"
  />
  <input
    type="text"
    name="city"
    value={searchParams.city}
    onChange={handleInputChange}
    placeholder="City"
    className="input-field"
  />
  <input
    type="text"
    name="zip"
    value={searchParams.zip}
    onChange={handleInputChange}
    placeholder="Zip"
    className="input-field"
  />
  <input
    type="text"
    name="state"
    value={searchParams.state}
    onChange={handleInputChange}
    placeholder="State"
    className="input-field"
  />
  <input
    type="text"
    name="country"
    value={searchParams.country}
    onChange={handleInputChange}
    placeholder="Country"
    className="input-field"
  />
  <button
    type="submit"
    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
  >
    Search
  </button>
</form>

      {loading && <div>Loading...</div>}
  {error && <div>Error loading reviews</div>}
  {isSearchActive ? (
      reviews.map((review, index) => (
        <div key={index} className="review-card">
         <div className='review-card-sub  '>
         <div className="review-card-first ">
          <h2 className="review-heading">{review.property.name}</h2>
          <div className='review-address'>
          <p className="review-subtext">{review.property.city},</p>
          <p className="review-subtext">{review.property.state},{review.property.country}</p>
          <div className=" mt-2">
            <p className="review-subtext"> {review.property.zip}</p>
            <p className="review-subtext">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          </div>
         

       
            
              
            </div>
         
            <div className="ratings-grid">
            <div className='review-rating flex flex-row '>
                <p className="mr-1">Payment Timeliness:</p>
                {renderStars(review.ratings.paymentTimeliness)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">PropertyCare:</p>
                {renderStars(review.ratings.propertyCare)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">Lease Compliance:</p>
                {renderStars(review.ratings.leaseCompliance)}
              </div>
              {/* <div className='review-rating flex'>
                <p className="mr-2">Cleanliness:</p>
                {renderStars(review.ratings.overallCleanliness)}
              </div> */}
              {/* <div className='review-rating flex'>
                <p className="mr-2">NoiseLevel:</p>
                {renderStars(review.ratings.noiseLevel)}
              </div> */}
              <div className='review-rating flex'>
                <p className="mr-2">Communication:</p>
                {renderStars(review.ratings.communication)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">Property Condition:</p>
                {renderStars(review.ratings.propertyCondition)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">Neighbor Relations:</p>
                {renderStars(review.ratings.neighborRelations)}
              </div>
              {/* <div className='review-rating flex'>
                <p className="mr-2">Management:</p>
                {renderStars(review.ratings.managementResponsiveness)}
              </div> */}
            
            </div>
          <h2 className='review-written'>Review</h2>
            <p className="review-detail">{review.reviewText}</p>
      </div>
          
          </div>
    ))
  ) : (
    sortedReviews.map((review, index) => (
      <div key={index} className="review-card">
      <div className='review-card-sub  '>
      <div className="review-card-first ">
          <h2 className="review-heading">{review.property.name}</h2>
          <div className='review-address'>
          <p className="review-subtext">{review.property.city},</p>
          <p className="review-subtext">{review.property.state},{review.property.country}</p>
          <div className=" mt-2">
            <p className="review-subtext"> {review.property.zip}</p>
            <p className="review-subtext">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          </div>
         

       
            
              
            </div>

            <div className="ratings-grid">
            <div className='review-rating flex flex-row '>
                <p className="mr-1">Payment Timeliness:</p>
                {renderStars(review.ratings.paymentTimeliness)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">PropertyCare:</p>
                {renderStars(review.ratings.propertyCare)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">Lease Compliance:</p>
                {renderStars(review.ratings.leaseCompliance)}
              </div>
              {/* <div className='review-rating flex'>
                <p className="mr-2">Cleanliness:</p>
                {renderStars(review.ratings.overallCleanliness)}
              </div> */}
              {/* <div className='review-rating flex'>
                <p className="mr-2">NoiseLevel:</p>
                {renderStars(review.ratings.noiseLevel)}
              </div> */}
              <div className='review-rating flex'>
                <p className="mr-2">Communication:</p>
                {renderStars(review.ratings.communication)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">Property Condition:</p>
                {renderStars(review.ratings.propertyCondition)}
              </div>
              <div className='review-rating flex'>
                <p className="mr-2">Neighbor Relations:</p>
                {renderStars(review.ratings.neighborRelations)}
              </div>
              {/* <div className='review-rating flex'>
                <p className="mr-2">Management:</p>
                {renderStars(review.ratings.managementResponsiveness)}
              </div> */}
            
            </div>
          <h2 className='review-written'>Review</h2>
            <p className="review-detail">{review.reviewText}</p>
      </div>
          
          </div>
        ))
        )}
      </div>
      );
};

export default ReadTenantReview;



{/* <button
    class="bg-green-200 text-green-700 rounded-xl px-3 py-1 absolute right-2 text-sm"
  >
    4.5
  </button> */}