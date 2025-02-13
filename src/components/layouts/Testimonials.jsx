import React from 'react';
import Card from '../ui/Card';

const Testimonials = ({ userReviews, className }) => {
  console.log(userReviews[1]);
  return (
    <div
      className={`grid grid-rows-1 gap-4 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-4 ${className}`}
    >
      <div className='row-end-1 md:col-span-2 lg:col-start-2'>
        <Card userReview={userReviews[0]} size='large' />
      </div>
      <div className='lg:contents'>
        <div className='row-span-2 flex flex-col gap-y-4'>
          <Card userReview={userReviews[1]} />
          <Card userReview={userReviews[2]} />
          <Card userReview={userReviews[3]} />
        </div>
        <div className='row-start-1 flex flex-col gap-y-4'>
          <Card userReview={userReviews[4]} />
          <Card userReview={userReviews[5]} />
        </div>
      </div>
      <div className='flex flex-col gap-y-4 md:block lg:contents'>
        <div className='row-start-1 flex flex-col gap-y-4'>
          <Card userReview={userReviews[6]} />
          <Card userReview={userReviews[7]} />
        </div>
        <div className='row-span-2 flex flex-col gap-y-4'>
          <Card userReview={userReviews[8]} />
          <Card userReview={userReviews[9]} />
          <Card userReview={userReviews[10]} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
