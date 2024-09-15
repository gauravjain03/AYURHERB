import React from 'react'

function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-30">
                <div className="container mx-auto flex items-center py-4 px-8">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-black text-2xl font-semibold">
                        <img src="/images/AYURB.png" alt="AYURB Logo" className="h-10" />
                    </div>

                    {/* Middle: Links */}
                    <div className="flex-grow flex justify-center space-x-8">
                        <Link to="/" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/about" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200">
                            About
                        </Link>
                        <Link to="/ar" className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200">
                            AR
                        </Link>
                        <button
                            onClick={handleShowBookmarks}
                            className="pb-1 text-navbar-text border-b-2 border-transparent hover:border-sky-500 hover:text-sky-500 transition-colors duration-200"
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
        </>
    )
}

export default Navbar