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

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error loading reviews</div>}
      {!loading && !error && reviews.map((review, index) => (
        <div key={index} className="bg-white p-6 shadow rounded-lg my-6">
          <div className="mb-6">
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
