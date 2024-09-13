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
    { imageSrc: '/images/tulsi.png', name: 'Tulsi', region: 'Tropical', type: 'Herb', ayush: 'Ayurveda', description: 'Tulsi, also known as holy basil, is a revered plant in Ayurveda known for its healing properties.', sketchfabModelUrl: 'https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/neem.png', name: 'Neem', region: 'Tropical', type: 'Tree', ayush: 'Ayurveda', description: 'Neem is a fast-growing tree used in traditional medicine for its antibacterial properties.', sketchfabModelUrl: 'https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/aloevera.png', name: 'Aloe Vera', region: 'Tropical', type: 'Succulent', ayush: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/lavender.png', name: 'Lavender', region: 'Mediterranean', type: 'Flowering Plant', ayush: 'Naturopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/08f35ae30b924678955b4bb483b86a70/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/sage.png', name: 'Sage', region: 'Temperate', type: 'Herb', ayush: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/f41f028de9ca4be2b2e85df0820508ae/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/cactus.png', name: 'Cactus', region: 'Arid', type: 'Succulent', ayush: 'Naturopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/01d773057954447a9abb7ae0c6c052af/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/dandelions.png', name: 'Dandelion', region: 'North America', type: 'Flowering Plant', ayush: 'Homeopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/8a93f08947a4499b9ed19d2d47323242/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/eucalyptus.png', name: 'Eucalyptus', region: 'Temperate', type: 'Tree', ayush: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/d021e7909df44e03b976c1374bfab9dc/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/hibiscus.png', name: 'Hibiscus', region: 'Tropical', type: 'Flowering Plant', ayush: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/8992b6b94b094a069930104a32d5e9f5/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/rosemary.png', name: 'Rosemary', region: 'Mediterranean', type: 'Herb', ayush: 'Naturopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/d5c0f249ff8a4d13840abf681bb92d29/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/ashwagandha.jpg', name: 'Ashwagandha', region: 'Arid', type: 'Shrub', ayush: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/88b1bf03a6254dc2b56cec4dce3f22f1/embed?autospin=1&autostart=1' },
    { imageSrc: '/images/ginger.png', name: 'Ginger', region: 'Tropical', type: 'Herb', ayush: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/de8da99c3c1742708cd4ea858750b881/embed?autospin=1&autostart=1' },
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

      {/* Popup content with dynamic 3D model and description */}
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

            {/* Popup Content */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left side: 3D Model and Multimedia */}
              <div>
                <iframe
                  title={selectedPlant.name}
                  src={selectedPlant.sketchfabModelUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-96"
                ></iframe>
              </div>

              {/* Right side: Plant Info */}
              <div>
                <h2 className="text-3xl font-bold">{selectedPlant.name}</h2>
                <p className="mt-4 text-lg">{selectedPlant.description}</p>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold">Region: {selectedPlant.region}</h4>
                  <h4 className="text-xl font-semibold">Type: {selectedPlant.type}</h4>
                  <h4 className="text-xl font-semibold">Ayush System: {selectedPlant.ayush}</h4>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Notes:</h3>
              <textarea id="notes-textarea" className="w-full p-2 mt-2 border rounded-md"></textarea>
              <div className="mt-4">
                <button onClick={handleDownloadNotes} className="px-4 py-2 bg-green-500 text-white rounded-md">
                  Download Notes
                </button>
                <button onClick={handleShareNotes} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                  Share Notes
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
