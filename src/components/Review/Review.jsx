import { useEffect, useState } from 'react';

export default function Review({ gigId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews for the specific gigId
    async function fetchReviews() {
      try {
        const response = await fetch(`/api/reviews/${gigId}`); 
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <>
      <section className="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
        <div className="container px-4 mx-auto">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="mb-2 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden"
            >
              <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
                <div className="flex flex-wrap items-center">
                  <h4 className="w-full pt-4 md:w-auto text-xl font-heading font-medium">
                    {review.title}
                  </h4>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-white">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-2/3 mb-6 md:mb-0">
                    <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                      {review.description}
                    </p>
                  </div>
                  {/* Add other components or data to display for each review */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
