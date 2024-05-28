// components/ImageSection.jsx
import React from 'react';

const ImageSection = ({ src, alt }) => {
  return (
    <div className="w-1/2 flex justify-center">
      <img src={src} alt={alt} className="rounded-lg max-w-full h-auto" style={{ maxWidth: '80%' }} />
    </div>
  );
};

export default ImageSection;
