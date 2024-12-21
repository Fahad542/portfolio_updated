
import React from 'react';


const AnimatedCard = ({ imageUrl, description }) => {
  return (
    <div className="animated-card">
      <div className="card-image">
        <img src={imageUrl} alt="Card visual" />
      </div>
      <div className="card-content">
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
