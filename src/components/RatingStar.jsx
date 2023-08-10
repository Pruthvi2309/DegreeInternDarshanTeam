import React from 'react';
import './Ratingstar.css'

const RatingStar = ({ value, onClick }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span
      key={index}
      className={`rating-star ${index < value ? 'active' : ''}`}
      onClick={() => onClick(index + 1)}
    >
      &#9733;
    </span>
  ));

  return <div className="rating-stars">{stars}</div>;
};

export default RatingStar;
