interface CoursesProps {
  onEnrollClick?: (courseName?: string) => void;
}

export default function Courses({ onEnrollClick }: CoursesProps) {
  const offerings = [
    {
      id: 1,
      name: "NEET",
      description: "Comprehensive medical entrance exam preparation with experienced faculty and proven results",
      icon: "🏥",
      features: ["Expert Faculty", "Regular Tests", "Study Material"]
    },
    {
      id: 2,
      name: "JEE",
      description: "Complete engineering entrance exam coaching for IIT, NIT & top colleges",
      icon: "⚙️",
      features: ["IIT Faculty", "Mock Tests", "Doubt Sessions"]
    },
    {
      id: 3,
      name: "MHT-CET",
      description: "Specialized coaching for Maharashtra entrance with focused approach",
      icon: "📚",
      features: ["State Board Focus", "100+ Tests", "Personal Attention"]
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-600">Expert coaching for NEET, JEE & MHT-CET entrance exams</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{course.description}</p>
              
              <ul className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onEnrollClick?.(course.name)}
                className="w-full text-primary-600 border border-primary-600 font-semibold py-2 rounded-lg hover:bg-primary-600 hover:text-white transition-colors mt-auto"
              >
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
