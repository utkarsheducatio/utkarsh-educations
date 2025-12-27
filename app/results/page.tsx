'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import EnrollmentForm from '@/components/EnrollmentForm';

interface CMSResult {
  id: string;
  name: string;
  year: number;
  exam: string;
  rank: string;
  marks: string;
  percentile?: string;
  college: string;
  course: string;
  testimonial?: string;
  cardColor: string;
  featured: boolean;
  photo: {
    url: string;
    thumbnail?: string;
    card?: string;
  } | null;
}

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
  const [cmsResults, setCmsResults] = useState<CMSResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [useCMS, setUseCMS] = useState(false);

  const handleEnrollClick = () => {
    setIsEnrollmentOpen(true);
  };

  // Fetch results from CMS
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('/api/results');
        const data = await response.json();

        if (response.ok && data.results && data.results.length > 0) {
          setCmsResults(data.results);
          setUseCMS(true);
        }
      } catch (error) {
        console.error('Error fetching CMS results:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

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
    if (useCMS && cmsResults.length > 0) {
      return cmsResults.filter((result: CMSResult) => {
        const examMatch = selectedExam === 'all' || result.exam === selectedExam;
        const yearMatch = selectedYear === 'all' || result.year.toString() === selectedYear;
        return examMatch && yearMatch;
      });
    }
    return staticResults.filter((result: StaticResult) => {
      const examMatch = selectedExam === 'all' || result.exam === selectedExam;
      const yearMatch = selectedYear === 'all' || result.year === selectedYear;
      return examMatch && yearMatch;
    });
  };

  const filteredResults = getFilteredResults();

  const years = ['2025', '2024'];
  const exams = ['JEE'];

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
              {useCMS && cmsResults.length > 0 ? (
                // CMS Results
                (filteredResults as CMSResult[]).map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Image with Gradient Overlay or Photo */}
                    <div className="relative h-64 overflow-hidden">
                      {result.photo?.url ? (
                        <>
                          <Image
                            src={result.photo.card || result.photo.url}
                            alt={result.name}
                            fill
                            className="object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent`}></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-xl font-bold mb-1">{result.name}</h3>
                            <div className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block text-sm">
                              <span className="font-semibold">{result.exam} {result.year}</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className={`absolute inset-0 bg-gradient-to-br ${result.cardColor || 'from-blue-500 to-cyan-500'} opacity-90 group-hover:opacity-80 transition-opacity`}></div>
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
                        </>
                      )}
                    </div>

                    {/* Details */}
                    <div className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Rank</span>
                          <span className="font-bold text-lg text-gray-900">{result.rank}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Marks</span>
                          <span className="font-bold text-lg text-green-600">{result.marks}</span>
                        </div>
                        {result.percentile && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Percentile</span>
                            <span className="font-bold text-blue-600">{result.percentile}</span>
                          </div>
                        )}
                        <div className="border-t pt-3">
                          <p className="text-sm text-gray-600 mb-1">College</p>
                          <p className="font-semibold text-gray-900">{result.college}</p>
                          <p className="text-sm text-blue-600">{result.course}</p>
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className={`bg-gradient-to-r ${result.cardColor || 'from-blue-500 to-cyan-500'} px-4 py-3 text-center`}>
                      <span className="text-white font-bold text-sm">{result.featured ? '⭐ Featured Ranker' : '✨ Top Ranker'}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                // Static Fallback Results
                (filteredResults as StaticResult[]).map((result, index) => (
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
                ))
              )}
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
