import React, { useState } from 'react';
import './HerbDetail.css';

const HerbDetail = ({ herb, onClose }) => {
  const [notes, setNotes] = useState('');

  const handleDownloadNotes = () => {
    const blob = new Blob([notes], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${herb.title}_notes.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    // Implement share functionality here
    if (navigator.share) {
      navigator.share({
        title: herb.title,
        text: `Check out information about ${herb.title}. Botanical Name: ${herb.botanicalName}. Region: ${herb.region}. Type: ${herb.type}. Medicinal Uses: ${herb.medicinalUses}.`,
        url: window.location.href
      }).catch(console.error);
    } else {
      alert('Share functionality is not supported on this browser.');
    }
  };

  return (
    <div className="herb-detail">
      <div className="herb-detail-content">
        <div className="herb-model">
          <iframe src={herb.modelSrc} title={herb.title} allowFullScreen></iframe>
        </div>
        <div className="herb-info">
          <h2>{herb.title}</h2>
          <p><strong>Botanical Name:</strong> {herb.botanicalName}</p>
          <p><strong>Common Names:</strong> {herb.commonNames}</p>
          <p><strong>Region:</strong> {herb.region}</p>
          <p><strong>Type:</strong> {herb.type}</p>
          <p><strong>Medicinal Uses:</strong> {herb.medicinalUses}</p>
          <p><strong>Habitat:</strong> {herb.habitat}</p>
          <p><strong>How to Find:</strong> {herb.howToFind}</p>
        </div>
        <div className="notes-section">
          <textarea 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)} 
            placeholder="Add your notes here..."
          ></textarea>
          <button className="download-notes-button" onClick={handleDownloadNotes}>
            Download Notes
          </button>
          <button className="share-button" onClick={handleShare}>
            Share
          </button>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default HerbDetail;
