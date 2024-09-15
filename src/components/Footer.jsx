import React from 'react';

function Footer() {
  return (
    <footer className="bg-light-blue-200 text-main-color py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/2 mb-6">
            <h2 className="text-xl font-semibold mb-4">AYURHERBS</h2>
            <p className="text-gray-800">
              Bringing you the best of Ayurvedic and herbal remedies with detailed information about medicinal plants.
            </p>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-800">123 Ayurveda St, Jaipur, Rajasthan, India</p>
            <p className="text-gray-800">Phone: +91 123 456 7890</p>
            <p className="text-gray-800">Email: contact@ayurb.com</p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-300 pt-4">
          <p className="text-gray-800">&copy; {new Date().getFullYear()} AYURB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
