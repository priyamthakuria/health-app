import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserDataContext } from "../../../context/UserContext";
import axios from "axios";

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const { user } = useContext(UserDataContext);

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  // Update the post state when file changes
  useEffect(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPost({ ...post, picture: imageUrl });
    }
  }, [file]);

  const savePost = async () => {
  if (!post.title || !post.description) {
    alert("Please fill all fields!");
    return;
  }

  const updatedPost = {
    ...post,
    categories: location.search?.split("=")[1] || "All",
    username: user?.username || "Guest",  // Ensure username is valid
  };

  console.log("Posting data:", updatedPost);  // Log the post data

  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/posts`, updatedPost);
    console.log("Post created successfully:", response.data);
    navigate("/blogs"); // Navigate to blogs after posting
  } catch (error) {
    console.error("Failed to create post:", error.response || error.message);
    alert("Failed to create post. Please try again.");
  }
};

  

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      {/* Post Image */}
      <img
        src={url}
        alt="post"
        className="w-full h-64 object-cover rounded-md shadow-md"
      />

      {/* Form Controls */}
      <div className="flex items-center gap-4 mt-2">
        {/* File Input */}
        <label
          htmlFor="fileInput"
          className="cursor-pointer text-gray-600 hover:text-blue-500"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="gray"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {/* Title Input */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full border border-gray-300 rounded-md p-2 text-lg"
          onChange={handleChange}
        />

        {/* Publish Button */}
        <button
          onClick={savePost}
          className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Publish
        </button>
      </div>

      {/* Description Textarea */}
      <textarea
        rows="5"
        name="description"
        placeholder="Tell your story..."
        className="w-full mt-6 border border-gray-300 rounded-md p-4 text-lg focus:ring-2 focus:ring-blue-500 outline-none"
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default CreatePost;