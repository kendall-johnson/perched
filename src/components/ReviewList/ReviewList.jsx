import React, { useState } from 'react'
import ReviewForm from '../ReviewForm/ReviewForm'
import Review from '../Review/Review'

export default function ReviewList({ gigId }) {
  const [reviewCount, setReviewCount] = useState(0);

  function incrementReviewCount() {
    setReviewCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <ReviewForm gigId={gigId} onReviewPosted={incrementReviewCount} />
      <Review gigId={gigId} reviewCount={reviewCount} />
    </>
  );
}