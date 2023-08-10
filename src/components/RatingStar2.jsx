import React, { useState } from 'react';
import RatingStar from './RatingStar';
import './Ratingstar.css';

function RatingStar2() {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="App">
      <RatingStar value={rating} onClick={handleRatingClick} />
    </div>
  );
}

export default RatingStar2;
