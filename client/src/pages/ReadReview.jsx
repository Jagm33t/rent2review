import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ReadReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/review/get`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setReviews(data);
          console.log(reviews)
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
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={`w-4 h-4 text-${i < rating ? 'yellow-300' : 'gray-300'} dark:text-${i < rating ? 'yellow-300' : 'gray-500'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.128-.39.501-.64.9-.64s.772.25.9.64l1.716 5.257h5.52c.417 0 .75.335.75.75s-.333.75-.75.75h-5.52l-1.716 5.257c-.128.39-.501.64-.9.64s-.772-.25-.9-.64L7.333 9.684H1.813c-.417 0-.75-.335-.75-.75s.333-.75.75-.75h5.52L9.049 2.927z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error loading reviews</div>}
      {!loading && !error && reviews.map((review, index) => (
        <div key={index} className="bg-white p-6 shadow rounded-lg my-6">
         <div className="mt-6">
            <p className="text-gray-700">{review.reviewText}</p>
            <div className="flex mt-2">
              {/* Example: render stars for 'healthAndSafety' rating */}
              <p className="mr-2">Health and Safety:</p>
              {renderStars(review.ratings.healthAndSafety)}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{review.property?.name}</h2>
            <p className="text-gray-600">{review.property?.city}, {review.property?.state}, {review.property?.country}</p>
            <p className="text-gray-500">Zip: {review.property?.zip}</p>
            <p className="text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
          </div>
          <div className="mt-6">
            <p className="text-gray-700">{review.reviewText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadReview;
