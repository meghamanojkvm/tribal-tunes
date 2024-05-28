// components/ImageSection.jsx
import React from "react";

const ImageSection = ({ src, alt, width, height, border, rounded }) => {
  return (
    <div className="flex justify-center items-center w-full max-w-2xl mx-auto">
      <img
        src={src}
        alt={alt}
        className={`${border} ${rounded}`}
        style={{ width: width, height: height, objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageSection;
