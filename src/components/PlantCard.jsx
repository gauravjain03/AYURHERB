import React from 'react';

const PlantCard = ({ imageSrc, name, type, onBookmarkToggle, isBookmarked, onLearnMore }) => {
  return (
    <div className="bg-sec-color shadow-lg rounded-lg overflow-hidden w-full border border-gray-200">
      {/* Image with reduced height */}
      <img src={imageSrc} alt={name} className="w-full h-80 object-cover p-3 rounded-2xl" />

      {/* Plant Name and Type */}
      <div className="p-4 pt-1 bg-sec-color text-center">
        <h3 className="text-2xl font-semibold text-gray-800 text-left">{name}</h3>
        <p className="text-xs text-gray-500 text-left">{type}</p>
      </div>

      {/* Card Footer with Icons */}
      <div className="relative -z-0">
        <button className="text-gray-600 hover:text-blue-500 p-4" onClick={onLearnMore}>
          <i className="fas fa-info-circle"></i> Learn More
        </button>
        {/* Bookmark and Share Icons */}
        <div className="absolute bottom-2 right-2 flex space-x-4 text-xl">
          <button
            className={`p-1.5 hover:bg-gray-100 hover:border-none rounded-md transition-colors duration-200 ${isBookmarked ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'}`}
            onClick={() => onBookmarkToggle(name)}
          >
            <i className={isBookmarked ? "fas fa-check" : "fas fa-bookmark"}></i>
          </button>
          <button className="text-gray-600 hover:text-green-500 p-1.5 hover:bg-gray-100 hover:border-none rounded-md transition-colors duration-200">
            <i className="fas fa-share-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
