import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Ivy Eco Solutions</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-white text-lg">
          <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 transition">About Us</Link></li>
          <li><Link to="/programs" className="hover:text-gray-300 transition">Programs</Link></li>
          <li><Link to="/involved" className="hover:text-gray-300 transition">Get Involved</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
        </ul>

        {/* Menu Button (Mobile) */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-700 text-white text-base mt-2 rounded-md shadow-md px-4 py-4 space-y-2 transition-all duration-300 ease-in-out absolute top-full left-0 w-full z-40">
          <Link to="/" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/programs" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
          <Link to="/involved" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
