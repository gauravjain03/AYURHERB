import React, { useState } from 'react';
import PlantCard from '../components/PlantCard';
import Footer from '../components/Footer';

function Home() {
  // State to handle filter panel visibility
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterRegion, setFilterRegion] = useState('All Regions');
  const [filterType, setFilterType] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarks, setBookmarks] = useState([]); // For storing bookmarked plants
  const [showBookmarks, setShowBookmarks] = useState(false); // To toggle between bookmarks and main view
  // State to handle chatbot visibility
  const [showChatbot, setShowChatbot] = useState(false);


  // Function to toggle filter panel
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Function to toggle chatbot visibility
  const toggleChatbot1 = () => {
    setShowChatbot(!showChatbot);
  };



  // Function to handle filter changes
  const handleRegionChange = (e) => setFilterRegion(e.target.value);
  const handleTypeChange = (e) => setFilterType(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Popup state for plant details
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Function to open the popup
  const openPopup = (plant) => {
    setSelectedPlant(plant);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlant(null);
  };

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  // Function to handle downloading notes
  const handleDownloadNotes = () => {
    const notesContent = document.getElementById('notes-textarea').value; // Get the content of the textarea
    const element = document.createElement('a');
    const file = new Blob([notesContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'notes.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // Function to handle sharing notes by copying to clipboard
  const handleShareNotes = () => {
    const notesContent = document.getElementById('notes-textarea').value; // Get the content of the textarea
    navigator.clipboard.writeText(notesContent).then(() => {
      alert("Notes copied to clipboard! You can now share them.");
    }, () => {
      alert("Failed to copy notes to clipboard.");
    });
  };

  // Plant data
  const plants = [
    { imageSrc: '/images/tulsi.png', name: 'Tulsi', region: 'Tropical', type: 'Herb', ayush: 'Ayurveda' },
    { imageSrc: '/images/neem.png', name: 'Neem', region: 'Tropical', type: 'Tree', ayush: 'Ayurveda' },
    { imageSrc: '/images/ashwagandha.jpg', name: 'Ashwagandha', region: 'Arid', type: 'Shrub', ayush: 'Ayurveda' },
    { imageSrc: '/images/aloevera.png', name: 'Aloe Vera', region: 'Tropical', type: 'Succulent', ayush: 'Ayurveda' },
    { imageSrc: '/images/lavender.png', name: 'Lavender', region: 'Mediterranean', type: 'Flowering Plant', ayush: 'Naturopathy' },
    { imageSrc: '/images/sage.png', name: 'Sage', region: 'Temperate', type: 'Herb', ayush: 'Ayurveda' },
    { imageSrc: '/images/cactus.png', name: 'Cactus', region: 'Arid', type: 'Succulent', ayush: 'Naturopathy' },
    { imageSrc: '/images/dandelions.png', name: 'Dandelion', region: 'North America', type: 'Flowering Plant', ayush: 'Homeopathy' },
    { imageSrc: '/images/eucalyptus.png', name: 'Eucalyptus', region: 'Temperate', type: 'Tree', ayush: 'Ayurveda' },
    { imageSrc: '/images/hibiscus.png', name: 'Hibiscus', region: 'Tropical', type: 'Flowering Plant', ayush: 'Ayurveda' },
    { imageSrc: '/images/rosemary.png', name: 'Rosemary', region: 'Mediterranean', type: 'Herb', ayush: 'Naturopathy' },
    { imageSrc: '/images/ginger.png', name: 'Ginger', region: 'Tropical', type: 'Herb', ayush: 'Ayurveda' },
  ];

  // Filtered plants based on selected filters
  const filteredPlants = plants.filter(plant =>
    (filterRegion === 'All Regions' || plant.region === filterRegion) &&
    (filterType === 'All Types' || plant.type === filterType) &&
    (plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Toggle bookmark
  const toggleBookmark = (plantName) => {
    setBookmarks(prevBookmarks => {
      if (prevBookmarks.includes(plantName)) {
        // Remove from bookmarks
        return prevBookmarks.filter(name => name !== plantName);
      } else {
        // Add to bookmarks
        return [...prevBookmarks, plantName];
      }
    });
  };

  // Toggle between displaying bookmarks and plant cards
  const handleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks);
  };

  return (
    <>
      <div className="font-poppins">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
          <div className="container mx-auto flex justify-between items-center py-4 px-8 pt-5">
            {/* Logo */}
            <div className="text-black text-2xl font-semibold">
              <img src="/images/AYURB.png" alt="AYURB Logo" className="h-10" />
            </div>

            {/* Middle: Links (Including Bookmarks) */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                <a href="#home" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200">
                  Home
                </a>
                <a href="#about" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200">
                  About
                </a>
                <a href="#contact" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200">
                  Contact
                </a>
                <button
                  onClick={handleShowBookmarks}
                  className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200"
                >
                  Bookmarks
                </button>
              </div>
            </div>

            {/* Right Side: Search Bar, Filter, and Bookmarks */}
            <div className="flex items-center space-x-4">
              {/* Search Box */}
              <div className="flex items-center w-80">
                <span className="material-icons text-main-color ml-2 mr-3">search</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="flex-grow p-2 border rounded-xl border-sky-100 bg-sec-color placeholder:text-gray-400"
                  placeholder="Search for plants..."
                />
              </div>

              {/* Filter Button */}
              <button
                onClick={toggleFilter}
                className="flex items-center px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
              >
                <i className="fa-solid fa-filter mr-2"></i>Filter
              </button>

              {/* Bookmarks Tab
              <div>
                <button
                  onClick={handleShowBookmarks}
                  className="px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
                >
                  <i className="fa-solid fa-bookmark mr-2"></i>{showBookmarks ? 'Show All' : 'Bookmarks'}
                </button>
              </div> */}
            </div>
          </div>
        </nav>

        {/* Filter Slider (Fixed with Transparency and Blur Effect) */}
        <div
          className={`fixed top-16 z-20 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="flex flex-wrap px-8 py-4">
            {/* Filter by Region */}
            <div className="flex-1 mb-2 mr-5 mt-3">
              <label className="block text-gray-700">Filter by Region:</label>
              <select
                value={filterRegion}
                onChange={handleRegionChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>All Regions</option>
                <option>Tropical</option>
                <option>Arid</option>
                <option>Mediterranean</option>
                <option>Temperate</option>
                <option>North America</option>
              </select>
            </div>

            {/* Filter by Type */}
            <div className="flex-1 mb-2 mr-5 mt-3">
              <label className="block text-gray-700">Filter by Type:</label>
              <select
                value={filterType}
                onChange={handleTypeChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>All Types</option>
                <option>Herb</option>
                <option>Succulent</option>
                <option>Shrub</option>
                <option>Flowering Plant</option>
              </select>
            </div>

            {/* Filter by Medicinal Uses */}
            <div className="flex-1 mb-2 mt-3">
              <label className="block text-gray-700">Filter by Medicinal Uses:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Search by Ayush, Naturopathy, etc."
              />
            </div>
          </div>
        </div>

        {/* Plant Cards or Bookmarked Plants */}
        <div className="container mx-auto mt-16 px-8 py-10">
          {showBookmarks ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Show bookmarked plants */}
              {plants
                .filter(plant => bookmarks.includes(plant.name))
                .map((plant, index) => (
                  <PlantCard
                    key={index}
                    imageSrc={plant.imageSrc}
                    name={plant.name}
                    region={plant.region}
                    type={plant.type}
                    ayush={plant.ayush}
                    isBookmarked={bookmarks.includes(plant.name)}
                    onBookmarkToggle={() => toggleBookmark(plant.name)}  // <-- Use the same prop as in the main view
                    onLearnMore={() => openPopup(plant)}  // <-- Added
                  />
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Show all plants */}
              {filteredPlants.map((plant, index) => (
                <PlantCard
                  key={index}
                  imageSrc={plant.imageSrc}
                  name={plant.name}
                  type={plant.type}
                  isBookmarked={bookmarks.includes(plant.name)}
                  onBookmarkToggle={() => toggleBookmark(plant.name)}
                  onLearnMore={() => openPopup(plant)}  // <-- Added
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && selectedPlant && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-4/5 max-w-4xl overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-3xl font-medium text-gray-600 hover:text-red-500"
            >
              &times;
            </button>

            {/* Popup Content Grid Layout */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">

              {/* Section 1: 3D model (Top Left) */}
              <div className="row-span-1">
                <h2 className="text-2xl font-bold tracking-wide mb-2">{selectedPlant.name}</h2>
                <iframe
                  src="https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed?dnt=1"
                  title="Plant 3D Model"
                  className="w-full h-64"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Section 2: Plant Info (Top Right) */}
              <div className="row-span-1 p-4 mt-5 leading-8">
                <h3 className="text-xl font-semibold mb-2">Plant Information :</h3>
                <p><strong>Botanical Name:</strong> Ocimum tenuiflorum</p>
                <p><strong>Common Names:</strong> Tulsi</p>
                <p><strong>Region:</strong> Tropical</p>
                <p><strong>Type:</strong> Herb</p>
                <p><strong>Medicinal Uses:</strong> Stress relief, immune support</p>
                <p><strong>Habitat:</strong> Tropical regions</p>
                <p><strong>How to Find:</strong> Common in gardens and markets</p>
              </div>

              {/* Section 3: Multimedia (Bottom Left) */}
              <div className="row-span-1 mt-5">
                <img src={selectedPlant.imageSrc} alt={selectedPlant.name} className="h-64 object-cover w-full" />
              </div>

              {/* Section 4: Notes */}
              <div className="row-span-1 p-4 mt-5">
                <h3 className="text-xl font-semibold mb-5">Notes :</h3>
                <textarea
                  id="notes-textarea"
                  rows="5"
                  className="w-full p-2 border rounded-md"
                  placeholder="Write your notes here..."
                ></textarea>
                <button
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  onClick={handleDownloadNotes}
                >
                  Download Notes
                </button>
                <button
                  className="mt-2 px-4 py-2 bg-main-color text-white rounded ml-2 hover:bg-blue-900"
                  onClick={handleShareNotes}
                >
                  Share
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
      {/* Chatbot Button and Iframe */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Chatbot Toggle Button */}
        <button
          onClick={toggleChatbot1}
          className={`bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center ${showChatbot ? 'hidden' : ''}`}
          style={{ width: '50px', height: '50px' }} // Adjust the button size
        >
          <span className="material-icons" style={{ fontSize: '28px' }}>chat</span> {/* Adjust icon size */}
        </button>

        {/* Chatbot Iframe */}
        {showChatbot && (
          <div className="relative">
            <iframe
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/501ea8ff-d991-47ee-90f1-faaa49b0963f"
              className="border border-gray-300 rounded-lg shadow-lg"
              style={{ zIndex: 9999 }}
            ></iframe>
            <button
              onClick={toggleChatbot}
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300"
              style={{ zIndex: 10000 }}
            >
              <span className="material-icons" style={{ width: '20px', height: '5px' }} >close</span> {/* Adjust close icon size */}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
