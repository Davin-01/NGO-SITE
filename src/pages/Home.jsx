import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-300 to-blue-600 min-h-screen flex items-center justify-center px-4 py-16 sm:py-24">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509099836639-18ba1795216d")',
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg px-2">
          Empowering Communities, One Step at a Time
        </h1>

        {/* Description */}
        <p className="text-gray-100 text-sm sm:text-base md:text-xl mb-10 max-w-3xl mx-auto px-4">
          Ivy Eco Solutions is a passionate non-profit committed to uplifting lives through sustainable programs in education, health, and community development.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-2 w-full">
          <Link to="/involved" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-800 transform hover:scale-105 transition duration-300">
              Explore Programs
            </button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transform hover:scale-105 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Divider + Quote */}
        <div className="mt-12 sm:mt-16 px-4">
          <hr className="w-20 border-t-2 border-white mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-100 italic text-xs sm:text-base">
            "Together, we can build a brighter, more sustainable future."
          </p>
        </div>

        {/* Program Highlights */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Card: Education */}
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-xl transition text-left">
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Education</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Scholarships, mentorships, and digital learning tools to support lifelong learning.
            </p>
          </div>

          {/* Card: Healthcare */}
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-xl transition text-left">
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Healthcare</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Accessible medical camps, hygiene drives, and mental health support for all.
            </p>
          </div>

          {/* Card: Empowerment */}
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md hover:shadow-xl transition text-left">
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Empowerment</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Skills training and community projects that foster independence and resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
