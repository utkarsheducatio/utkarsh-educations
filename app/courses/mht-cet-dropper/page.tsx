'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function MHTCETDropperPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  const features = [
    { icon: '⚡', title: 'Intensive Program', description: 'Focused 1-year program for serious aspirants' },
    { icon: '📚', title: 'Revised Strategy', description: 'Optimized curriculum based on previous attempt' },
    { icon: '🎯', title: '250+ Practice Tests', description: 'Comprehensive test series with detailed analysis' },
    { icon: '👨‍🏫', title: 'Expert Mentors', description: 'Experienced faculty and successful toppers' },
    { icon: '📊', title: 'Real-time Analytics', description: 'Detailed performance tracking and improvement plans' },
    { icon: '🏆', title: 'Success Blueprint', description: 'Strategies from MHT-CET toppers' },
  ];

  const courseModules = [
    {
      subject: 'Physics',
      icon: '⚛️',
      topics: ['Mechanics & Waves', 'Thermodynamics', 'Electricity & Current', 'Magnetism', 'Optics & Modern Physics', 'Advanced Problem Solving'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      subject: 'Chemistry',
      icon: '🧪',
      topics: ['Chemical Kinetics & Equilibrium', 'Electrochemistry', 'Organic Reactions', 'Inorganic Compounds', 'Solutions & Colloids', 'Advanced Synthesis'],
      color: 'from-green-500 to-teal-500'
    },
    {
      subject: 'Mathematics',
      icon: '📐',
      topics: ['Algebra & Equations', 'Calculus & Integration', 'Vectors & Geometry', 'Probability & Statistics', 'Trigonometry Applications', 'Problem Solving'],
      color: 'from-purple-500 to-indigo-500'
    },
  ];

  const batchDetails = [
    {
      batch: 'Morning Intensive',
      time: '6:30 AM - 10:00 AM',
      duration: '3.5 hours',
      icon: '🌅'
    },
    {
      batch: 'Regular Intensive',
      time: '10:30 AM - 2:00 PM',
      duration: '3.5 hours',
      icon: '📚'
    },
    {
      batch: 'Afternoon Intensive',
      time: '3:00 PM - 6:30 PM',
      duration: '3.5 hours',
      icon: '☀️'
    },
    {
      batch: 'Evening Intensive',
      time: '6:00 PM - 9:30 PM',
      duration: '3.5 hours',
      icon: '🌙'
    },
  ];

  const advantages = [
    { title: 'Smart Learning', description: 'Focus on weak areas with customized approach' },
    { title: 'Intense Tests', description: 'More than 250 mock tests for complete preparation' },
    { title: 'Personalized Guidance', description: '1-on-1 mentoring sessions for individual growth' },
    { title: 'Daily Support', description: 'Doubt clearing and concept strengthening every day' },
    { title: 'Advanced Analytics', description: 'Track progress with detailed performance reports' },
    { title: 'Proven Success', description: 'Methods tested by successful dropper students' },
  ];

  return (
    <>
      <Navbar onEnrollClick={handleEnrollClick} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-600 via-green-600 to-emerald-700 text-white py-20 overflow-hidden">
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
                <span className="text-white font-semibold">1-Year Intensive Program</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                MHT-CET Dropper Batch
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Specialized 1-year intensive program for MHT-CET repeaters. Comprehensive curriculum with focus on weak areas. Learn from your previous attempt and achieve your target.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Intensive 1-Year Preparation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Personalized Learning Plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Expert Mentoring & Support</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-yellow-400 to-green-500 px-8 py-4 rounded-xl font-bold text-lg text-white hover:from-yellow-500 hover:to-green-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
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
              <div className="bg-gradient-to-br from-lime-400 to-green-400 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Program Highlights</h3>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">⏰ Duration</p>
                    <p className="text-white/90">1 Year (Intensive)</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">🎯 Focus</p>
                    <p className="text-white/90">MHT-CET Excellence</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">� Contact Us</p>
                    <p className="text-white/90">For course details & offers</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">✨ Advantage</p>
                    <p className="text-white/90">Proven strategy for droppers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Dropper Program?</h2>
            <p className="text-gray-600 text-lg">Specialized curriculum designed for MHT-CET repeaters</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-lime-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-green-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Features</h2>
            <p className="text-gray-600 text-lg">Comprehensive support for your MHT-CET success</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Curriculum</h2>
            <p className="text-gray-600 text-lg">Comprehensive coverage with intensive focus on MHT-CET</p>
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
                  <h4 className="font-semibold mb-3">Intensive Topics:</h4>
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
            <p className="text-gray-600 text-lg">Choose your preferred schedule</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{batch.batch}</h3>
                <p className="text-green-600 font-semibold mb-1">{batch.time}</p>
                <p className="text-gray-600 text-sm">{batch.duration} daily</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              🚀 Give Your Second Attempt The Best Chance
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't let the first attempt hold you back. With our intensive dropper program, master MHT-CET and achieve your goals. Learn from experience and succeed with proven strategies.
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
        courseName="MHT-CET Dropper Batch"
      />
    </>
  );
}
