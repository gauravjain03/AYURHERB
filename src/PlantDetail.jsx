import React from 'react';
import './PlantDetail.css'; // Add styling here

const PlantDetail = ({ selectedHerb, onClose }) => {
  if (!selectedHerb) return null;

  return (
    <div className="plant-detail">
      <div className="model-container">
        <iframe
          title={selectedHerb.title}
          frameBorder="0"
          allowFullScreen
          src={selectedHerb.modelSrc}
          width="100%"
          height="480"
        ></iframe>
      </div>
      <div className="plant-info">
        <h2>{selectedHerb.title}</h2>
        <p><strong>Botanical Name:</strong> {selectedHerb.botanicalName}</p>
        <p><strong>Common Names:</strong> {selectedHerb.commonNames}</p>
        <p><strong>Habitat:</strong> {selectedHerb.habitat}</p>
        <p><strong>Medicinal Uses:</strong> {selectedHerb.medicinalUses}</p>
        <p><strong>How to Find:</strong> {selectedHerb.howToFind}</p>
      </div>
      <div className="media-container">
        <img src={selectedHerb.thumbnail} alt={selectedHerb.title} />
        {/* Add video links if available */}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PlantDetail;
