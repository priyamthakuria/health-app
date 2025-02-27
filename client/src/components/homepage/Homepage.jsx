import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
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
          <div className="flex gap-4 justify-end">
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Login</button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">Sign Up</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mind Deserves Section */}
      {/* <section className="bg-yellow-300 text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Your Mind Deserves the Best</h2>
        <p className="text-lg text-purple-700 mb-6">
          Give yourself the care and attention you deserve. Take a step towards mental wellness.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/blogs">
            <button className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-500">Read Our Blogs</button>
          </Link>
          <Link to="/chat">
            <button className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">Start Chatting</button>
          </Link>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="bg-white p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at augue nec arcu scelerisque dignissim sit
          amet a turpis.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at augue nec arcu scelerisque dignissim sit
          amet a turpis.
        </p>
      </section> */}

      {/* Choose Your Plan Section */}
      {/* <section className="bg-yellow-300 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Choose Your Plan</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="w-64 border rounded-lg shadow-md overflow-hidden text-center bg-white"
            >
              <div className="bg-blue-300 p-4 text-white">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-lg">{plan.price}</p>
              </div>
              <div className="p-4">
                <p className="mb-4">{plan.description}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Floating Images Section */}
      {/* <div className="relative overflow-hidden bg-white h-96">
        <div className="absolute flex animate-float space-x-4">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Floating ${index}`} className="h-32 w-32 object-cover" />
          ))}
        </div>
        <div className="absolute bottom-0 w-full text-center">
          <p className="text-lg font-bold text-gray-700">{text}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Homepage;
