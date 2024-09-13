import React from "react";

function Header() {
    return (
        <div className="p-4">
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-xl">All</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl">Ayurveda</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl">Yoga</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl">Naturopathy</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl">Unani</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl">Siddha</button>
                <button className="px-4 py-2 border border-gray-300 rounded-xl">Homeopathy</button>
            </div>
        </div>
    );
}

export default Header;
