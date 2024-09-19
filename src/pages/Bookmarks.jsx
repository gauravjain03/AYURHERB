import React from 'react';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="container mx-auto p-4 pt-36">
            <h1 className="text-2xl font-bold mb-4">Your Bookmarks</h1>
            {bookmarks.length === 0 ? (
                <p>No bookmarks yet!</p>
            ) : (
                <ul className="list-disc pl-5">
                    {bookmarks.map((bookmark, index) => (
                        <li key={index} className="mb-2">
                            <a href={bookmark.link} className="text-blue-500 underline">
                                {bookmark.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Bookmarks;
