import React, { useState } from 'react';
import HerbCard from './HerbCard';
import HerbDetail from './HerbDetail';
import './VirtualHerbalGarden.css';

const VirtualHerbalGarden = () => {
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [bookmarkedHerbs, setBookmarkedHerbs] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ region: '', type: '', medicinalUses: '' });

  const herbs = [
    {
      title: "Holy Basil",
      thumbnail: "https://m.media-amazon.com/images/I/61tXHtetSxL._SL1000_.jpg",
      modelSrc: "https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed?dnt=1",
      botanicalName: "Ocimum tenuiflorum",
      commonNames: "Tulsi",
      habitat: "Tropical regions",
      medicinalUses: "Used for stress relief, immune support",
      howToFind: "Common in gardens and markets",
      type: "Herb",
      region: "Tropical"
    },
    {
      title: "Aloe Vera",
      thumbnail: "https://unlimitedgreens.com/cdn/shop/products/Aloe-Vera-Website-Front.webp?v=1676457070",
      modelSrc: "https://sketchfab.com/models/039478621559470a9bc8b80e62d916c4/embed?autospin=1&camera=0&preload=1&dnt=1",
      botanicalName: "Aloe barbadensis miller",
      commonNames: "Aloe, Aloe Vera",
      habitat: "Arid regions",
      medicinalUses: "Used for skin care, digestive health",
      howToFind: "Common in herbal stores and gardens",
      type: "Succulent",
      region: "Arid"
    },
    {
      title: "Bay - Herb",
      thumbnail: "https://thegrowers-exchange.com/cdn/shop/products/Bay_2000x.jpg?v=1575321764",
      modelSrc: "https://sketchfab.com/models/8a84499140d34eab8c22a4cc77451eef/embed?autospin=1&camera=0&preload=1&dnt=1",
      botanicalName: "Laurus nobilis",
      commonNames: "Bay Leaf",
      habitat: "Mediterranean regions",
      medicinalUses: "Used for digestive issues, respiratory health",
      howToFind: "Available in grocery stores and herbal shops",
      type: "Shrub",
      region: "Mediterranean"
    },
    {
      title: "Parsley",
      thumbnail: "https://3.imimg.com/data3/FG/EO/MY-10774892/parsley-plant-1000x1000.jpg",
      modelSrc: "https://sketchfab.com/models/7f9418d3d7ee45ada91ce016cb62d6f0/embed?autospin=1&preload=1&dnt=1",
      botanicalName: "Petroselinum crispum",
      commonNames: "Parsley",
      habitat: "Temperate regions",
      medicinalUses: "Used for urinary tract health, digestive health",
      howToFind: "Common in kitchens and gardens",
      type: "Herb",
      region: "Temperate"
    },
    {
      title: "Echinacea 'Big Kahuna'",
      thumbnail: "https://www.terranovanurseries.com/wp-content/uploads/2022/08/Echinacea-Big-Kahuna-11.jpg",
      modelSrc: "https://sketchfab.com/models/4fdfce1101104921a537e6f7993899d1/embed?autospin=1&camera=0",
      botanicalName: "Echinacea purpurea",
      commonNames: "Coneflower",
      habitat: "North American prairies",
      medicinalUses: "Used for immune support, respiratory health",
      howToFind: "Available in health stores and gardens",
      type: "Flowering plant",
      region: "North America"
    }
  ];

  const toggleBookmark = (herb) => {
    if (bookmarkedHerbs.includes(herb)) {
      setBookmarkedHerbs(bookmarkedHerbs.filter((item) => item !== herb));
    } else {
      setBookmarkedHerbs([...bookmarkedHerbs, herb]);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredHerbs = herbs.filter((herb) => {
    const matchesSearch = herb.title.toLowerCase().includes(searchTerm);
    const matchesRegion = filters.region ? herb.region === filters.region : true;
    const matchesType = filters.type ? herb.type === filters.type : true;
    const matchesMedicinalUses = filters.medicinalUses ? herb.medicinalUses.toLowerCase().includes(filters.medicinalUses.toLowerCase()) : true;

    if (showBookmarks) {
      return matchesSearch && matchesRegion && matchesType && matchesMedicinalUses && bookmarkedHerbs.includes(herb);
    }

    return matchesSearch && matchesRegion && matchesType && matchesMedicinalUses;
  });

  return (
    <div className="garden-container">
      <div className="navbar">
        <h1>HERBSPHERE</h1>
      </div>
      <div className="sidebar">
        <input type="text" className="search-bar" placeholder="Search plants..." onChange={handleSearch} />
        <h3>Filter by Region</h3>
        <select onChange={(e) => handleFilterChange('region', e.target.value)}>
          <option value="">All Regions</option>
          <option value="Tropical">Tropical</option>
          <option value="Arid">Arid</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Temperate">Temperate</option>
          <option value="North America">North America</option>
        </select>
        <h3>Filter by Type</h3>
        <select onChange={(e) => handleFilterChange('type', e.target.value)}>
          <option value="">All Types</option>
          <option value="Herb">Herb</option>
          <option value="Succulent">Succulent</option>
          <option value="Shrub">Shrub</option>
          <option value="Flowering plant">Flowering plant</option>
        </select>
        <h3>Filter by Medicinal Uses</h3>
        <input type="text" placeholder="e.g., immune support" onChange={(e) => handleFilterChange('medicinalUses', e.target.value)} />
        <h3>
          <label>
            <input
              type="checkbox"
              checked={showBookmarks}
              onChange={() => setShowBookmarks(!showBookmarks)}
            />
            Show Bookmarked Plants
          </label>
        </h3>
      </div>
      <div className="card-container">
        {filteredHerbs.map((herb, index) => (
          <HerbCard
            key={index}
            herb={herb}
            onClick={setSelectedHerb}
            isBookmarked={bookmarkedHerbs.includes(herb)}
            onBookmark={toggleBookmark} // Make sure this is correctly passed
          />
        ))}
      </div>
      <HerbDetail
        selectedHerb={selectedHerb}
        onClose={() => setSelectedHerb(null)}
        onBookmark={toggleBookmark} // Make sure this is correctly passed
        isBookmarked={bookmarkedHerbs.includes(selectedHerb)}
      />
    </div>
  );
};

export default VirtualHerbalGarden;