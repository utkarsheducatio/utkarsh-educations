'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

interface Result {
  id: number;
  name: string;
  exam: string;
  year: string;
  rank: string;
  score: string;
  college: string;
  stream: string;
  image: string;
  gradientColor: string;
}

export default function ResultsPage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  const allResults: Result[] = [
    {
      id: 1,
      name: 'Priya Sharma',
      exam: 'NEET',
      year: '2024',
      rank: 'AIR 142',
      score: '715/720',
      college: 'AIIMS Delhi',
      stream: 'MBBS',
      image: '/media/student-1.jpg',
      gradientColor: 'from-emerald-400 to-teal-600'
    },
    {
      id: 2,
      name: 'Rahul Deshmukh',
      exam: 'JEE',
      year: '2024',
      rank: 'AIR 287',
      score: '298/300',
      college: 'IIT Bombay',
      stream: 'Computer Science',
      image: '/media/student-2.jpg',
      gradientColor: 'from-blue-400 to-indigo-600'
    },
    {
      id: 3,
      name: 'Sneha Patil',
      exam: 'NEET',
      year: '2024',
      rank: 'AIR 356',
      score: '702/720',
      college: 'MAMC Delhi',
      stream: 'MBBS',
      image: '/media/student-3.jpg',
      gradientColor: 'from-purple-400 to-pink-600'
    },
    {
      id: 4,
      name: 'Aditya Kulkarni',
      exam: 'MHT-CET',
      year: '2024',
      rank: 'State Rank 45',
      score: '99.87%ile',
      college: 'VJTI Mumbai',
      stream: 'Mechanical Engineering',
      image: '/media/student-4.jpg',
      gradientColor: 'from-orange-400 to-red-600'
    },
    {
      id: 5,
      name: 'Ananya Singh',
      exam: 'NEET',
      year: '2023',
      rank: 'AIR 458',
      score: '698/720',
      college: 'GMC Nagpur',
      stream: 'MBBS',
      image: '/media/student-5.jpg',
      gradientColor: 'from-cyan-400 to-blue-600'
    },
    {
      id: 6,
      name: 'Arjun Thakur',
      exam: 'JEE',
      year: '2023',
      rank: 'AIR 512',
      score: '289/300',
      college: 'IIT Delhi',
      stream: 'Electrical Engineering',
      image: '/media/student-6.jpg',
      gradientColor: 'from-yellow-400 to-orange-600'
    },
    {
      id: 7,
      name: 'Ishita Joshi',
      exam: 'NEET',
      year: '2023',
      rank: 'AIR 623',
      score: '689/720',
      college: 'BJ Medical Pune',
      stream: 'MBBS',
      image: '/media/student-7.jpg',
      gradientColor: 'from-rose-400 to-red-600'
    },
    {
      id: 8,
      name: 'Karan Mehta',
      exam: 'MHT-CET',
      year: '2023',
      rank: 'State Rank 78',
      score: '99.72%ile',
      college: 'COEP Pune',
      stream: 'Computer Engineering',
      image: '/media/student-8.jpg',
      gradientColor: 'from-green-400 to-emerald-600'
    },
    {
      id: 9,
      name: 'Divya Rao',
      exam: 'NEET',
      year: '2022',
      rank: 'AIR 734',
      score: '681/720',
      college: 'Seth GS Medical',
      stream: 'MBBS',
      image: '/media/student-9.jpg',
      gradientColor: 'from-violet-400 to-purple-600'
    },
    {
      id: 10,
      name: 'Rohan Pawar',
      exam: 'JEE',
      year: '2022',
      rank: 'AIR 892',
      score: '278/300',
      college: 'NIT Trichy',
      stream: 'Civil Engineering',
      image: '/media/student-10.jpg',
      gradientColor: 'from-indigo-400 to-blue-600'
    },
    {
      id: 11,
      name: 'Pooja Kamble',
      exam: 'NEET',
      year: '2022',
      rank: 'AIR 945',
      score: '676/720',
      college: 'GMC Mumbai',
      stream: 'MBBS',
      image: '/media/student-11.jpg',
      gradientColor: 'from-pink-400 to-rose-600'
    },
    {
      id: 12,
      name: 'Siddharth Bhat',
      exam: 'MHT-CET',
      year: '2022',
      rank: 'State Rank 112',
      score: '99.54%ile',
      college: 'PICT Pune',
      stream: 'Information Technology',
      image: '/media/student-12.jpg',
      gradientColor: 'from-teal-400 to-cyan-600'
    },
  ];

  const filteredResults = allResults.filter(result => {
    const examMatch = selectedExam === 'all' || result.exam === selectedExam;
    const yearMatch = selectedYear === 'all' || result.year === selectedYear;
    return examMatch && yearMatch;
  });

  const years = ['2024', '2023', '2022'];
  const exams = ['NEET', 'JEE', 'MHT-CET'];

  const stats = [
    { icon: '🎯', number: '500+', label: 'Top Rankers', color: 'from-blue-500 to-cyan-500' },
    { icon: '🏆', number: '95%', label: 'Success Rate', color: 'from-purple-500 to-pink-500' },
    { icon: '⭐', number: '100+', label: 'AIR Under 1000', color: 'from-orange-500 to-red-500' },
    { icon: '🎓', number: '50+', label: 'IIT/AIIMS Selections', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <>
      <Navbar onEnrollClick={handleEnrollClick} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Success Stories
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Celebrating the achievements of our brilliant students who cracked NEET, JEE & MHT-CET
              with flying colors. Their success is our pride!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl text-3xl mb-3 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-semibold">Filter by:</span>
            </div>

            {/* Exam Filter */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedExam('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedExam === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500'
                }`}
              >
                All Exams
              </motion.button>
              {exams.map((exam) => (
                <motion.button
                  key={exam}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedExam(exam)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedExam === exam
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {exam}
                </motion.button>
              ))}
            </div>

            {/* Year Filter */}
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedYear('all')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedYear === 'all'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
                }`}
              >
                All Years
              </motion.button>
              {years.map((year) => (
                <motion.button
                  key={year}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    selectedYear === year
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-orange-500'
                  }`}
                >
                  {year}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Showing <span className="font-bold text-blue-600">{filteredResults.length}</span> result{filteredResults.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResults.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Image with Gradient Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${result.gradientColor} opacity-90 group-hover:opacity-80 transition-opacity`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/50">
                          <span className="text-4xl">🎓</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{result.name}</h3>
                        <div className="bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full inline-block">
                          <span className="font-semibold">{result.exam} {result.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Rank</span>
                        <span className="font-bold text-lg text-gray-900">{result.rank}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Score</span>
                        <span className="font-bold text-lg text-green-600">{result.score}</span>
                      </div>
                      <div className="border-t pt-3">
                        <p className="text-sm text-gray-600 mb-1">College</p>
                        <p className="font-semibold text-gray-900">{result.college}</p>
                        <p className="text-sm text-blue-600">{result.stream}</p>
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`bg-gradient-to-r ${result.gradientColor} px-4 py-3 text-center`}>
                    <span className="text-white font-bold text-sm">✨ Top Ranker</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Be The Next Success Story!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join Utkarsh Education and achieve your dream rank in NEET, JEE or MHT-CET.
              Expert guidance, proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleEnrollClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all"
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
      />
    </>
  );
}
