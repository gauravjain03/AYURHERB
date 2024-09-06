import React from 'react';
import './HerbCard.css';

const HerbCard = ({ herb, onClick, onBookmark, isBookmarked }) => {
  return (
    <div className="herb-card" onClick={onClick}>
      <img src={herb.thumbnail} alt={herb.title} className="herb-thumbnail" />
      <button 
        className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`} 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up to card
          onBookmark();
        }}
      >
        {isBookmarked ? 'Unbookmark' : 'Bookmark'}
      </button>
    </div>
  );
};

export default HerbCard;
