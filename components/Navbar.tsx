'use client';

import { useState, useEffect, useRef } from 'react';

const courses = [
  {
    category: 'NEET Courses',
    description: 'Medical entrance preparation',
    icon: '🩺',
    links: [
      { name: 'Class 11th NEET', href: '/courses/neet-11' },
      { name: 'Class 12th NEET', href: '/courses/neet-12' },
      { name: 'Dropper NEET', href: '/courses/neet-dropper' },
      { name: 'NEET Test Series', href: '/courses/neet-test-series' },
    ],
  },
  {
    category: 'JEE Courses',
    description: 'Engineering entrance preparation',
    icon: '⚙️',
    links: [
      { name: 'Class 11th JEE', href: '/courses/jee-11' },
      { name: 'Class 12th JEE', href: '/courses/jee-12' },
      { name: 'Dropper JEE', href: '/courses/jee-dropper' },
      { name: 'JEE Advanced', href: '/courses/jee-advanced' },
    ],
  },
  {
    category: 'MHT-CET Courses',
    description: 'State entrance preparation',
    icon: '📘',
    links: [
      { name: 'Class 11th CET', href: '/courses/mht-cet-11' },
      { name: 'Class 12th CET', href: '/courses/mht-cet-12' },
      { name: 'Dropper CET', href: '/courses/mht-cet-dropper' },
      { name: 'CET Test Series', href: '/courses/mht-cet-test-series' },
    ],
  },
];

interface NavbarProps {
  onEnrollClick?: (courseName?: string) => void;
}

export default function Navbar({ onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
      }
    };

    if (coursesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [coursesOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:9370811902" className="hover:text-blue-100">
              📞 9370811902
            </a>
            <span className="hidden md:block">Mon–Sat: 8:00 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="hover:text-blue-100 transition">Student Login</a>
            <span className="hidden sm:inline">|</span>
            <a href="/admin" className="hover:text-blue-100 transition hidden sm:inline">Institute Login</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex flex-col">
            <span className="text-2xl font-bold text-primary-600">
              Utkarsh <span className="text-orange-500">Education</span>
            </span>
            <span className="text-xs text-gray-500">Excellence in Education</span>
          </a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              <a href="/" className="nav-link">Home</a>

              {/* Courses Mega Menu */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="nav-link flex items-center gap-1"
                >
                  Courses
                  <svg className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {coursesOpen && (
                  <div className="absolute left-0 top-full mt-3 w-[800px] bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                    <div className="grid grid-cols-3 gap-6">
                      {courses.map((course, i) => (
                        <div key={i}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">{course.icon}</span>
                            <div>
                              <h3 className="font-semibold">{course.category}</h3>
                              <p className="text-xs text-gray-500">{course.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {course.links.map((link, j) => (
                              <li key={j}>
                                <a
                                  href={link.href}
                                  className="text-sm text-gray-600 hover:text-primary-600"
                                >
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/about" className="nav-link">About Us</a>
              <a href="/results" className="nav-link">Results</a>
              <a href="/contact" className="nav-link">Contact</a>
            </div>
          </div>

          {/* Enroll Button - Extreme Right */}
          <div className="hidden md:block">
            <button
              onClick={() => onEnrollClick?.()}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <a className="mobile-link" href="/">Home</a>
            <a className="mobile-link" href="/about">About Us</a>
            <a className="mobile-link" href="/results">Results</a>
            <a className="mobile-link" href="/contact">Contact</a>
            <button
              onClick={() => {
                onEnrollClick?.();
                setIsOpen(false);
              }}
              className="block bg-orange-500 text-white text-center mx-4 mt-3 py-2 rounded-lg w-[calc(100%-2rem)]"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
