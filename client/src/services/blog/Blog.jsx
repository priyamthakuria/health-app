import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // <-- Ensure Link is imported
import Banner from './elements/Banner';
import Categories from './elements/Categories';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/posts`);
        console.log(response.data); // Check if the response is correct
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Banner />
      <div className="flex justify-start mt-1">
        {/* Categories Section */}
        <div className="w-auto p-0">
          <Categories />
        </div>

        {/* Posts Section */}
        <div className="w-full lg:w-5/6 sm:w-4/5 p-4 flex flex-wrap">
          <h1 className="text-2xl font-bold mb-4">All Posts</h1>
          <div>
            {posts.length === 0 ? (
              <p>No posts available.</p>
            ) : (
              posts.map((post) => (
                <div key={post._id} className="mb-4 p-4 border rounded-md">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{post.description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdDate).toLocaleDateString()} {/* Format Date */}
                  </p>
                  <Link to={`/posts/${post._id}`} className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
