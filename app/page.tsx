'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import QuickAdmission from '@/components/QuickAdmission';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import WhyUs from '@/components/WhyUs';
import Announcements from '@/components/Announcements';
import Results from '@/components/Results';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function Home() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleEnrollClick = (courseName: string = '') => {
    setSelectedCourse(courseName);
    setIsEnrollmentOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar onEnrollClick={handleEnrollClick} />
      <HeroSlider onEnrollClick={handleEnrollClick} />
      <QuickAdmission />
      <Features />
      <Courses onEnrollClick={handleEnrollClick} />
      <WhyUs />
      <Announcements />
      <Results />
      <Contact />
      <EnrollmentForm 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)}
        courseName={selectedCourse}
      />
    </main>
  );
}
