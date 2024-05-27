// components/Audio.jsx
import React from 'react';

const Audio = ({ src }) => {
  return (
    <div className="mt-8 bg-[#f5f5dc]">
      <audio controls className="w-full bg-[#f5f5dc]">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Audio;
