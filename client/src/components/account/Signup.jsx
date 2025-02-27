import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserDataContext } from "../../context/UserContext.jsx";

function Signup(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserdata] = useState({});

  const navigate= useNavigate();
  const {user, setUser} = useContext(UserDataContext); 

  const submitHandler = async(e) => {
    e.preventDefault();

    const newUser ={
      username: username,
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, newUser);

    if(response.status === 201){
      const data= response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <h2 className="text-center text-5xl font-medium mb-6 text-green-600 p-5">Sign Up</h2>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        // className="w-80 bg-white p-6 rounded-lg shadow-lg"
        className="w-[25rem]"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-lg font-medium text-gray-600"
          >
            Enter your username:
          </label>
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-600"
          >
          Your Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="xyz@example.com"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-600"
          >
            Your Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <button
          type="submit"
          // className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          className="w-full flex items-center justify-center p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
        >
          Create Account
        </button>

        <p className="p-2 text-center">
                    Already have an account?
                    <Link to="/login" className="text-blue-600">
                      {" "}Login here
                    </Link>
                  </p>
      </form>
    </div>
  );
}

export default Signup;