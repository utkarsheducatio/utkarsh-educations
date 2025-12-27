'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
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

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setMobileCoursesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar - Responsive */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 text-xs sm:text-sm">
          <div className="flex items-center space-x-3 sm:space-x-6 flex-wrap justify-center sm:justify-start">
            <a href="tel:9370811902" className="hover:text-blue-100 transition whitespace-nowrap">
              📞 9370811902
            </a>
            <span className="hidden md:block text-white/80">Mon–Sat: 8:00 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <a href="/login" className="hover:text-blue-100 transition whitespace-nowrap">Student Login</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://utkarsheducation.enromatics.com/tenant/login" target="_blank" rel="noopener noreferrer" className="hover:text-blue-100 transition hidden sm:inline whitespace-nowrap">Institute Login</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Responsive */}
          <a href="/" className="flex items-center flex-shrink-0">
            <Image
              src="https://ik.imagekit.io/qujrbo6v2/cropped-Logo-1.png"
              alt="Utkarsh Education Logo"
              width={180}
              height={50}
              className="h-12 md:h-14 w-auto"
              unoptimized
            />
          </a>

          {/* Desktop Menu - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
            <div className="flex items-center space-x-4 xl:space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base whitespace-nowrap transition">Home</a>

              {/* Courses Mega Menu - Desktop Only */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base flex items-center gap-1 transition"
                >
                  Courses
                  <svg className={`w-4 h-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {coursesOpen && (
                  <div className="absolute left-0 top-full mt-3 w-screen md:w-[700px] lg:w-[800px] xl:w-[900px] bg-white rounded-xl shadow-2xl p-4 md:p-6 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {courses.map((course, i) => (
                        <div key={i}>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl md:text-2xl">{course.icon}</span>
                            <div className="min-w-0">
                              <h3 className="font-semibold text-sm md:text-base">{course.category}</h3>
                              <p className="text-xs text-gray-500">{course.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {course.links.map((link, j) => (
                              <li key={j}>
                                <a
                                  href={link.href}
                                  onClick={() => setCoursesOpen(false)}
                                  className="text-xs md:text-sm text-gray-600 hover:text-blue-600 hover:font-semibold transition"
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

              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base whitespace-nowrap transition">About Us</a>
              <a href="/results" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base whitespace-nowrap transition">Results</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base whitespace-nowrap transition">Contact</a>
            </div>
          </div>

          {/* Enroll Button - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => {
                onEnrollClick?.();
                setIsOpen(false);
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 md:px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base whitespace-nowrap"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile/Tablet Toggle - Hamburger */}
          <button
            className="lg:hidden flex-shrink-0 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile/Tablet Menu - Responsive */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t space-y-2">
            <a className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition" href="/">Home</a>
            
            {/* Mobile Courses Dropdown */}
            <button
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition flex justify-between items-center"
            >
              Courses
              <svg className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7" stroke="currentColor" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileCoursesOpen && (
              <div className="bg-gray-50 rounded-lg p-3 space-y-3">
                {courses.map((course, i) => (
                  <div key={i} className="border-b pb-3 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{course.icon}</span>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm">{course.category}</h3>
                        <p className="text-xs text-gray-500">{course.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-1 pl-4">
                      {course.links.map((link, j) => (
                        <li key={j}>
                          <a
                            href={link.href}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileCoursesOpen(false);
                            }}
                            className="text-sm text-gray-600 hover:text-blue-600 hover:font-semibold transition block"
                          >
                            → {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <a className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition" href="/about">About Us</a>
            <a className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition" href="/results">Results</a>
            <a className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition" href="/contact">Contact</a>
            
            <button
              onClick={() => {
                onEnrollClick?.();
                setIsOpen(false);
              }}
              className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center mx-auto mt-3 py-2 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
