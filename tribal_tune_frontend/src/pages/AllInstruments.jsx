import React, { useState } from "react";
import { TitleHeader } from "../components/TitleHeader";
import { InstrumentSection } from "../components/InstrumentSection"; // Import the new component

export const AllInstrument = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentBlownIndex, setCurrentBlownIndex] = useState(0);
  const stringInstruments = [
    {
      title: "Instrument 1",
      imageUrl: "./src/assets/Indian_santoor.jpg",
      profileUrl: "https://example.com/profiles/delba",
    },
    {
      title: "Instrument 2",
      imageUrl: "./src/assets/SheeshamTumbi.jpg",
      profileUrl: "https://example.com/profiles/instrument-2",
    },
    {
      title: "Instrument 3",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      profileUrl: "https://example.com/profiles/instrument-3",
    },
    {
      title: "Instrument 4",
      imageUrl:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      profileUrl: "https://example.com/profiles/instrument-4",
    },
  ];

  const blownInstruments = [
    {
      title: "Instrument 5",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      profileUrl: "https://example.com/profiles/instrument-5",
    },
    {
      title: "Instrument 6",
      imageUrl:
        "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      profileUrl: "https://example.com/profiles/instrument-6",
    },
    {
      title: "Instrument 7",
      imageUrl:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
      profileUrl: "https://example.com/profiles/instrument-7",
    },
    {
      title: "Instrument 8",
      imageUrl:
        "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      profileUrl: "https://example.com/profiles/instrument-8",
    },
  ];

  const handlePrevString = () => {
    setCurrentStringIndex((prevIndex) =>
      prevIndex === 0 ? stringInstruments.length - 1 : prevIndex - 1
    );
  };

  const handleNextString = () => {
    setCurrentStringIndex((prevIndex) =>
      prevIndex === stringInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevBlown = () => {
    setCurrentBlownIndex((prevIndex) =>
      prevIndex === 0 ? blownInstruments.length - 1 : prevIndex - 1
    );
  };

  const handleNextBlown = () => {
    setCurrentBlownIndex((prevIndex) =>
      prevIndex === blownInstruments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCards = (instruments, currentIndex) => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      visibleCards.push(instruments[(currentIndex + i) % instruments.length]);
    }
    return visibleCards;
  };

  const visibleStringCards = getVisibleCards(
    stringInstruments,
    currentStringIndex
  );
  const visibleBlownCards = getVisibleCards(
    blownInstruments,
    currentBlownIndex
  );

  return (
    <div>
      <TitleHeader />
      <section>
        {/* Main image section */}
        <div className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div className="absolute inset-0">
            <img
              className="object-cover object-right w-full h-full lg:object-center"
              src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                Find the best office accessories in one tap
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
                nisl eu consectetur. Mi massa elementum odio eu viverra amet.
              </p>

              <form action="#" className="max-w-xl mx-auto mt-10">
                <div>
                  <label htmlFor="" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Try Desk, Chair, Webcam etc..."
                      className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  w-full
                                  px-6
                                  py-4
                                  text-sm
                                  font-bold
                                  tracking-widest
                                  text-white
                                  uppercase
                                  transition-all
                                  duration-200
                                  bg-gray-800
                                  border border-transparent
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                  hover:bg-gray-700
                              "
                  >
                    Search now
                  </button>
                </div>
              </form>

              <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2"></div>
            </div>
          </div>
        </div>

        {/* String Instruments Section */}
        <InstrumentSection
          instruments={stringInstruments}
          currentIndex={currentStringIndex}
          handlePrev={handlePrevString}
          handleNext={handleNextString}
          sectionTitle="String Instruments"
        />

        {/* Blown Instruments Section */}
        <InstrumentSection
          instruments={blownInstruments}
          currentIndex={currentBlownIndex}
          handlePrev={handlePrevBlown}
          handleNext={handleNextBlown}
          sectionTitle="Blown Instruments"
        />
      </section>
    </div>
  );
};
