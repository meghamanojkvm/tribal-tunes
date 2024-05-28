// components/Audio.jsx
import React from 'react';

const Audio = ({ src }) => {
  return (
    <div className="mt-8 bg-[#f5f5dc]">
      <audio controls src={src} className="w-full bg-[#f5f5dc]">
<<<<<<< HEAD
        {/* <source src={src} type="audio/mpeg/mp3" />
        Your browser does not support the audio element. */}
=======
>>>>>>> 26d4ae0529c00c33d89e5b9899a708ab15f9469c
      </audio>
    </div>
  );
};

export default Audio;
