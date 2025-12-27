'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

interface StaticResult {
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

  // Static fallback data
  const staticResults: StaticResult[] = [
    // ========== JEE 2025 Toppers ==========
    {
      id: 1,
      name: 'Komal Bhopal',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '96.95%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Komal%20Bhopal.jpg',
      gradientColor: 'from-blue-400 to-indigo-600'
    },
    {
      id: 2,
      name: 'Sudarshan Jadhao',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '96.58%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Sudarshan%20Jadhao.jpg',
      gradientColor: 'from-blue-400 to-indigo-600'
    },
    {
      id: 3,
      name: 'Sayali Gadge',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '96.33%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Sayali%20Gadge.jpg',
      gradientColor: 'from-purple-400 to-pink-600'
    },
    {
      id: 4,
      name: 'Gajanan Jadhao',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '95.40%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Gajanan%20Jadhao.jpg',
      gradientColor: 'from-cyan-400 to-blue-600'
    },
    {
      id: 5,
      name: 'Vaishnavi Dhamankar',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '95.57%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Vaishnavi%20Dhamankar.jpg',
      gradientColor: 'from-green-400 to-emerald-600'
    },
    {
      id: 6,
      name: 'Karthik Borkar',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '95.05%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Kartik%20Borkar.jpg',
      gradientColor: 'from-orange-400 to-red-600'
    },
    {
      id: 7,
      name: 'Shreya Bhagalkar',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '91.35%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Shreya%20Bhagalkar.jpg',
      gradientColor: 'from-pink-400 to-rose-600'
    },
    {
      id: 8,
      name: 'Devshri Pathak',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '91.07%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Devshri%20Pathak.jpg',
      gradientColor: 'from-violet-400 to-purple-600'
    },
    {
      id: 9,
      name: 'Om Dhore',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '91.04%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Om%20Dhore.jpg',
      gradientColor: 'from-teal-400 to-cyan-600'
    },
    {
      id: 10,
      name: 'Pranav Bali',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '90.35%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Pranav%20Bali.jpg',
      gradientColor: 'from-indigo-400 to-blue-600'
    },
    {
      id: 11,
      name: 'Roshan Dandale',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '90.00%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Roshan%20Dandale.jpg',
      gradientColor: 'from-yellow-400 to-orange-600'
    },
    {
      id: 12,
      name: 'Piyush Agrawal',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '87.70%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Piyush%20Agrawal.jpg',
      gradientColor: 'from-rose-400 to-red-600'
    },
    {
      id: 13,
      name: 'Shrinath Ghuge',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '86.54%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Shrinath%20Ghuge.jpg',
      gradientColor: 'from-emerald-400 to-teal-600'
    },
    {
      id: 14,
      name: 'Nayan Kukde',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '85.00%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Nayan%20Kukde.jpg',
      gradientColor: 'from-blue-400 to-purple-600'
    },
    {
      id: 15,
      name: 'Arjun Korpe',
      exam: 'JEE',
      year: '2025',
      rank: 'Top Ranker',
      score: '84.49%ile',
      college: 'Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Arjun%20Korpe.jpg',
      gradientColor: 'from-cyan-400 to-indigo-600'
    },
    // ========== JEE 2024 Toppers ==========
    {
      id: 16,
      name: 'Suyash Joshi',
      exam: 'JEE',
      year: '2024',
      rank: 'Top Ranker',
      score: '99.57%ile',
      college: 'Top Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Suyash%20Joshi.jpg',
      gradientColor: 'from-yellow-400 to-orange-600'
    },
    {
      id: 17,
      name: 'Vedangi Pande',
      exam: 'JEE',
      year: '2024',
      rank: 'Top Ranker',
      score: '96.57%ile',
      college: 'Top Engineering College',
      stream: 'Engineering',
      image: 'https://ik.imagekit.io/qujrbo6v2/Vedangi%20Pande.jpg',
      gradientColor: 'from-pink-400 to-purple-600'
    },
  ];

  // Filter results based on selection
  const getFilteredResults = () => {
    return staticResults.filter((result: StaticResult) => {
      const examMatch = selectedExam === 'all' || result.exam === selectedExam;
      const yearMatch = selectedYear === 'all' || result.year === selectedYear;
      return examMatch && yearMatch;
    });
  };

  const filteredResults = getFilteredResults();

  const years = ['2025', '2024'];
  const exams = ['JEE'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar onEnrollClick={handleEnrollClick} />

      {/* Filters Section */}
      <section className="pt-24 pb-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 items-center justify-center">

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
      <section className="py-8 bg-white">
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
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Student Photo */}
                    <div className="relative h-72 bg-gray-50">
                      {result.image && result.image.startsWith('http') ? (
                        <Image
                          src={result.image}
                          alt={result.name}
                          fill
                          className="object-cover scale-110"
                          unoptimized
                        />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${result.gradientColor} flex items-center justify-center`}>
                          <span className="text-6xl">🎓</span>
                        </div>
                      )}
                    </div>

                    {/* Student Info */}
                    <div className="p-4 text-center border-t">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{result.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {result.exam}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {result.year}
                        </span>
                      </div>
                      <p className="text-green-600 font-bold text-lg">{result.score}</p>
                      <p className="text-gray-500 text-sm mt-1">{result.college}</p>
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
    </div>
  );
}
