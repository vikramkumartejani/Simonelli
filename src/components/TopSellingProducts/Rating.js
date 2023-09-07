import React, { useState } from 'react';

const Rating = ({ value, maxValue, onChange }) => {
  const [currentRating, setCurrentRating] = useState(value);

  const handleStarClick = (newValue) => {
    setCurrentRating(newValue);
    onChange(newValue);
  };

  const stars = [];

  for (let i = 1; i <= maxValue; i++) {
    const starClass = i <= currentRating ? ' text-OrangeBrown' : 'text-VeryDarkGray';
    stars.push(
      <span
        key={i}
        className={` text-lg cursor-pointer ${starClass}`}
        onClick={() => handleStarClick(i)}
      >
        ★
      </span>
    );
  }
  return <div className="flex">{stars}</div>;
};

export default Rating;
