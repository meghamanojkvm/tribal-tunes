// components/Audio.jsx
import React from 'react';

const Audio = ({ src }) => {
  return (
    <div className="mt-8 bg-[#f5f5dc]">
      <audio controls src={src} className="w-full bg-[#f5f5dc]">
      </audio>
    </div>
  );
};

export default Audio;
