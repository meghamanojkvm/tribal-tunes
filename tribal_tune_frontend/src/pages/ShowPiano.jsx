// pages/ShowPiano.jsx
import React from 'react';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import Description from '../components/Description';
import Audio from '../components/Audio';

export const ShowPiano = () => {

  const descriptionContent = `The piano is a classical instrument that has been central to music education and performance for centuries. It has a keyboard of 88 keys and is played by pressing these keys, which cause hammers to strike strings inside the instrument.`;

  const descriptionSections = [
    {
      heading: 'Types of Pianos',
      items: [
        'Grand Piano',
        'Upright Piano',
        'Digital Piano'
      ]
    }
  ];

  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-20">
        <Header title="Piano Description" />
        <div className="bg-[#f5f5dc] p-10 flex h-auto items-center justify-center">
          <ImageSection src="/src/assets/piano.jpeg" alt="Piano" />
          <Description title="Description" content={descriptionContent} sections={descriptionSections} />
        </div>
        <Header title="Audio" />
        <Audio src="https://your-piano-audio-source-url.com" />
      </section>
    </div>
  );
};
