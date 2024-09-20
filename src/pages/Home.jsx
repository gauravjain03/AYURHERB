import React, { useState, useRef } from 'react';
import PlantCard from '../components/PlantCard';
import Footer from '../components/Footer';
import QuizPopup from '../components/QuizPopup';
import { Link } from 'react-router-dom';
import FirstPage from '../components/FirstPage'; // Going into the 'components' folder
import AyushCards from '../components/AyushCards';

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
    { imageSrc: '/images/tulsi.png', multimedia: ['/images/tulsi2.png', '/images/tulsi3.png', '/images/tulsi4.png', 'https://www.youtube.com/embed/HL6XdPLgoGA?si=8GJlm-Yw92GGSohg'], name: 'Tulsi', region: 'Tropical', type: 'Herb', habitat: 'Tropical, Subtropical', botname: 'Ocimum tenuiflorum', comnames: 'Tulsi, Holy Basil', meduses: 'Immunity booster, Respiratory disorders', methofcul: 'Seed Propagation, Full Sunlight', description: 'Tulsi, also known as holy basil, is a revered plant in Ayurveda known for its healing properties.', sketchfabModelUrl: 'https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed?autospin=1&autostart=1', audioSrc: "/audio/tulsi.mp3" },
    { imageSrc: '/images/neem.png', multimedia: ['/images/neem2.png', '/images/neem3.png', '/images/neem4.png', 'https://www.youtube.com/embed/fA-l1t_Aotw?si=oc1PFJNyG7iFARLx'], name: 'Neem', region: 'Tropical', type: 'Tree', habitat: 'Tropical, Subtropical', botname: 'Azadirachta indica', comnames: 'Neem, Indian Lilac', meduses: 'Antibacterial, Antifungal', methofcul: 'Seeds, Saplings', description: 'Neem is a fast-growing tree used in traditional medicine for its antibacterial properties.', sketchfabModelUrl: 'https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed?autospin=1&autostart=1', audioSrc: "/audio/neem.mp3" },
    { imageSrc: '/images/aloevera.png', multimedia: ['/images/aloevera2.png', '/images/aloevera3.png', '/images/aloevera4.png', 'https://www.youtube.com/embed/7NqgGS1_zmE?si=9WEnCcRm58nCJoSy'], name: 'Aloe Vera', region: 'Tropical', type: 'Succulent', habitat: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed?autospin=1&autostart=1', audioSrc: "/audio/aloe vera.mp3" },
    { imageSrc: '/images/lavender.png', multimedia: ['/images/lavender2.png', '/images/lavender3.png', '/images/lavender4.png', 'https://www.youtube.com/embed/8Oxw4BgqQ2Y?si=MVyTAJ43oFLRvUza'], name: 'Lavender', region: 'Mediterranean', type: 'Flowering Plant', habitat: 'Naturopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/08f35ae30b924678955b4bb483b86a70/embed?autospin=1&autostart=1', audioSrc: "/audio/lavender.mp3" },
    { imageSrc: '/images/sage.png', multimedia: ['/images/sage2.png', '/images/sage3.png', '/images/sage4.png', 'https://www.youtube.com/embed/aaKJm9jad6Q?si=fcqs8MYzl1HTKTAi'], name: 'Sage', region: 'Temperate', type: 'Herb', habitat: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/f41f028de9ca4be2b2e85df0820508ae/embed?autospin=1&autostart=1', audioSrc: "/audio/sage.mp3" },
    { imageSrc: '/images/cactus.png', multimedia: ['/images/cactus2.png', '/images/cactus3.png', '/images/cactus4.png', 'https://www.youtube.com/embed/Uds_rPbFkpU?si=Z5pkrP2xGsrmN1G9'], name: 'Cactus', region: 'Arid', type: 'Succulent', habitat: 'Naturopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/01d773057954447a9abb7ae0c6c052af/embed?autospin=1&autostart=1', audioSrc: "/audio/cactus.mp3" },
    { imageSrc: '/images/dandelions.png', multimedia: ['/images/dandelion2.png', '/images/dandelion3.png', '/images/dandelion4.png', 'https://www.youtube.com/embed/T6pjGwkK2po?si=ar7M8GDjw34P89hu'], name: 'Dandelion', region: 'North America', type: 'Flowering Plant', habitat: 'Homeopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/8a93f08947a4499b9ed19d2d47323242/embed?autospin=1&autostart=1', audioSrc: "/audio/dandelion.mp3" },
    { imageSrc: '/images/eucalyptus.png', multimedia: ['/images/eucalyptus2.png', '/images/eucalyptus3.png', '/images/eucalyptus4.png', 'https://www.youtube.com/embed/N8xcQRCSKbQ?si=xxaP0Y4XMRM4sVXP'], name: 'Eucalyptus', region: 'Temperate', type: 'Tree', habitat: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/d021e7909df44e03b976c1374bfab9dc/embed?autospin=1&autostart=1', audioSrc: "/audio/ecualypus.mp3" },
    { imageSrc: '/images/hibiscus.png', multimedia: ['/images/hibiscus2.png', '/images/hibiscus2.png', '/images/hibiscus2.png', 'https://www.youtube.com/embed/4W44xiXvUAI?si=T-hBaOKpbJ32CCpe'], name: 'Hibiscus', region: 'Tropical', type: 'Flowering Plant', habitat: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/8992b6b94b094a069930104a32d5e9f5/embed?autospin=1&autostart=1', audioSrc: "/audio/hibiscuis.mp3" },
    { imageSrc: '/images/rosemary.png', multimedia: ['/images/rosemary2.png', '/images/rosemary3.png', '/images/rosemary4.png', 'https://www.youtube.com/embed/GrnrDsGao20?si=SOGnrcs5UROhX536'], name: 'Rosemary', region: 'Mediterranean', type: 'Herb', habitat: 'Naturopathy', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/d5c0f249ff8a4d13840abf681bb92d29/embed?autospin=1&autostart=1', audioSrc: "/audio/rosemery.mp3" },
    { imageSrc: '/images/ashwagandha.jpg', multimedia: ['/images/ashwagandha2.png', '/images/ashwagandha3.png', '/images/ashwagandha4.png', 'https://www.youtube.com/embed/OE14JsyuEII?si=mqgjr9iTqhlU9kOU'], name: 'Ashwagandha', region: 'Arid', type: 'Shrub', habitat: 'Dry Regions, India, Africa', botname: 'Withania Somnifera', comnames: 'Ashwagandha, Indian Ginseng', meduses: 'Stress Relief, Immunity Boost', methofcul: 'Sandy Soil, Full Sun', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/88b1bf03a6254dc2b56cec4dce3f22f1/embed?autospin=1&autostart=1', audioSrc: "/audio/ashwaganda.mp3" },
    { imageSrc: '/images/ginger.png', multimedia: ['/images/ginger2.png', '/images/ginger3.png', '/images/ginger4.png', 'https://www.youtube.com/embed/uniaqvtHVhw?si=5ooLbhjODICnEbX2'], name: 'Ginger', region: 'Tropical', type: 'Herb', habitat: 'Ayurveda', description: 'Ashwagandha is a powerful herb in Ayurveda, known for its stress-relieving properties.', sketchfabModelUrl: 'https://sketchfab.com/models/de8da99c3c1742708cd4ea858750b881/embed?autospin=1&autostart=1', audioSrc: "/audio/ginger.mp3" },
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

  // State for quiz popup
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Function to toggle quiz popup
  const toggleQuiz = () => {
    setIsQuizOpen(!isQuizOpen);
  };

  // Check if there are any bookmarks
  const hasBookmarks = bookmarks.length > 0;

  const [currentMultimediaIndex, setCurrentMultimediaIndex] = useState(0);

  // Function to handle navigation between multimedia items
  const handleNextMultimedia = () => {
    if (selectedPlant) {
      setCurrentMultimediaIndex((prevIndex) =>
        prevIndex === selectedPlant.multimedia.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePreviousMultimedia = () => {
    if (selectedPlant) {
      setCurrentMultimediaIndex((prevIndex) =>
        prevIndex === 0 ? selectedPlant.multimedia.length - 1 : prevIndex - 1
      );
    }
  };

  const plantCardsRef = useRef(null);
  // Function to scroll to the PlantCards section
  const scrollToPlantCards = () => {
    if (plantCardsRef.current) {
      plantCardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create a ref for the audio element
  const audioRef = useRef(null);

  // Function to play the audio
  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="font-poppins scrollbar-thin">
        {/* Navbar */}
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
          <div className="container mx-auto flex items-center py-4 px-8">
            {/* Logo */}
            <div className="flex-shrink-0 text-black text-2xl font-semibold">
              <img src="/images/AYURB.png" alt="AYURB Logo" className="h-10 ml-5" />
            </div>

            {/* Middle: Links */}
            <div className="flex-grow flex justify-center space-x-8">
              <Link to="/" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                About
              </Link>
              <Link to="/ar" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                AR
              </Link>
              <Link to="/health-wellness" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
                Health
              </Link>
              <button
                onClick={handleShowBookmarks}
                className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200"
              >
                Bookmarks
              </button>
            </div>

            {/* Right Side: Search Bar, Filter, Quiz, AR */}
            <div className="flex items-center space-x-4">
              {/* Search Box */}
              <div className="flex items-center w-80">
                <span className="material-icons text-main-color ml-2 mr-3">search</span>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="flex-grow p-2 border rounded-xl border-main-color bg-sec-color placeholder:text-gray-400"
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

              {/* Quiz Button */}
              <button
                onClick={toggleQuiz}
                className="px-4 py-2 border border-main-color text-main-color rounded-xl bg-sec-color hover:bg-main-color hover:text-white transition-colors duration-200"
              >
                <i className="fa-solid fa-question-circle mr-2"></i>Quiz
              </button>
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

        <FirstPage onGetStartedClick={scrollToPlantCards} />

        {/* Plant Cards or Bookmarked Plants */}
        <div className="container mx-auto mt-12 px-8 py-10 shadow-lg" ref={plantCardsRef}>
          {showBookmarks ? (
            <>
              {bookmarks.length > 0 ? (  // Check if there are any bookmarks
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
                        audioSrc={plant.audioSrc} // Pass audio source as a prop
                        isBookmarked={bookmarks.includes(plant.name)}
                        onBookmarkToggle={() => toggleBookmark(plant.name)}
                        onLearnMore={() => openPopup(plant)}
                      />
                    ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">NO BOOKMARKS SAVED</p>  // Show "NO BOOKMARKS SAVED" if no bookmarks exist
              )}
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Show all plants */}
              {filteredPlants.map((plant, index) => (
                <PlantCard
                  key={index}
                  imageSrc={plant.imageSrc}
                  name={plant.name}
                  type={plant.type}
                  audioSrc={plant.audioSrc} // Pass audio source as a prop
                  isBookmarked={bookmarks.includes(plant.name)}
                  onBookmarkToggle={() => toggleBookmark(plant.name)}
                  onLearnMore={() => openPopup(plant)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Popup content with dynamic 3D model and description */}
      {isPopupOpen && selectedPlant && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
          <div className="bg-sec-color rounded-lg p-8 w-4/5 max-w-4xl overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-3xl font-medium text-gray-600 hover:text-red-500"
            >
              &times;
            </button>

            {/* Popup Content */}
            <div className=" grid grid-cols-2 grid-rows-2 gap-4">
              {/* Left side: 3D Model and Multimedia */}
              <div className="row-span-1">
                <iframe
                  title={selectedPlant.name}
                  src={selectedPlant.sketchfabModelUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-72 rounded-lg"
                ></iframe>
              </div>

              {/* Plant Info and Audio Wrapper */}
              <div className=" row-span-1 ml-4 leading-8" style={{ maxHeight: '310px', overflowY: 'hidden' }}>

                {/* Right side: Plant Info */}
                <div className="overflow-y-auto" style={{ maxHeight: '235px' }}>
                  <h2 className="text-xl font-semibold mb-2">{selectedPlant.name}</h2>
                  <p className="mt-4 text-lg">{selectedPlant.description}</p>
                  <div className="mt-4">
                    <p><b>Region:</b> {selectedPlant.region}</p>
                    <p><b>Type:</b> {selectedPlant.type}</p>
                    <p><b>Habitat:</b> {selectedPlant.habitat}</p>
                    <p><b>Botanical Name:</b> {selectedPlant.botname}</p>
                    <p><b>Common Names:</b> {selectedPlant.comnames}</p>
                    <p><b>Medicinal Uses:</b> {selectedPlant.meduses}</p>
                    <p><b>Methods of Cultivation:</b> {selectedPlant.methofcul}</p>
                    {/* Add more plant information here */}
                  </div>
                </div>

                {/* Audio Player: Positioned below the plant info section */}
                <div className="mt-2">
                  <audio
                    ref={audioRef}
                    src={selectedPlant.audioSrc} // Use the selected plant's audio source
                    controls // Adds the default browser audio controls
                    className="w-full bg-gray-100 rounded-full" // Adjust width and styling as needed
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>

              </div>

              {/* Section 3: Multimedia (Bottom Left) */}
              <div className="row-span-1 mt-5 relative">
                {/* Conditionally render image or video */}
                {selectedPlant && selectedPlant.multimedia && (
                  <>
                    {selectedPlant.multimedia[currentMultimediaIndex].includes('youtube.com') ? (
                      // If it's a YouTube video
                      <iframe
                        className="h-64 object-cover w-full rounded-lg"
                        src={selectedPlant.multimedia[currentMultimediaIndex]}
                        frameBorder="0"
                        allowFullScreen
                        title="Video"
                      ></iframe>
                    ) : (
                      // If it's an image
                      <img
                        src={selectedPlant.multimedia[currentMultimediaIndex]}
                        alt={selectedPlant.name}
                        className="h-64 object-cover w-full rounded-lg"
                      />
                    )}

                    {/* Left Arrow Button */}
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
                      onClick={handlePreviousMultimedia}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 hover:bg-gray-300 p-2 rounded-full"
                      onClick={handleNextMultimedia}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </>
                )}
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

                {/* Flex container for buttons and audio player */}
                <div className="flex items-center mt-2">
                  {/* Download Button */}
                  <button
                    className="text-sm px-4 py-2 bg-main-color text-white rounded hover:bg-sub-color transition-colors duration-200"
                    onClick={handleDownloadNotes}
                  >
                    <i className="fa-solid fa-download mr-2"></i>
                    Download
                  </button>

                  {/* Share Button */}
                  <button
                    className="text-sm px-4 py-2 bg-main-color text-white rounded ml-2 hover:bg-sub-color transition-colors duration-200"
                    onClick={handleShareNotes}
                  >
                    <i className="fa-solid fa-share mr-2"></i>
                    Share
                  </button>

                  {/* Comment Button */}
                  <button
                    className="text-sm px-4 py-2 bg-main-color text-white rounded ml-2 hover:bg-sub-color transition-colors duration-200"
                  >
                    <i class="fa-regular fa-comment mr-2"></i>
                    Comment
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <AyushCards />

      {/* Chatbot Button and Iframe */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Chatbot Toggle Button */}
        <button
          onClick={toggleChatbot1}
          className={`bg-main-color text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center ${showChatbot ? 'hidden' : ''}`}
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

      {/* Quiz Popup */}
      <QuizPopup isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}

export default Home;
