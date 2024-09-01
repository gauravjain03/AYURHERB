// HerbCard.js
import React from 'react';
import './HerbCard.css';

const HerbCard = ({ herb, onClick }) => {
  return (
    <div className="herb-card" onClick={() => onClick(herb)}>
      <img src={herb.thumbnail} alt={herb.title} className="herb-thumbnail" />
      <p className="herb-title">{herb.title}</p>
    </div>
  );
};

export default HerbCard;