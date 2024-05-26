import { TitleHeader } from "../components/TitleHeader"

import React from 'react';

export const ShowInstrument = () => {
  return (
    <div className="w-full">
      <header className="relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2"></div>
        </div>
      </header>
      <section className="relative overflow-hidden py-20">
        <div className="relative">
          <div className="mx-auto max-w-xl lg:max-w-7xl">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h1 className="text-5xl font-bold">Instrument name</h1>
            </div>
            <div className="my-18 -mx-4 flex flex-wrap px-4 items-center">
              <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2 lg:ml-auto flex justify-end">
                <a className="group block" href="#">
                  <img
                    className="mr-12 block h-96 w-96 rounded-lg object-cover"
                    src="/src/assets/Guitar.avif"
                    alt="Instrument"
                  />
                </a>
              </div>
              <div className="w-full px-4 lg:w-1/2 lg:ml-0">
                <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                  Description
                </h4>
                <p className="max-w-xl text-lg text-gray-500">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  exercitation veniam consequat sunt nostrud amet. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Adipisci optio
                  nihil totam voluptas dolorem vel esse magnam sed praesentium
                  aliquam.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h4 className="mb-5 text-3xl font-semibold text-gray-900">
                Audio
              </h4>
              {/* Add AudioPlayer component here */}
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
    </div>
  );
};

   