

import React from 'react';
import { useState } from 'react';
import QrComp from '../components/QrComp';

export const ShowInstrument = () => {

  const [qrcode, setqrcode] = useState(false);

  const qrclick = () => {
    setqrcode(prev => !prev);
  };

  return (
    <div className="w-full">
      <header className="relative w-full border-b bg-white pb-4 flex">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2"></div>
        </div>
       <div className='flex-right mr-4' onClick={qrclick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg></div>
      </header>
      {
        qrcode ? <div className='flex items-center justify-center m-4'><QrComp url={window.location.href} /></div> : null
      }
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

