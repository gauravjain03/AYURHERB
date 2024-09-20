// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ handleShowBookmarks }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
      <div className="container mx-auto flex items-center py-4 px-8">
        {/* Logo */}
        <div className="flex-shrink-0 text-black text-2xl font-semibold">
          <img src="/images/AYURB.png" alt="AYURB Logo" className="h-10" />
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
          <Link to="/bookmarks" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sub-color hover:text-sub-color transition-colors duration-200">
            Bookmark
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;