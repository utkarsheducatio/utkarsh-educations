'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:9370811902" className="flex items-center gap-2 hover:text-primary-200">
              📞 9370811902
            </a>
            <span className="hidden md:block">Mon-Sat 8:00 AM to 8:00 PM</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary-200">Login</a>
            <span className="hidden md:block">|</span>
            <a href="#" className="hidden md:block hover:text-primary-200">Enroll Now</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-700">
              Utkarsh Education
            </h1>
            <p className="text-xs text-gray-600">Excellence in Education</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
            <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium">About Us</a>
            <a href="/#courses" className="text-gray-700 hover:text-primary-600 font-medium">Courses</a>
            <a href="/#results" className="text-gray-700 hover:text-primary-600 font-medium">Results</a>
            <a href="/#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
            <button className="bg-accent-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-primary-600 font-medium">Home</a>
              <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium">About Us</a>
              <a href="/#courses" className="text-gray-700 hover:text-primary-600 font-medium">Courses</a>
              <a href="/#results" className="text-gray-700 hover:text-primary-600 font-medium">Results</a>
              <a href="/#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact</a>
              <button className="bg-accent-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-600 transition-colors w-full">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
