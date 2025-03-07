import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const isLoggedIn = !!localStorage.getItem("token");
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileImage, setProfileImage] = useState("/default-avatar.png");

    useEffect(() => {
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("profileImage");
        navigate("/login");
    };

    const handleNavigate = (path) => {
        setSidebarOpen(false);
        navigate(path);
    };

    return (
        <>
            <header className="fixed top-0 right-4 z-50 flex items-center justify-end w-full p-2 bg-transparent m-0">
                {isLoggedIn && (
                    <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
                        <img
                            src={profileImage}
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer object-cover"
                        />
                    </button>
                )}
            </header>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <button
                    className="absolute top-4 left-4 text-black hover:text-gray-800 focus:outline-none"
                    style={{ color: "black" }}
                    onClick={() => setSidebarOpen(false)}
                >
                    ✖
                </button>



                <ul className="mt-16 space-y-4 p-4 text-gray-800">
                    <li>
                        <button
                            onClick={() => handleNavigate("/home")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("/blogs")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                        >
                            Blogs
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("/chat")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                        >
                            Chat
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleNavigate("/booknow")}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                        >
                            Book Now
                        </button>
                    </li>
                    <li className="border-t border-gray-200 pt-2">
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 rounded"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>
    );
}

export default Header;
