// src/components/PlantGrid.jsx
import React from "react";
import HerbCard from "./HerbCard";
import "../PlantGrid.css";

const PlantGrid = ({ herbs, onCardClick }) => {
  return (
    <div className="plant-grid">
      {herbs.map((herb, index) => (
        <HerbCard key={index} herb={herb} onClick={onCardClick} />
      ))}
    </div>
  );
};

export default PlantGrid;