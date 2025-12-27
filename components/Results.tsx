'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Results() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  const toppers = [
    {
      id: 1,
      name: "Komal Bhopal",
      exam: "JEE 2025",
      rank: "Top Ranker",
      score: "96.95%ile",
      college: "Engineering College",
      stream: "Engineering",
      image: "https://ik.imagekit.io/qujrbo6v2/Komal%20Bhopal.jpg",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      id: 2,
      name: "Sudarshan Jadhao",
      exam: "JEE 2025",
      rank: "Top Ranker",
      score: "96.58%ile",
      college: "Engineering College",
      stream: "Engineering",
      image: "https://ik.imagekit.io/qujrbo6v2/Sudarshan%20Jadhao.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Sayali Gadge",
      exam: "JEE 2025",
      rank: "Top Ranker",
      score: "96.33%ile",
      college: "Engineering College",
      stream: "Engineering",
      image: "https://ik.imagekit.io/qujrbo6v2/Sayali%20Gadge.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "Suyash Joshi",
      exam: "JEE 2024",
      rank: "Top Ranker",
      score: "99.57%ile",
      college: "Top Engineering College",
      stream: "Engineering",
      image: "https://ik.imagekit.io/qujrbo6v2/Suyash%20Joshi.jpg",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      name: "Gajanan Jadhao",
      exam: "JEE 2025",
      rank: "Top Ranker",
      score: "95.40%ile",
      college: "Engineering College",
      stream: "Engineering",
      image: "https://ik.imagekit.io/qujrbo6v2/Gajanan%20Jadhao.jpg",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-white">
      {/* Create scrollable height for sticky effect */}
      <div className="h-[500vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl"
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
                Our Star Performers
              </h2>
              <p className="text-xl text-gray-600">Celebrating our toppers and their achievements</p>
              <p className="text-sm text-gray-500 mt-4">↓ Scroll to see all toppers ↓</p>
            </motion.div>

            {/* Horizontal Scrolling Container */}
            <div className="relative flex items-center overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex gap-8 px-8"
              >
                {toppers.map((topper, index) => (
                  <motion.div
                    key={topper.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -15, scale: 1.03 }}
                    className="relative group flex-shrink-0 w-[400px]"
                  >
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${topper.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                    
                    <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100 group-hover:border-transparent transition-all duration-300">
                      {/* Image Section */}
                      <div className={`relative h-80 bg-gradient-to-br ${topper.gradient} flex items-center justify-center overflow-hidden`}>
                        {/* Student Photo */}
                        <Image
                          src={topper.image}
                          alt={topper.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        
                        {/* Rank Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, type: "spring" }}
                          className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg"
                        >
                          <p className="text-sm font-bold text-gray-900">{topper.rank}</p>
                        </motion.div>

                        {/* Exam Badge */}
                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
                          <p className="text-sm font-semibold text-white">{topper.exam}</p>
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{topper.name}</h3>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">Score</span>
                            <span className="font-bold text-gray-900">{topper.score}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">Stream</span>
                            <span className="font-semibold text-blue-600">{topper.stream}</span>
                          </div>

                          <div className="pt-2 border-t border-gray-200">
                            <p className="text-sm text-gray-600 mb-1">Admitted to</p>
                            <p className="font-bold text-lg text-gray-900">{topper.college}</p>
                          </div>
                        </div>

                        {/* Bottom Accent Bar */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2, duration: 0.8 }}
                          className={`h-1.5 bg-gradient-to-r ${topper.gradient} rounded-full origin-left`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
