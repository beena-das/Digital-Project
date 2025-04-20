// App.js
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactHero from "./Components/ContactHero/ContactHero";
import Login from "./Components/LoginSignup/Login";
import Pcourse from './Components/allCourse/popularCourse';
import AllCourse from './Components/allCourse/allCourse';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* flex-grow area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Pcourse" element={<Pcourse />} />
          <Route path="/contact" element={<ContactHero/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/all-course" element={<AllCourse/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
