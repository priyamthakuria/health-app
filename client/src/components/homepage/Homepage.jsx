import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">

        <h1 className="text-5xl font-extrabold text-blue-900 mb-10">
          Mental Health Matters
        </h1>

        <div className="flex gap-6">
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-800 text-white text-lg rounded-lg shadow-md hover:bg-blue-900 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
  );
}

export default LandingPage;
