import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/"); // Redirect to login page
  };

  const plans = [
    { name: "Basic Plan", price: "$10/month", description: "Basic access to mental health resources." },
    { name: "Premium Plan", price: "$30/month", description: "Access to one-on-one therapy sessions." },
    { name: "Gold Plan", price: "$50/month", description: "All-inclusive mental health support, including workshops." },
    { name: "Platinum Plan", price: "$80/month", description: "Comprehensive therapy and mental wellness services." },
    { name: "Diamond Plan", price: "$100/month", description: "Exclusive therapy and personal wellness coach." },
    { name: "Ultimate Plan", price: "$150/month", description: "All-access pass with premium support and events." },
  ];

  const images = [
    "https://via.placeholder.com/200x100",
    "https://via.placeholder.com/150x200",
    "https://via.placeholder.com/250x150",
    "https://via.placeholder.com/100x200",
    "https://via.placeholder.com/200x150",
  ];

  const text = "Your mental health matters. Take the first step towards wellness.";

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex justify-end items-center bg-white h-screen">
        <div className="max-w-lg text-right p-10">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">Mental Health Matters</h1>
          <p className="text-lg text-purple-700 mb-6">It's time to prioritize your mental well-being.</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition mt-4"
          >
            Logout
          </button>
        </div>
      </section>

      {/* Other Sections */}
      <section className="bg-yellow-300 text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Your Mind Deserves the Best</h2>
        <p className="text-lg text-purple-700 mb-6">Give yourself the care and attention you deserve. Take a step towards mental wellness.</p>
        <div className="flex justify-center gap-4">
          <Link to="/blogs">
            <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500">
              Read Our Blogs
            </button>
          </Link>
          <Link to="/chat">
            <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              Go to Chat Page
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
