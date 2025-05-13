import React from "react";
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
const About = () => (
  <section className="bg-gray-50 py-12 px-6 sm:px-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Text Content */}
      <div>
        <h2 className="text-4xl font-bold text-blue-800 mb-6">About Us</h2>
        
        <p className="text-gray-700 text-lg mb-4">
          We are a dedicated non-profit organization committed to creating sustainable and impactful change in underserved communities. 
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our mission is to empower individuals and families through education, healthcare access, and community-driven programs.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          With the help of passionate volunteers and generous donors, we work hand-in-hand to make the world a better place — one step at a time.
        </p>
        
        {/* Slogan */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-600">Slogan</h3>
          <p className="italic text-xl text-gray-800 mt-4">Sustainable beauty, resilient communities</p>
        </div>

        {/* Vision */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
          <p className="text-lg text-gray-700 mt-4">
            To create a cleaner, healthier, and more equitable world by bridging environmental sustainability with public health, empowering communities through awareness, action, and innovation.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
          <p className="text-lg text-gray-700 mt-4">
            To promote environmental health and sustainability through community action, education, and innovation. We believe that by working together, we can create a sustainable future for all.
          </p>
        </div>

        {/* Get Involved Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-8">
          Get Involved
        </button>
      </div>

      {/* Image Gallery Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
          <img src={img8} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
          <img src={img6} alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
          <img src={img7} alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
          <img src={img3} alt="Image 4" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
          <img src={img4} alt="Image 5" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-64 bg-blue-100 rounded-lg overflow-hidden">
          <img src={img5} alt="Image 6" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
