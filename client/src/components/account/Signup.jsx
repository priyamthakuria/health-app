import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../context/UserContext.jsx";
import { FaUserPlus } from "react-icons/fa";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("Please agree to the Terms & Conditions");
      return;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    console.log("Sending user data:", newUser); // Debugging

    try {
      const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/signup`,
          newUser,
          {
            headers: {
              "Content-Type": "application/json", // Ensure correct headers
            },
          }
      );

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed. Try again.");
    }
  };


  return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 text-gray-800 py-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            <span className="text-blue-900">Sign Up</span> /{" "}
            <Link to="/login" className="text-gray-400 hover:text-gray-600">
              Log In
            </Link>
          </h2>
          <p className="text-gray-500 text-sm mt-1">To access all the features</p>
        </div>

        <label htmlFor="profile-upload" className="cursor-pointer">
          <div className="bg-gray-200 p-4 rounded-full mb-6 relative w-20 h-20 flex items-center justify-center">
            {profilePicture ? (
                <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile Preview"
                    className="w-16 h-16 rounded-full object-cover"
                />
            ) : (
                <FaUserPlus className="text-gray-600 text-4xl" />
            )}
          </div>
          <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
          />
        </label>

        <form onSubmit={submitHandler} className="w-[22rem] bg-white p-6 rounded-xl shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xyz@example.com"
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mr-2" />
            <label className="text-sm text-gray-600">
              I agree to all the{" "}
              <span className="font-semibold text-gray-900 cursor-pointer">Terms & Conditions</span>
            </label>
          </div>

          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

          <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 ${loading ? "bg-gray-400" : "bg-blue-900 hover:bg-blue-800"} text-white rounded-md transition-all font-semibold`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="p-2 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600"> Login here</Link>
          </p>
        </form>
      </div>
  );
}

export default Signup;
