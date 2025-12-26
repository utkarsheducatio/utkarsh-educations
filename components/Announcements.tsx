'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Announcements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to horizontal movement
  // Adjusted to show first and last card completely
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  const testimonials = [
    {
      id: 1,
      text: "Utkarsh Education provided excellent guidance and support. The faculty is amazing and helped me achieve my dream of getting into medical college. The personalized attention and rigorous practice sessions were key to my success.",
      name: "Priya Sharma",
      course: "NEET 2024 - AIR 245",
      college: "AIIMS Delhi",
      initial: "P",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      text: "Best coaching in Akola! The study material and regular tests helped me secure a good rank in JEE. The doubt clearing sessions and mock tests were extremely helpful. Highly recommend!",
      name: "Rahul Deshmukh",
      course: "JEE 2024 - AIR 1250",
      college: "IIT Bombay",
      initial: "R",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      text: "The teaching methodology at Utkarsh is exceptional. Every concept is explained in detail with real-life examples. The faculty is always available to help and guide us.",
      name: "Sneha Patil",
      course: "MHT-CET 2024",
      college: "COEP Pune",
      initial: "S",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      text: "I am grateful to Utkarsh Education for helping me achieve my goals. The structured curriculum and regular parent-teacher meetings kept me on track throughout my preparation.",
      name: "Aditya Joshi",
      course: "NEET 2024",
      college: "GMCH Nagpur",
      initial: "A",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      text: "The test series and mock exams were incredibly helpful. They prepared me well for the actual exam pattern. Thank you Utkarsh Education for making my dreams come true!",
      name: "Megha Kulkarni",
      course: "NEET 2024",
      college: "GMC Mumbai",
      initial: "M",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section ref={containerRef} id="results" className="relative bg-gradient-to-b from-gray-50 to-white">
      {/* Create scrollable height for sticky effect */}
      <div className="h-[500vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              animate={{
                x: [0, 50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                backgroundSize: '50px 100%',
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 px-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories That Inspire
              </h2>
              <p className="text-xl text-gray-600">Hear from our toppers and achievers</p>
              <p className="text-sm text-gray-500 mt-4">↓ Keep scrolling to see all reviews ↓</p>
            </motion.div>

            {/* Horizontal Scrolling Container */}
            <div className="relative flex items-center overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex gap-8 px-8"
              >
                {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveIndex(index)}
                className="relative group flex-shrink-0 w-[500px]"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`} />
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-6xl text-gray-200 mb-4"
                  >
                    "
                  </motion.div>

                  <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow italic">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg`}
                    >
                      {testimonial.initial}
                    </motion.div>
                    <div className="ml-4">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-blue-600 font-semibold">{testimonial.course}</p>
                      <p className="text-sm text-gray-600">{testimonial.college}</p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${testimonial.gradient} mt-6 rounded-full origin-left`}
                  />
                </div>
              </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner - After sticky section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-12 text-center text-white shadow-2xl"
          >
            {/* Animated background */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Admissions Open for 2025-26 Batch!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-6"
              >
                Limited seats available. Enroll now and get up to 100% scholarship
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Apply Now →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
