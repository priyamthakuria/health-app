import React from "react";

function Home() {
  const plans = [
    { name: "Basic Plan", price: "$10/month", description: "Basic access to mental health resources.", color: "bg-blue-100 border-blue-400" },
    { name: "Premium Plan", price: "$30/month", description: "Access to one-on-one therapy sessions.", color: "bg-green-100 border-green-400" },
    { name: "Gold Plan", price: "$50/month", description: "All-inclusive mental health support, including workshops.", color: "bg-yellow-100 border-yellow-400" },
    { name: "Platinum Plan", price: "$80/month", description: "Comprehensive therapy and mental wellness services.", color: "bg-purple-100 border-purple-400" },
    { name: "Diamond Plan", price: "$100/month", description: "Exclusive therapy and personal wellness coach.", color: "bg-pink-100 border-pink-400" },
    { name: "Ultimate Plan", price: "$150/month", description: "All-access pass with premium support and events.", color: "bg-red-100 border-red-400" },
  ];

  return (
      <div className="font-sans min-h-screen bg-white">
        {/* Hero Section */}
        <section className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-lg text-center p-10">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Mental Health Matters</h1>
            <p className="text-lg text-gray-700">Prioritize your mental well-being. You deserve it.</p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Wellness Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
            {plans.map((plan, index) => (
                <div key={index} className={`p-6 rounded-lg shadow-md border ${plan.color} transition-transform transform hover:scale-105`}>
                  <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-700 font-bold">{plan.price}</p>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
            ))}
          </div>
        </section>
      </div>
  );
}

export default Home;
