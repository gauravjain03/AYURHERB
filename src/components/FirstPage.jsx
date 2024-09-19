import React from 'react';

const FirstPage = ({ onGetStartedClick }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="h-screen bg-sec-color m-16 p-10 shadow-lg rounded-lg flex space-x-8">
                {/* Text Section */}
                <div className="mt-40 ml-20 flex flex-col w-6/12">
                    <h1 className="leading-tight mb-12 text-5xl text-main-color font-bold">
                        Step Into Nature's Pharmacy: Your Virtual Herbal Haven
                    </h1>
                    <p className="text-gray-600 text-xl">
                        Explore a world of traditional healing with our curated collection of medicinal plants.
                        Unveil the ancient wisdom of AYUSH and embrace the natural way to well-being.
                    </p>
                    <button
                         className="bg-main-color text-white px-6 py-2 text-lg rounded-lg mt-12 w-48
                         transition-transform transform hover:scale-105 
                         hover:bg-green-600 hover:shadow-lg hover:text-gray-100 
                         duration-300 ease-in-out"
                        onClick={onGetStartedClick}
                    >
                        Get Started
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-4/12 mt-28">
                    <img
                        src="/images/firstpage.png"
                        alt="Nature"
                        className="ml-28 h-5/6 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
