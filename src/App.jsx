import React from "react";
import { Route, Routes, Link } from "react-router-dom";  // Import Link and Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Involved from "./pages/Involved";
import Programs from "./pages/Programs";
import Contact from "./pages/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  // Add Contact if needed
// import "./App.css";  // Import global CSS styles

const App = () => (
  <div>
    {/* Navigation Bar */}
    {/* <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Ivy Eco Solutions</h1>
        <div className="space-x-6">
        
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/involved" className="text-white hover:text-gray-200">Get Involved</Link>
          <Link to="/programs" className="text-white hover:text-gray-200">Programs</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
         
        </div>
      </div>
    </nav> */}
    <Navbar />

    {/* Routes and Pages */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/involved" element={<Involved />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
  </div>
);

export default App;
