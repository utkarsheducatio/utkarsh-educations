'use client';

interface QuickAdmissionProps {
  onEnrollClick?: (courseName?: string) => void;
}

export default function QuickAdmission({ onEnrollClick }: QuickAdmissionProps) {
  const courses = [
    {
      id: 1,
      badge: "Lakshya AIIMS",
      title: "Class 11th + 12th + NEET",
      description: "Comprehensive NEET preparation for aspiring medical students",
      icon: "🏥"
    },
    {
      id: 2,
      badge: "Target IIT | NIT | IIIT",
      title: "Class 11th + 12th + JEE",
      description: "Complete JEE preparation for top engineering colleges",
      icon: "⚙️"
    },
    {
      id: 3,
      badge: "Target MHT-CET",
      title: "Class 11th + 12th + MHT-CET",
      description: "Specialized coaching for Maharashtra entrance exam",
      icon: "🎯"
    },
    {
      id: 4,
      badge: "1 Year Rankers Batch",
      title: "For NEET | JEE Repeaters",
      description: "Intensive program for second-time aspirants",
      icon: "🏆"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Enrollment</h2>
          <p className="text-gray-600 text-lg">Choose your path to success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">{course.badge}</p>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                <button 
                  onClick={() => onEnrollClick?.(course.title)}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2.5 rounded-lg transition-colors mt-auto"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
