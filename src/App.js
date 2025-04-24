// App.js
import React, { useState } from "react";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactHero from "./Components/Contact/Contact";
import Login from "./Components/LoginSignup/Login";
import Pcourse from './Components/allCourse/popularCourse';
import AllCourse from './Components/allCourse/allCourse';
import Service from "./Components/Services/Services";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      
      <main className="main-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Pcourse" element={<Pcourse />} />
          <Route path="/contact" element={<ContactHero />} />
          <Route path="/all-course" element={<AllCourse />} />
          <Route path="/services" element={<Service />} />
          <Route path="/" element={<Home onSignInClick={() => setIsLoginOpen(true)} />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
