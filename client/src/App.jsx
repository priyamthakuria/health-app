import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Homepage from "./components/homepage/Homepage.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/account/Login.jsx";
import Signup from "./components/account/Signup.jsx";
import Blog from "./services/blog/Blog.jsx";
import Chat from "./services/Chat.jsx";
import BookNow from "./services/BookNow.jsx";
import GetHelp from "./services/GetHelp.jsx"; // Import GetHelp
import UserProtectWrapper from "./components/UserProtectWrapper/UserProtectWrapper.jsx";
import CreatePost from "./services/blog/create/CreatePost.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<div style={{ marginTop: 82 }}></div>*/}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={
          <UserProtectWrapper>
          <Blog />
        </UserProtectWrapper>
        } />
        <Route path="/blog/create" element={
          <UserProtectWrapper>
          <CreatePost />
        </UserProtectWrapper>
        } />
        <Route path="/chat" element={<Chat />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/gethelp" element={<GetHelp />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
