import React, { useState } from 'react';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [showMission, setShowMission] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mission Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h2>
          <button
            onClick={() => setShowMission(!showMission)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            {showMission ? 'Hide Mission' : 'Show Mission'}
          </button>
          {showMission && (
            <p className="text-gray-600 mt-4">
              Our mission is to digitize the rich heritage of herbal knowledge, offering users a virtual garden where they
              can explore plants, learn about their medicinal uses, and experience augmented reality (AR) functionalities
              to visualize plants in their environment.
            </p>
          )}
        </div>
      </section>

    
      {/* Technologies Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Technologies We Use</h2>
          <div className="flex justify-center space-x-6 text-gray-600">
            <div>
              <i className="fab fa-react text-4xl text-blue-500"></i>
              <p>React.js</p>
            </div>
            <div>
              <i className="fab fa-node-js text-4xl text-green-500"></i>
              <p>Node.js</p>
            </div>
            <div>
              <i className="fas fa-database text-4xl text-yellow-500"></i>
              <p>SQL</p>
            </div>
            <div>
              <i className="fas fa-vr-cardboard text-4xl text-purple-500"></i>
              <p>AR.js</p>
            </div>
            <div>
              <i className="fab fa-css3-alt text-4xl text-blue-600"></i>
              <p>Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-12 shadow-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600">
            If you have any questions or want to collaborate with us, feel free to contact us.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    
    </div>
   
  );
};

export default AboutPage;
