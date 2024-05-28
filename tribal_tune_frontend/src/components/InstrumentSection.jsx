import React, { useEffect, useState } from "react";
import {Card}  from "./Card"; // Assuming Card component is defined in a separate file
import service from "../appwrite/service.js"; // Correct import path

export const InstrumentSection = ({
  category,
  currentIndex,
  handlePrev,
  handleNext,
  sectionTitle,
}) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const response = await service.getPostsByCategory(category);
      if (response) {
        setItems(response.documents); // Assuming the response contains a 'documents' array
        console.log(response.documents[0].$id);
      }
      setLoading(false);
    };

    fetchItems();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const visibleCards = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-900 text-center font-serif bg-brown-500 py-2 px-4 rounded-lg shadow-lg">
        {sectionTitle}
      </h2>
      <div className="instrument-container flex items-center justify-center">
        <div className="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden mx-4">
          <button
            onClick={handlePrev}
            className="text-white bg-gray-800 hover:bg-gray-700 p-4 rounded-full focus:outline-none text-sm"
          >
            ←
          </button>
        </div>
        <div className="flex space-x-12">
          {visibleCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden mx-4">
          <button
            onClick={handleNext}
            className="text-white bg-gray-800 hover:bg-gray-700 p-4 rounded-full focus:outline-none text-sm"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
