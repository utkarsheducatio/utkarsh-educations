'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function NEETClass11Page() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };
  const features = [
    { icon: '👨‍🏫', title: 'Expert Faculty', description: 'Learn from highly experienced NEET educators' },
    { icon: '📚', title: 'Comprehensive Study Material', description: 'NCERT-based content with additional practice' },
    { icon: '🎯', title: 'Regular Tests', description: 'Weekly tests and mock exams for better preparation' },
    { icon: '💡', title: 'Doubt Clearing Sessions', description: '24/7 doubt resolution support' },
    { icon: '📊', title: 'Performance Analysis', description: 'Detailed reports to track your progress' },
    { icon: '🏆', title: 'Previous Year Toppers', description: 'Learn strategies from successful students' },
  ];

  const courseModules = [
    {
      subject: 'Physics',
      icon: '⚛️',
      topics: ['Mechanics', 'Thermodynamics', 'Optics', 'Waves & Sound', 'Modern Physics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      subject: 'Chemistry',
      icon: '🧪',
      topics: ['Physical Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Chemical Bonding', 'Equilibrium'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      subject: 'Biology',
      icon: '🧬',
      topics: ['Cell Biology', 'Genetics', 'Ecology', 'Human Physiology', 'Plant Physiology'],
      color: 'from-purple-500 to-pink-500'
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
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold mb-4">
                🔥 Admissions Open for 2026
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                NEET Class 11 + 12
                <span className="block text-yellow-300 mt-2">Complete Preparation</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Start your medical journey with comprehensive NEET preparation from Class 11 through Class 12 with expert guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-2xl hover:scale-105"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
                <div className="space-y-4">
                  {['2-Year Structured Program', 'NCERT + Advanced Topics', 'Weekly Tests & Analysis', 'Doubt Resolution Support', 'Study Material Included'].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our NEET Class 11 + 12 Program?
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build a strong foundation for NEET
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="details" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Course Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              Covering all subjects as per NEET syllabus
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${module.color} rounded-3xl opacity-25 group-hover:opacity-100 transition-opacity blur-lg`}></div>
                <div className="relative bg-white p-8 rounded-3xl border-2 border-gray-100">
                  <div className="text-6xl mb-4 text-center">{module.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {module.subject}
                  </h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{topic}</span>
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Batch Details & Schedule
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {batchDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl mb-3">{detail.icon}</div>
                <p className="text-sm text-gray-600 mb-1">{detail.label}</p>
                <p className="text-xl font-bold text-gray-900">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Course Fee Structure</h2>
            <div className="text-6xl font-bold mb-4">₹85,000</div>
            <p className="text-xl text-blue-100 mb-6">Complete 1-Year Program</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-sm text-blue-200 mb-1">Includes</p>
                  <p className="font-semibold">Study Material</p>
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Includes</p>
                  <p className="font-semibold">Test Series</p>
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Includes</p>
                  <p className="font-semibold">Doubt Support</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleEnrollClick}
                className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
              >
                � Enroll Now
              </button>
              <a
                href="tel:9370811902"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all"
              >
                📞 Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Your NEET Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Limited seats available! Secure your spot in the next batch
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9370811902"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg inline-block"
              >
                📞 9370811902
              </a>
              <a
                href="/"
                className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all inline-block"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
      <EnrollmentForm 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)}
        courseName="NEET Class 11 + 12"
      />
    </>
  );
}
