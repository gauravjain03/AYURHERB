import React from 'react';
import './HerbDetail.css';

const HerbDetail = ({ selectedHerb, onClose, onBookmark, isBookmarked }) => {
  const handleShare = () => {
    const shareData = {
      title: selectedHerb.title,
      text: `Check out this herb: ${selectedHerb.title} (${selectedHerb.botanicalName}) - ${selectedHerb.medicinalUses}`,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  if (!selectedHerb) return null;

  return (
    <div className="herb-detail">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="herb-detail-content">
        <div className="herb-model">
          <iframe
            title={selectedHerb.title}
            frameBorder="0"
            allowFullScreen
            src={selectedHerb.modelSrc}
          ></iframe>
        </div>
        <div className="herb-info">
          <h2>{selectedHerb.title}</h2>
          <p><strong>Botanical Name:</strong> {selectedHerb.botanicalName}</p>
          <p><strong>Common Names:</strong> {selectedHerb.commonNames}</p>
          <p><strong>Habitat:</strong> {selectedHerb.habitat}</p>
          <p><strong>Medicinal Uses:</strong> {selectedHerb.medicinalUses}</p>
          <button className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`} onClick={() => onBookmark(selectedHerb)}>
            {isBookmarked ? 'Unbookmark' : 'Bookmark'}
          </button>
          <button className="share-button" onClick={handleShare}>
            Share
          </button>
        </div>
        <div className="herb-notes">
          <h3>Take Notes</h3>
          <textarea
            placeholder="Write your notes here..."
          ></textarea>
          <button className="download-button">
            Download Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HerbDetail;