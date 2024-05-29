import React from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export const Card = (card) => {
  const user = useUser();
  const navigate = useNavigate();
  // console.log(card.title);
  // Assuming you have a profileUrl defined somewhere
  const profileUrl = "#"; // Replace with the actual profile URL

  return (
    <div className="relative h-[300px] w-[300px] rounded-md my-6">
      <img
        src={card.image}
        alt={card.title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      {/* add button*/}
      {user.current ? (
        <div
          className="absolute top-2 right-2 cursor-pointer flex justify-end"
          onClick={() => {
            console.log(navigate);
            navigate("/addinstrument");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      ) : null}
      {/* add button ends */}
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{card.title}</h1>
        <p className="mt-2 text-sm text-gray-300">{card.description}</p>
        <button
          onClick={() => navigate("/instruments/:"+ card.$id)} // Update the href with the actual profile URL
          className="mt-2 inline-flex items-center text-sm font-semibold text-white"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};
