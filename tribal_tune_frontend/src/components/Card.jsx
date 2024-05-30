import React from "react";
import { useUser } from "../lib/context/user";
import { useNavigate } from "react-router-dom";
import service from "../appwrite/service";


export const Card = (card) => {
  const user = useUser();
  const navigate = useNavigate();
  // console.log(card.title);
  // Assuming you have a profileUrl defined somewhere
  //const profileUrl = "#"; // Replace with the actual profile URL


  const handleDelete = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this post?");
    if (confirmation) {
      try {
        await service.deletePost(card.$id);
        alert("Post deleted successfully.");
        // Additional actions after successful deletion, e.g., refreshing the list
      } catch (error) {
        console.error("Failed to delete the post:", error);
        alert("Failed to delete the post. Please try again.");
      }
    }
  };

  return (
    <div className="relative h-[300px] w-[300px] rounded-md my-6">
      <img
        src={card.image}
        alt={card.title}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Add buttons */}
      {user.current && (
        <div className="absolute top-2 right-2 flex space-x-2">
          <div
            className="cursor-pointer flex justify-end"
            onClick={() => navigate("/addinstrument")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer flex justify-end"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
      {/* Add buttons end */}

      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{card.title}</h1>
        <p className="mt-2 text-sm text-gray-300">{card.description.substring(0, 150)}</p>
        <button
          onClick={() => navigate("/instruments/:" + card.$id)}
          className="mt-2 inline-flex items-center text-sm font-semibold text-white"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};
