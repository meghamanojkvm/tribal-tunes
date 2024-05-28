import React from "react";
import { UserProvider, useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, description, imageUrl, profileUrl }) => {
  const user = useUser();
  const navigate = useNavigate();



  return (
    <div className="relative h-[300px] w-[300px] rounded-md my-4">
      {/* add button*/}
      {user.current ? (
        <div
          className="flex justify-end"
          onClick={() => navigate("/addinstrument")}
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
          className="mt-2 inline-flex cursor-pointer items-center text-m font-semibold text-white hover:text-amber-700"
        >
          View Details →
        </a>
      </div>
    </div>
  );
};
