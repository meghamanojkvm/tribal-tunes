// pages/ShowInstrument.jsx
import React, { useState } from 'react';
import QrComp from '../components/QrComp';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import Description from '../components/Description';
import Audio from '../components/Audio';

export const ShowInstrument = () => {

  const [qrcode, setqrcode] = useState(false);

  const qrclick = () => {
    setqrcode(prev => !prev);
  };

  const descriptionContent = `The guitar is a versatile and popular stringed instrument used in a wide range of musical genres, from classical and flamenco to rock, jazz, and pop. It typically has six strings, although there are variations with four, seven, twelve, and other numbers of strings. The two main types of guitars are acoustic and electric, each with distinct characteristics and uses.`;

  const descriptionSections = [
    {
      heading: 'Acoustic Guitar',
      items: [
        'Types: Classical, steel-string, and archtop.',
        'Construction: Hollow body that amplifies the sound acoustically'
      ]
    }
  ];

  return (
    <div className="w-full">
      <div className="flex justify-end mr-4" onClick={qrclick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg>
      </div>

      <section className="relative overflow-hidden py-20">
        {qrcode ? (
          <div className="flex items-center justify-center m-4">
            <QrComp url={window.location.href} />
          </div>
        ) : null}
        <Header title="Instrument name" />
        <div className="bg-[#f5f5dc] p-10 flex h-auto items-center justify-center">
          <ImageSection src="/src/assets/shankh.jpeg" alt="Guitar" />
          <Description title="Description" content={descriptionContent} sections={descriptionSections} />
        </div>
        <Header title="Audio" />
        <Audio src= "/src/assets/ringtone-shankh-1101.mp3 " />
      </section>
    </div>
  );
};
