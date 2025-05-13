import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Ivy Eco Solutions. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:underline hover:text-gray-300">Home</Link>
          {/* <Link to="/about" className="hover:underline hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:underline hover:text-gray-300">Contact</Link> */}
        </div>

        <div className="flex gap-4 text-lg">
          <a href="https://www.facebook.com/share/1VWavHQQRP/?mibextid=wwXIfr" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="https://x.com/ivynyaboke_?s=21" className="hover:text-gray-300"><FaTwitter /></a>
          <a href="https://www.instagram.com/ivy_eco_solutions" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
