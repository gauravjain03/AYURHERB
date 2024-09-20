import React from 'react';

const PlantCard = ({ imageSrc, name, type, onBookmarkToggle, isBookmarked, onLearnMore }) => {
  return (
    <div
      className="bg-sec-color shadow-lg rounded-lg overflow-hidden w-full border border-gray-200 cursor-pointer pb-1 transition transform hover:scale-105 duration-500 ease-in-out" onClick={onLearnMore}  // Make the entire card clickable
    >
      {/* Image with reduced height */}
      <img src={imageSrc} alt={name} className="w-full h-80 object-cover p-3 rounded-2xl" />

      {/* Plant Name and Type */}
      <div className="p-4 pt-1 bg-sec-color text-center">
        <h3 className="text-2xl font-semibold text-gray-800 text-left">{name}</h3>
        <p className="text-xs text-gray-500 text-left">{type}</p>
      </div>

      {/* Card Footer with Icons */}
      <div className="relative -z-0">
        {/* Removed onClick from Learn More button */}
        <div className="absolute bottom-2 right-2 flex space-x-4 text-xl">
          {/* Bookmark Button */}
          <button
            className={`p-1.5 mb-2 hover:bg-gray-100 hover:border-none rounded-md transition-colors duration-200 ${isBookmarked ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'}`}
            onClick={(e) => {
              e.stopPropagation();  // Prevent triggering the card click when clicking bookmark
              onBookmarkToggle(name);
            }}
          >
            <i className={isBookmarked ? "fas fa-check" : "fas fa-bookmark"}></i>
          </button>

          {/* Share Button */}
          <button
            className="mb-2 text-gray-600 hover:text-green-500 p-1.5 hover:bg-gray-100 hover:border-none rounded-md transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}  // Prevent triggering the card click
          >
            <i className="fas fa-share-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
