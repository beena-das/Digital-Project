import React from "react";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import About from "./Components/About/About"
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactHero from "./Components/ContactHero/ContactHero";
import AppDeveloper from "./Components/appDeveloper/appDeveloper";
import WebDeveloper from "./Components/webDeveloper/webDeveloper";
import Login from "./Components/LoginSignup/Login";






function App() {
  return (

  <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactHero/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/courses/web" element={<WebDeveloper />} />
        <Route path="/courses/app" element={<AppDeveloper />} />


      </Routes>
   <Footer/>
  </>
  );
}

export default App;
