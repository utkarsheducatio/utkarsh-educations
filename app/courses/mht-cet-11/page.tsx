'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function MHTCETClass11Page() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  const features = [
    { icon: '📚', title: 'Maharashtra Board Aligned', description: 'Curriculum perfectly aligned with MSCB studies' },
    { icon: '🎯', title: 'MHT-CET Focused', description: 'Specific strategies for MHT-CET exam patterns' },
    { icon: '📝', title: '150+ Practice Tests', description: 'Topic-wise and full-length mock tests' },
    { icon: '💡', title: 'Expert Doubt Sessions', description: 'Regular clearing of concepts and tough problems' },
    { icon: '📊', title: 'Progress Tracking', description: 'Detailed analytics of your performance' },
    { icon: '🏆', title: 'MHT-CET Toppers', description: 'Learn strategies from successful students' },
  ];

  const courseModules = [
    {
      subject: 'Physics',
      icon: '⚛️',
      topics: ['Mechanics', 'Waves & Sound', 'Heat & Thermodynamics', 'Electricity & Magnetism', 'Optics', 'Modern Physics Basics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      subject: 'Chemistry',
      icon: '🧪',
      topics: ['Atomic Structure', 'Chemical Bonding', 'States of Matter', 'Periodic Table', 'Reactions & Equations', 'Organic Chemistry Intro'],
      color: 'from-green-500 to-teal-500'
    },
    {
      subject: 'Mathematics',
      icon: '📐',
      topics: ['Algebra Basics', 'Trigonometry', 'Coordinate Geometry', 'Sequences & Series', 'Sets & Relations', 'Functions & Limits'],
      color: 'from-purple-500 to-indigo-500'
    },
  ];

  const batchDetails = [
    { label: 'Batch Start Date', value: 'June 2026', icon: '📅' },
    { label: 'Duration', value: '2 Year Program', icon: '⏱️' },
    { label: 'Class Schedule', value: 'Mon-Sat, 6 Days/Week', icon: '🗓️' },
    { label: 'Batch Size', value: 'Limited to 30 Students', icon: '👥' },
  ];

  return (
    <>
      <Navbar onEnrollClick={handleEnrollClick} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 text-white py-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white font-semibold">MHT-CET Class 11 + 12</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                MHT-CET Class 11 + 12 Preparation
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Master the Maharashtra Higher Secondary Board curriculum from Class 11 through Class 12 while preparing for MHT-CET. Perfect balance between board exams and competitive preparation.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Board + MHT-CET Combined Prep</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Expert Faculty & Mentoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Regular Assessment & Guidance</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-xl font-bold text-lg text-white hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  Enroll Now
                </button>
                <a
                  href="#details"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  View Details
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Course Highlights</h3>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">📅 Duration</p>
                    <p className="text-white/90">2 Years (Class 11 + 12)</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">🎯 Focus</p>
                    <p className="text-white/90">Board + MHT-CET</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">� Contact Us</p>
                    <p className="text-white/90">For course details & offers</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">✨ Advantage</p>
                    <p className="text-white/90">State board aligned curriculum</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Class 11 + 12 Special Features</h2>
            <p className="text-gray-600 text-lg">Perfect balance of board and competitive exam preparation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Board Aligned Curriculum</h2>
            <p className="text-gray-600 text-lg">Complete coverage as per Maharashtra HSC syllabus</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${module.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all`}
              >
                <div className="text-5xl mb-4">{module.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{module.subject}</h3>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>→</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Batch Timings</h2>
            <p className="text-gray-600 text-lg">Choose your preferred timing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {batchDetails.map((batch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">{batch.icon}</div>
                <p className="text-sm text-gray-600 mb-1">{batch.label}</p>
                <p className="text-xl font-bold text-gray-900">{batch.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              📚 Enroll in MHT-CET Batch
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ace board exams and MHT-CET simultaneously. Join our comprehensive program designed for Maharashtra students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleEnrollClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
              >
                Enroll Now
              </motion.button>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
      <EnrollmentForm 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)}
        courseName="MHT-CET Class 11 + 12"
      />
    </>
  );
}
