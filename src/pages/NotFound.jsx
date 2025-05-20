import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-white text-gray-700 px-4">
      <img
        src="/assets/green-error.svg"
        alt="404 Not Found"
        className="max-w-sm w-full mb-6 rounded-lg shadow-lg"
      />
      <p className="mb-6 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
