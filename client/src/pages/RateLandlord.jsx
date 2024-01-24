import React, { useState,useEffect } from 'react';

// import axios from 'axios';
import { Country, State, City } from 'country-state-city';



const RateLandlord = () => {
  const [errorMessage, setErrorMessage] = useState('');
const[radioErrorMessage,setRadioErrorMessage]  = useState('');
// State for checkbox validation
const [checkboxStates, setCheckboxStates] = useState({
  publicReview: false,
  reviewPolicy: false,
  noTakeDown: false
});

 // Handle change for checkboxes
 const handleCheckboxChange = (e) => {
  setCheckboxStates({
    ...checkboxStates,
    [e.target.name]: e.target.checked,
  });
};


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
      depositReturnChances: 0,
      tenantPrivacy: 0,
      repair: 0,
      rentalStability: 0,
      overallCleanliness: 0,
      noiseLevel: 0,
      maintenanceResponse: 0,
      security: 0,
      amenities: 0,
      managementResponsiveness: 0,
    },
    reviewText: '',
    date: new Date(),
  });
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  function validatePostalCode(postalCode, countryCode) {
    let regex;
    switch (countryCode) {
      case 'US':
        regex = /^\d{5}(-\d{4})?$/;
        break;
      case 'CA':
        regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        break;
      default:
        return false;
    }
    return regex.test(postalCode);
  }
  
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    const filteredCountries = allCountries.filter(country => 
      country.isoCode === 'CA' || country.isoCode === 'US'
    );
    setCountries(filteredCountries);
  }, []);
  
  

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setStates(State.getStatesOfCountry(countryId));
    setCities([]); // Reset cities when country changes
    handleInputChange(e);
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setCities(City.getCitiesOfState(review.property.country, stateId));
    handleInputChange(e);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in review.property) {
      setReview({
        ...review,
        property: { ...review.property, [name]: value },
      });
    } else if (name in review.ratings) {
      setReview({
        ...review,
        ratings: { ...review.ratings, [name]: parseInt(value, 10) },
      });
    } else {
      setReview({ ...review, [name]: value });
    }
  };
  const renderRatingInput = (category) => (
    <div className="rating mb-4 flex items-center">
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            className="hidden"
            value={num}
            name={category}
            id={`${category}${num}`}
            type="radio"
            onChange={handleInputChange}
            checked={review.ratings[category] === num}
          />
          <label
            className={`ms-1 cursor-pointer ${review.ratings[category] >= num ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'}`}
            title={`${num} stars`}
            htmlFor={`${category}${num}`}
          >
            <svg width="20" height="20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

      // Check if all checkboxes are checked
      if (!Object.values(checkboxStates).every(value => value)) {
        setRadioErrorMessage('Please agree to all terms before submitting your review.');
        return;
      }

  const isPostalValid = validatePostalCode(review.property.zip, review.property.country);

  if (!isPostalValid) {
    setErrorMessage('Invalid postal code for the selected country.');
    return;
  }
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
      alert('Review Sent, Thank You');
      
      setReview({
        property: {
          name: '',
          country: '',
          city:'',
          state:'',
          zip:'',
        },
        ratings: {
          // reset all ratings to 0 or initial values
        },
        reviewText: '',
        date: new Date(),
      });
      
    console.log("data sent", data)
      if (data.success === false) {
        setError(data.message);
      setReview({
  property: {
    name: '',
    country: '',
    city:'',
    state:'',
    zip:'',
  },
  ratings: {
    // reset all ratings to 0 or initial values
  },
  reviewText: '',
  date: new Date(),
});

        
      }
      
    } catch (error) {
      setError(error.message);
    }
    setErrorMessage('');
    setRadioErrorMessage('');
    // Reset checkboxes state after successful form submission
    setCheckboxStates({
      publicReview: false,
      reviewPolicy: false,
      noTakeDown: false
    });
  }

 
  return (
    
    <div className="container mx-100% p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Submit Your  Review</h1>
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

       {/* Country Dropdown */}
       <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={review.property.country}
            onChange={handleCountryChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
     {/* State Dropdown */}
     <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
            State/Province
          </label>
          <select
            id="state"
            name="state"
            value={review.property.state}
            onChange={handleStateChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select State/Province</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
   {/* City Dropdown */}
   <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <select
            id="city"
            name="city"
            value={review.property.city}
            onChange={handleInputChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propertyAddress">
         ZIP/Postal Code
          </label>
          <input
          className="shadow appearance-none border-red-950 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            name="zip"
            placeholder="Enter ZIP/Postal Code"
            value={review.property.zip}
            onChange={handleInputChange}
            style={{ borderColor: 'red' }}
            required
          />
           {errorMessage && (
    <div className="text-red-500 text-sm mb-2">
      {errorMessage}
    </div>
  )}
        </div>
       
        
        {Object.keys(review.ratings).map((category) => (
        <div key={category}>
          <label className="block text-gray-700 text-sm font-bold mb-2">{category}</label>
          {renderRatingInput(category)}
        </div>
      ))}
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
        <div className="mb-4">
        <div>
          <input
            type="checkbox"
            id="publicReview"
            name="publicReview"
            checked={checkboxStates.publicReview}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="publicReview" className="ml-2">
          I acknowledge that my review posted on Tenant 2 Landlord will be publicly accessible and may be seen by anyone, including the landlord I am reviewing
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="reviewPolicy"
            name="reviewPolicy"
            checked={checkboxStates.reviewPolicy}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="reviewPolicy" className="ml-2">
          I am aware that once my review is submitted on Tenant 2 Landlord  it cannot be removed unless it contravenes the policies of Rate The Landlord. It is also recommended by Rate The Landlord to submit reviews after the completion of my rental period
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="noTakeDown"
            name="noTakeDown"
            checked={checkboxStates.noTakeDown}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="noTakeDown" className="ml-2">
          I recognize that Tenant 2 Landlord bears no liability for any repercussions that might arise from my submitted review.
          </label>
        </div>
      {radioErrorMessage && (
    <div className="text-red-500 text-sm mb-2">
      {radioErrorMessage}
    </div>
  )}
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

export default RateLandlord;