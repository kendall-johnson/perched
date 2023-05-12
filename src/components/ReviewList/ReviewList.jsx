import React from 'react'
import ReviewForm from '../ReviewForm/ReviewForm'
import Review from '../Review/Review'

export default function ReviewList({ gigId }) {
  return (
    <>
        <ReviewForm gigId={gigId} />
        <Review gigId={gigId} />
    </>
  )
}
