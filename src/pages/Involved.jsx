import React from "react";
import img11 from "../assets/img11.jpeg"; // Replace with your actual image path

const Involved = () => (
  <section className="bg-white py-16 px-6 sm:px-12">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-6">Get Involved</h2>
      <p className="text-gray-700 text-lg mb-10">
        Be part of the movement. Whether you donate, volunteer, or partner with us, your involvement makes a real difference.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-50 p-6 rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Volunteer</h3>
          <p>Join our team on the ground or online and make a hands-on impact.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Donate</h3>
          <p>Your financial support powers our programs and reaches more lives.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Partner</h3>
          <p>Work with us to expand our reach and impact through collaboration.</p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="flex flex-col sm:flex-row items-center gap-8 text-left bg-blue-50 p-6 sm:p-10 rounded-xl shadow-lg">
        <img
          src={img11}
          alt="Founder of Ivy Eco Solutions"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-800"
        />
        <div>
          <h3 className="text-2xl font-bold text-blue-800 mb-2">Meet Our Founder</h3>
          <p className="text-gray-700 mb-4">
            Ivy Nyaboke Mogire is a passionate changemaker with a vision for a more sustainable and equitable future. Through Ivy Eco Solutions, she has mobilized communities and partners to create lasting impact in education, health, and youth empowerment.
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:ivyecosolutions@gmail.com" className="text-blue-600 hover:underline">ivyecosolutions@gmail.com</a><br />
            <strong>Phone:</strong> <a href="tel:+254712345678" className="text-blue-600 hover:underline">+254 #########</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Involved;
