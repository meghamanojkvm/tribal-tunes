import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import the swipeable library
import { Card } from "./Card"; // Assuming Card component is defined in a separate file

export const InstrumentSection = ({ instruments, sectionTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Function to update the number of cards per page based on screen size
  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1); // Small screens
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2); // Medium screens
    } else {
      setCardsPerPage(3); // Large screens
    }
  };

  // Update the number of cards per page on mount and when the window is resized
  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerPage < 0 ? instruments.length - cardsPerPage : prevIndex - cardsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerPage >= instruments.length ? 0 : prevIndex + cardsPerPage
    );
  };

  const visibleCards = instruments.slice(currentIndex, currentIndex + cardsPerPage);

  // Adjust the visibleCards to always show `cardsPerPage` cards if there are enough instruments
  const adjustedVisibleCards =
    visibleCards.length < cardsPerPage && instruments.length >= cardsPerPage
      ? [...visibleCards, ...instruments.slice(0, cardsPerPage - visibleCards.length)]
      : visibleCards;

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" {...handlers}>
      <h2 className="mt-10 mb-4 text-2xl font-semibold text-gray-900 text-center font-serif bg-brown-500 py-2 px-4 rounded-lg shadow-lg">
        {sectionTitle}
      </h2>
      <div className="instrument-container flex items-center justify-between">
        <div className="hidden sm:flex justify-center">
          <button
            onClick={handlePrev}
            className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full focus:outline-none text-sm"
          >
            ←
          </button>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 lg:space-x-12">
          {adjustedVisibleCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="hidden sm:flex justify-center">
          <button
            onClick={handleNext}
            className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full focus:outline-none text-sm"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
