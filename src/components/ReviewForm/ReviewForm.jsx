import React, { useState } from 'react';
import { createReview } from '../../utilities/reviews-api';

export default function ReviewForm({ gigId, onReviewPosted }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      title,
      description,
      gig: gigId
    };
    try {
      const response = await createReview(newReview);
      localStorage.setItem('review', JSON.stringify(newReview));
      if (onReviewPosted) {
        onReviewPosted();
      }
      setTitle('');
      setDescription('');
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <h1 className='inline-block my-5 text-3xl font-heading font-medium  hover:text-darkBlueGray-700'>Write a Review!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="helper-text" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Review Title</label>
        <input type="text" id="helper-text" name='title' aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BEST GIG EVER!!" value={title} onChange={handleTitleChange} />
        <label htmlFor="message" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">Your Review</label>
        <textarea id="message" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." value={description} onChange={handleDescriptionChange} />
        <div className="flex justify-start mt-4 w-full md:w-2/3 px-2 mb-2 md:mb-0">
          <button className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-black text-center bg-yellow-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-yellow-600 rounded-xl" type='submit'>Submit</button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Review Submitted!</h2>
            <p>Your review has been successfully submitted.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}