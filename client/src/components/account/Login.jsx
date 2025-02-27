import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext.jsx";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserdata] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home");
        setErrorMessage(""); // Clear error message on successful login
      }
    } catch (error) {
      setErrorMessage(
        "Login failed. Please check your details or sign up if you are not registered."
      );
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h2 className="text-5xl font-medium text-blue-600 mb-8">Login</h2>
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-[25rem]"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg text-gray-600 mb-2">
              Enter your Email:
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email@example.com"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg text-gray-600 mb-2"
            >
              Enter your Password:
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center p-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition-all"
          >
            Login
          </button>

          <p className="p-2 text-center">
            New here?
            <Link to="/signup" className="text-blue-600">
              {" "}
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      {/* Error Popup */}
      {errorMessage && (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-[28rem]">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline">{errorMessage}</span>
          <button
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            onClick={() => setErrorMessage("")}
          >
            <svg
              className="fill-current h-6 w-6"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 5.652a1 1 0 011.415 1.415L11.415 11l4.348 4.348a1 1 0 01-1.415 1.415L10 12.415l-4.348 4.348a1 1 0 01-1.415-1.415L8.585 11 4.348 6.652a1 1 0 011.415-1.415L10 9.585l4.348-4.348z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
