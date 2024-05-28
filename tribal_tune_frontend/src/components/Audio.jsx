// components/Audio.jsx
import React from "react";

const Audio = ({ src, className }) => {
  return <audio controls src={src} className={className}></audio>;
};

export default Audio;
