import React from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, description, image }) => {
  const user = useUser();
  const navigate = useNavigate();

  // Assuming you have a profileUrl defined somewhere
  const profileUrl = "#"; // Replace with the actual profile URL

  return (
    <div className="relative h-[300px] w-[300px] rounded-md my-4">
      <img
        src={image}
        alt={title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Add button for authenticated users */}
      {user.current && (
        <div
          onClick={() => navigate("/addinstrument")}
          className="absolute top-4 right-4 cursor-pointer text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      )}

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <a
          href={profileUrl} // Update the href with the actual profile URL
          className="mt-2 inline-flex items-center text-sm font-semibold text-white"
        >
          View Details →
        </a>
      </div>
    </div>
  );
};
