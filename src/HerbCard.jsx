import React from 'react';
import './HerbCard.css';

const HerbCard = ({ herb, onClick, isBookmarked, onBookmark }) => {
  return (
    <div className="herb-card">
      <img src={herb.thumbnail} alt={herb.title} className="herb-thumbnail" />
      <p className="herb-title">{herb.title}</p>
      <div className="herb-buttons">
        <button className="learn-more-button" onClick={() => onClick(herb)}>Learn More</button>
        <button className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`} onClick={() => onBookmark(herb)}>
          {isBookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
      </div>
    </div>
  );
};

export default HerbCard;
