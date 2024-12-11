import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Homepage from './components/homepage/Homepage.jsx';
import MindDeserves from './components/homepage/MindDeserves.jsx';
import WhyChooseUs from './components/homepage/WhyChooseUs.jsx';
import ChooseYourPlan from './components/homepage/ChooseYourPlan.jsx';
import FloatingImages from './components/homepage/FloatingImages.jsx';
import Footer from './components/footer/Footer.jsx';
import Login from "./components/account/Login.jsx"; 
import Signup from "./components/account/Signup.jsx";
import Blog from './services/Blog.jsx';
import Chat from './services/Chat.jsx';
import BookNow from './services/BookNow.jsx';
import GetHelp from './services/GetHelp.jsx'; // Import GetHelp

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Homepage />
                <MindDeserves />
                <WhyChooseUs />
                <ChooseYourPlan />
                <FloatingImages />
                <Footer />
              </>
            } 
          />
          {/* Routes for Login and Signup pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Routes for new pages */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/gethelp" element={<GetHelp />} /> {/* Route for Get Help */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
