import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReadReview = () => {
  const [reviews, setReviews] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/review/get`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
        } else {
          setReviews(data); // Assuming data is an array of reviews
          setError(false);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading reviews</div>;

  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-6 shadow rounded-lg my-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{review.property?.name}</h2>
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
