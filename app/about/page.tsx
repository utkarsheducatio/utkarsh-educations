'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

export default function AboutPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleEnrollClick = (courseName: string = '') => {
    setIsEnrollmentOpen(true);
  };
  const features = [
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Highly Qualified | Fully Professional | Self Motivated | Dynamic | Experienced faculty members',
    },
    {
      icon: '📚',
      title: 'Study Material',
      description: 'High-quality, hand-picked, self-created study material for better understanding along with preferred books',
    },
    {
      icon: '🏆',
      title: 'Result Oriented',
      description: 'We are delivering and we will always be delivering the best results in the field of NEET | JEE | MHTCET',
    },
  ];

  return (
    <>
      <Navbar onEnrollClick={handleEnrollClick} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">Utkarsh Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              20+ Years of Excellence in NEET, JEE & MHT-CET Coaching
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                  <span className="text-6xl">🎓</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Prof. Vivek Shastrakar Sir's Utkarsh Education is a unit of Physics Point in Akola. 
                We are one of the leading coaching institutes in Vidarbha for preparation of Medical & 
                Engineering Entrance Exams like <strong>NEET | JEE (Main | Advanced) | MHTCET</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Utkarsh Education has been giving the best results for the last <strong>20 years</strong>. 
                Our students have achieved their dream careers of becoming doctors or engineers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in delivering our best coaching for students' ultimate success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              What makes us the best coaching institute in Vidarbha
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To carve out Engineers & Doctors from an early stage of a child on the basis of 
                their own interests and capabilities. Utkarsh Education aims to provide a unique 
                platform for students to make a career choice based on the guidance of our 
                excellent faculty at every level.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Prof Vivek Shastrakar sir, director, and Founder of Utkarsh Education is visionary 
                about guiding the students and their parents about the various entrance exams based 
                on student's interests, skills, and capabilities. The institute helps students to 
                crack one of the toughest exams in India. Utkarsh Education promises that our 
                association will build confidence in our students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '5000+', label: 'Students Trained' },
              { number: '95%', label: 'Success Rate' },
              { number: '100+', label: 'Top Rankers' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 md:h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-9xl">👨‍🏫</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Prof. Vivek Shastrakar
                </h2>
                <p className="text-xl text-blue-600 mb-6 font-semibold">
                  Director & Founder
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  A visionary educator with over 20 years of experience in coaching students 
                  for India's toughest entrance examinations.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Under his guidance, thousands of students have successfully secured 
                  admissions in premier medical and engineering colleges across India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join Utkarsh Education and transform your dreams into reality
            </p>
            <motion.a
              href="tel:9370811902"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transition-all"
            >
              📞 Call Now: 9370811902
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Contact />
      <EnrollmentForm 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)}
      />
    </>
  );
}
