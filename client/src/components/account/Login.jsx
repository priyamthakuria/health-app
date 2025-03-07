import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext.jsx";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);  // <-- Added loading state

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    setErrorMessage("");  // Clear previous errors immediately
    setLoading(true);  // Set loading state

    try {
      const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/users/login`,
          { email, password }
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    } catch (error) {
      setErrorMessage("Login failed, try again.");  // Show error immediately when the request fails
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-white text-gray-800 pt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          <span className="text-blue-900">Login</span>
        </h2>

        <form onSubmit={submitHandler} className="w-[22rem] bg-white p-5 rounded-xl shadow-md mt-4">
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-3">
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

          <button
              type="submit"
              className={`w-full p-3 text-white rounded-md font-semibold transition-all ${
                  loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-800"
              }`}
              disabled={loading}  // Disable button when loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {errorMessage && (
              <p className="text-red-600 text-sm font-semibold pt-2">
                {errorMessage}
              </p>
          )}

          <p className="pt-9 text-center text-gray-600">
            New here?{" "}
            <Link to="/signup" className="text-blue-900 font-semibold">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
  );
}

export default Login;
