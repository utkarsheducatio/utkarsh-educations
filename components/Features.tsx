'use client';

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: "📚",
      title: "Best Coaching",
      description: "More than 20 years that students and parents trust Utkarsh education for the best coaching of Medical & Engineering Entrance exams"
    },
    {
      id: 2,
      icon: "🌟",
      title: "Bright Future",
      description: "Part of journey of bright career of 100s of students by empowering their excellence and putting milestones"
    },
    {
      id: 3,
      icon: "📝",
      title: "Practice & Progress",
      description: 'We believe "Practice makes us perfect" and follow this in our teaching methods to practice more and progress'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Utkarsh Education
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Excellence in education for over two decades
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-colors"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-7xl mb-6 inline-block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
