import { useEffect, useState } from "react";
import { fetchReviewById } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const reviewById = async () => {
      const data = await fetchReviewById(movieId);
      setReviews(data.results);
    };
    reviewById();
  }, [movieId]);

  if (!reviews) {
    return <p>Please wait...</p>;
  }
  if (reviews.length === 0) {
    return <p>There are no reviews for this movie!</p>;
  }
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>{review.content}</li>
      ))}
    </ul>
  );
};

export default MovieReviews;
