import React from "react";

export const Card = ({ title, description, imageUrl, profileUrl }) => {
  return (
    <div className="relative h-[300px] w-[300px] rounded-md my-4">
      <img
        src={imageUrl}
        alt={title}
        className="z-0 h-full w-full rounded-md object-fill"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <a
          href={profileUrl}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
        >
          View Details →
        </a>
      </div>
    </div>
  );
};
