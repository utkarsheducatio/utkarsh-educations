'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WhyUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      title: "Highly Qualified Faculties",
      description: "Team of highly qualified, self-motivated, enthusiastic, and well-experienced teachers with proven track records",
      icon: "👨‍🏫",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Committed for Excellence",
      description: "Promised and committed towards our duties to give the best and quality education to every student",
      icon: "✅",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Personal Attention",
      description: "Individual focus on each student so they can learn without any fear to ask doubts and grow confidently",
      icon: "👥",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  const features = [
    "Digital Classrooms",
    "Best Study Materials",
    "Progress Reports",
    "100+ Tests",
    "Personal Attention",
    "Proper Guidance"
  ];

  const stats = [
    { number: "100+", label: "Doctors", icon: "🩺" },
    { number: "100+", label: "Engineers", icon: "⚙️" },
    { number: "20+", label: "Years", icon: "🎓" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Students Get at Utkarsh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class facilities and personalized attention for every student
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(reason.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-200 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-300 h-full">
                <motion.div
                  animate={{
                    scale: hoveredCard === reason.id ? 1.2 : 1,
                    rotate: hoveredCard === reason.id ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-7xl mb-6 inline-block"
                >
                  {reason.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {reason.description}
                </p>

                {/* Decorative element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`h-1 bg-gradient-to-r ${reason.gradient} mt-6 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Features & Stats Section - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 md:py-20 text-white relative overflow-hidden mt-16"
      >
        {/* Animated background circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Our Features & Achievements
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <span className="text-yellow-400 mr-3 text-xl">✓</span>
                <span className="font-semibold text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/90 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
