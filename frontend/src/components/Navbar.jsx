import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-3 h-23">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Finance Article</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">SignUp/signIn</Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-40 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/30 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-4 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (slides from top) */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-4 py-10 transition-all duration-500 ${
            darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
      
          <Link to="/categories" onClick={() => setIsOpen(false)}>Categories</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
        </div>
      )}
    </nav>
  );
}
