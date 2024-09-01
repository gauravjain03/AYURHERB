// VirtualHerbalGarden.js
import React, { useState } from 'react';
import HerbCard from './HerbCard';
import HerbDetail from './HerbDetail';
import './VirtualHerbalGarden.css';

const VirtualHerbalGarden = () => {
  const [selectedHerb, setSelectedHerb] = useState(null);

  const herbs = [
    {
      title: "Holy Basil",
      thumbnail: "https://m.media-amazon.com/images/I/61tXHtetSxL._SL1000_.jpg",
      modelSrc: "https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed?dnt=1",
      botanicalName: "Ocimum tenuiflorum",
      commonNames: "Tulsi",
      habitat: "Tropical regions",
      medicinalUses: "Used for stress relief, immune support",
      howToFind: "Common in gardens and markets"
    },
    {
      title: "Aloe Vera",
      thumbnail: "https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?v=1676457070",
      modelSrc: "https://sketchfab.com/models/039478621559470a9bc8b80e62d916c4/embed?autospin=1&camera=0&preload=1&dnt=1",
      botanicalName: "Aloe barbadensis miller",
      commonNames: "Aloe, Aloe Vera",
      habitat: "Arid regions",
      medicinalUses: "Used for skin care, digestive health",
      howToFind: "Common in herbal stores and gardens"
    },
    {
      title: "Bay - Herb",
      thumbnail: "https://thegrowers-exchange.com/cdn/shop/products/Bay_2000x.jpg?v=1575321764",
      modelSrc: "https://sketchfab.com/models/8a84499140d34eab8c22a4cc77451eef/embed?autospin=1&camera=0&preload=1&dnt=1",
      botanicalName: "Laurus nobilis",
      commonNames: "Bay Leaf",
      habitat: "Mediterranean regions",
      medicinalUses: "Used for digestive issues, respiratory health",
      howToFind: "Available in grocery stores and herbal shops"
    },
    {
      title: "Parsley",
      thumbnail: "https://3.imimg.com/data3/FG/EO/MY-10774892/parsley-plant-1000x1000.jpg",
      modelSrc: "https://sketchfab.com/models/7f9418d3d7ee45ada91ce016cb62d6f0/embed?autospin=1&preload=1&dnt=1",
      botanicalName: "Petroselinum crispum",
      commonNames: "Parsley",
      habitat: "Temperate regions",
      medicinalUses: "Used for urinary tract health, digestive health",
      howToFind: "Common in kitchens and gardens"
    },
    {
      title: "Echinacea 'Big Kahuna'",
      thumbnail: "https://www.terranovanurseries.com/wp-content/uploads/2022/08/Echinacea-Big-Kahuna-11.jpg",
      modelSrc: "https://sketchfab.com/models/4fdfce1101104921a537e6f7993899d1/embed?autospin=1&camera=0",
      botanicalName: "Echinacea purpurea",
      commonNames: "Coneflower",
      habitat: "North American prairies",
      medicinalUses: "Used for immune support, respiratory health",
      howToFind: "Available in health stores and gardens"
    }
  ];

  return (
    <div className="garden-container">
      <div className="card-container">
        {herbs.map((herb, index) => (
          <HerbCard key={index} herb={herb} onClick={setSelectedHerb} />
        ))}
      </div>
      <HerbDetail selectedHerb={selectedHerb} onClose={() => setSelectedHerb(null)} />
    </div>
  );
};

export default VirtualHerbalGarden;