'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function MHTCETTestSeriesPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  const features = [
    { icon: '📝', title: 'Full-Length Tests', description: '50+ complete MHT-CET mock tests' },
    { icon: '📊', title: 'Detailed Analysis', description: 'Comprehensive performance breakdown for each test' },
    { icon: '⚡', title: 'Instant Solutions', description: 'Step-by-step solutions after each test' },
    { icon: '📈', title: 'Progress Tracking', description: 'Track improvement with detailed analytics' },
    { icon: '🎯', title: 'Topic-wise Tests', description: '100+ chapter-based and topic tests' },
    { icon: '💻', title: 'Online Platform', description: 'Access tests anytime from anywhere' },
  ];

  const testCategories = [
    {
      title: 'Full Length Tests',
      tests: '25+ complete mock exams',
      duration: '90 minutes each',
      color: 'from-blue-500 to-cyan-500',
      icon: '📋'
    },
    {
      title: 'Topic-wise Tests',
      tests: '100+ chapter tests',
      duration: 'Variable duration',
      color: 'from-purple-500 to-pink-500',
      icon: '🎯'
    },
    {
      title: 'Revision Tests',
      tests: '30+ quick revision tests',
      duration: '30-45 minutes',
      color: 'from-green-500 to-teal-500',
      icon: '⚡'
    },
    {
      title: 'Previous Year Papers',
      tests: '10+ actual MHT-CET papers',
      duration: 'Original pattern',
      color: 'from-orange-500 to-red-500',
      icon: '📄'
    },
  ];

  const advantages = [
    { title: 'Real Exam Pattern', description: 'Tests follow official MHT-CET pattern & difficulty' },
    { title: 'Time Management', description: 'Improve speed and accuracy with timed tests' },
    { title: 'Performance Reports', description: 'Get detailed reports on every attempt' },
    { title: 'Rank Comparison', description: 'Compare your performance with other students' },
    { title: 'Expert Solutions', description: 'Learn from detailed answer explanations' },
    { title: 'Personalized Feedback', description: 'Get recommendations for improvement areas' },
  ];

  return (
    <>
      <Navbar onEnrollClick={handleEnrollClick} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white py-20 overflow-hidden">
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
                <span className="text-white font-semibold">Premium Test Series</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                MHT-CET Test Series
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Master MHT-CET with our comprehensive test series. 175+ full-length and topic-wise tests with detailed solutions and performance analytics.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">175+ Tests (Full-Length + Topic-Wise)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Real Exam Pattern & Difficulty</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Instant Solutions & Analytics</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-pink-400 to-rose-500 px-8 py-4 rounded-xl font-bold text-lg text-white hover:from-pink-500 hover:to-rose-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  Join Now
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
              <div className="bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Test Series Highlights</h3>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">📚 Total Tests</p>
                    <p className="text-white/90">175+ comprehensive tests</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">📊 Test Types</p>
                    <p className="text-white/90">Full-length + Topic-wise</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">📞 Contact Us</p>
                    <p className="text-white/90">For special offers & packages</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="font-semibold mb-2">✨ Features</p>
                    <p className="text-white/90">Instant solutions & analytics</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Features</h2>
            <p className="text-gray-600 text-lg">Everything you need to crack MHT-CET</p>
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

      {/* Test Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Test Categories</h2>
            <p className="text-gray-600 text-lg">Diverse test options for comprehensive preparation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all`}
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <div className="space-y-3 text-white/90">
                  <p><span className="font-semibold">Tests:</span> {category.tests}</p>
                  <p><span className="font-semibold">Duration:</span> {category.duration}</p>
                  <button
                    onClick={handleEnrollClick}
                    className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                  >
                    Explore Tests
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Test Series?</h2>
            <p className="text-gray-600 text-lg">Superior test quality and comprehensive analysis</p>
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-pink-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                <p className="text-gray-600">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Test Series Statistics</h2>
            <p className="text-gray-600 text-lg">Comprehensive and well-structured test coverage</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Full-Length Tests', value: '25+', icon: '📋' },
              { label: 'Topic Tests', value: '100+', icon: '🎯' },
              { label: 'Previous Year Papers', value: '10+', icon: '📄' },
              { label: 'Total Questions', value: '5000+', icon: '❓' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center shadow-lg"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              📝 Master MHT-CET with Practice
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who have improved their scores with our test series. Start practicing with real exam patterns today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleEnrollClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
              >
                Join Test Series
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
        courseName="MHT-CET Test Series"
      />
    </>
  );
}
