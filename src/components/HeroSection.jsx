import React from 'react';

const HeroSection = () => (
    <section className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white text-center p-20">
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Making a Difference, Together
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
          Join us in our mission to create positive change. Together, we can make a lasting impact.
        </p>
        
        {/* Buttons Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <button className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Donate Now
          </button>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
  
  export default HeroSection;
  