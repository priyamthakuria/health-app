import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "support", text: "Hello! How can we assist you today?" }
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { sender: "user", text: userMessage },
        { sender: "support", text: "Thank you for reaching out! How else can we help?" }
      ]);
      setUserMessage(""); // Clear the input after sending
    }
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      {!isChatOpen && (
        <div
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 cursor-pointer transition"
        >
          <span className="text-2xl font-bold">💬</span> {/* Chat Icon */}
        </div>
      )}

      {/* Chat Modal (Conversation Section) */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50">
          <div className="bg-white w-96 h-full flex flex-col justify-between p-4 shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Chat with us</h2>
              <button
                onClick={() => setIsChatOpen(false)} // Close chat modal
                className="text-gray-600 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto space-y-4 mt-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${message.sender === "user" ? "bg-blue-100 self-end" : "bg-gray-100"}`}
                >
                  <p className="text-sm text-gray-600">{message.text}</p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="mt-4">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mt-2"
              >
                Send
              </button>
            </div>

            {/* Optional Go to Chat Page */}
            <Link to="/chat">
              <button
                onClick={() => setIsChatOpen(false)} // Navigate to chat page
                className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mt-4"
              >
                Go to Chat Page
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
