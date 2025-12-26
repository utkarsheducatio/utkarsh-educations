import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://utkarsh-educations-icop.vercel.app';

const courseMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
  'neet-11': {
    title: 'NEET Class 11 Coaching in Akola | Utkarsh Education',
    description: 'Expert NEET Class 11 coaching classes in Akola with comprehensive biology, chemistry, and physics preparation. Join 500+ successful students with Utkarsh Education.',
    keywords: [
      'NEET Class 11 coaching in Akola',
      'NEET 11th standard classes Akola',
      'Biology chemistry physics coaching',
      'Medical entrance preparation Class 11',
      'Best NEET coaching Akola',
      'NEET 11 foundation course',
    ],
  },
  'neet-12': {
    title: 'NEET Class 12 Coaching in Akola | Advanced Preparation',
    description: 'Advanced NEET Class 12 preparation in Akola with 250+ mock tests, expert faculty, and personalized mentoring. Join Utkarsh Education for medical entrance success.',
    keywords: [
      'NEET Class 12 coaching Akola',
      'NEET 12th standard classes',
      'Medical entrance Class 12',
      'NEET preparation Akola',
      'Best medical coaching Akola',
      'NEET 12 advanced course',
    ],
  },
  'neet-dropper': {
    title: 'NEET Dropper Program in Akola | 1 Year Intensive Course',
    description: 'Comprehensive NEET dropper program in Akola with 1-year intensive preparation, 250+ mock tests, and expert guidance for repeat aspirants.',
    keywords: [
      'NEET dropper course Akola',
      'NEET repeat batch',
      'Medical entrance dropper',
      'NEET one year program',
      'Intensive NEET preparation',
      'NEET dropper coaching Akola',
    ],
  },
  'neet-test-series': {
    title: 'NEET Test Series 2024 | 250+ Mock Tests in Akola',
    description: 'Premium NEET test series with 250+ full-length mock tests, instant solutions, performance analytics, and rank comparison for medical entrance exam.',
    keywords: [
      'NEET mock tests online',
      'NEET test series 2024',
      'NEET practice tests',
      'Full-length NEET exams',
      'NEET previous year papers',
      'NEET test series Akola',
    ],
  },
  'jee-11': {
    title: 'JEE Class 11 Coaching in Akola | Engineering Foundation',
    description: 'Expert JEE Class 11 coaching in Akola with comprehensive mathematics, physics, and chemistry preparation. Build strong foundation for IIT entrance.',
    keywords: [
      'JEE Class 11 coaching Akola',
      'IIT foundation course',
      'JEE 11th standard classes',
      'Engineering entrance preparation',
      'Best JEE coaching Akola',
      'JEE main foundation',
    ],
  },
  'jee-12': {
    title: 'JEE Class 12 Coaching in Akola | Advanced JEE Preparation',
    description: 'Advanced JEE Class 12 preparation in Akola with 200+ mock tests, expert faculty, and proven success for IIT and engineering entrance exams.',
    keywords: [
      'JEE Class 12 coaching Akola',
      'JEE 12th standard classes',
      'JEE main preparation',
      'Engineering entrance Class 12',
      'Best IIT coaching Akola',
      'JEE advanced coaching',
    ],
  },
  'jee-dropper': {
    title: 'JEE Dropper Program in Akola | Focused IIT Preparation',
    description: 'Dedicated JEE dropper program in Akola for serious engineering aspirants. 1-year intensive course with expert guidance and 200+ mock tests.',
    keywords: [
      'JEE dropper course Akola',
      'JEE repeat batch',
      'Engineering entrance dropper',
      'JEE one year program',
      'Intensive JEE preparation',
      'JEE dropper coaching',
    ],
  },
  'jee-advanced': {
    title: 'JEE Advanced Elite Coaching in Akola | IIT Preparation',
    description: 'Elite JEE Advanced coaching for IIT preparation in Akola with advanced problem-solving, expert toppers guidance, and intensive training program.',
    keywords: [
      'JEE advanced coaching Akola',
      'IIT elite preparation',
      'JEE advanced course',
      'Advanced problem solving',
      'IIT entrance coaching',
      'JEE advanced mock tests',
    ],
  },
  'jee-test-series': {
    title: 'JEE Test Series 2024 | 315+ Mock Tests (Mains + Advanced)',
    description: 'Premium JEE test series with 315+ full-length mock tests covering Mains and Advanced, instant solutions, and detailed performance analysis.',
    keywords: [
      'JEE mock tests online',
      'JEE test series 2024',
      'JEE mains mock tests',
      'JEE advanced mock tests',
      'Full-length JEE exams',
      'JEE practice tests Akola',
    ],
  },
  'mht-cet-11': {
    title: 'MHT-CET Class 11 Coaching in Akola | Maharashtra Entrance',
    description: 'Expert MHT-CET Class 11 coaching in Akola for Maharashtra state entrance exam. Comprehensive preparation with foundation building.',
    keywords: [
      'MHT-CET Class 11 coaching Akola',
      'CET 11th standard classes',
      'Maharashtra state entrance',
      'Medical-engineering entrance',
      'CET foundation course',
      'Best CET coaching Akola',
    ],
  },
  'mht-cet-12': {
    title: 'MHT-CET Class 12 Coaching in Akola | Advanced CET Preparation',
    description: 'Comprehensive MHT-CET Class 12 preparation in Akola with 175+ mock tests and expert guidance for state entrance exam success.',
    keywords: [
      'MHT-CET Class 12 coaching Akola',
      'CET 12th standard preparation',
      'Maharashtra state entrance exam',
      'Medical entrance CET',
      'Engineering entrance CET',
      'Best CET coaching Akola',
    ],
  },
  'mht-cet-dropper': {
    title: 'MHT-CET Dropper Program in Akola | Focused Preparation',
    description: 'Intensive MHT-CET dropper program in Akola for repeat aspirants. 1-year focused course with 175+ mock tests and expert mentoring.',
    keywords: [
      'MHT-CET dropper course Akola',
      'CET repeat batch',
      'State entrance dropper',
      'CET one year program',
      'Intensive CET preparation',
      'MHT-CET dropper coaching',
    ],
  },
  'mht-cet-test-series': {
    title: 'MHT-CET Test Series 2024 | 175+ Mock Tests',
    description: 'Premium MHT-CET test series with 175+ full-length mock tests, instant solutions, and detailed analytics for Maharashtra state entrance exam.',
    keywords: [
      'MHT-CET mock tests online',
      'MHT-CET test series 2024',
      'CET practice tests',
      'Full-length CET exams',
      'CET previous year papers',
      'MHT-CET test series Akola',
    ],
  },
};

export function getCourseMetadata(courseSlug: string): Metadata {
  const course = courseMetadata[courseSlug];

  if (!course) {
    return {
      title: 'Coaching Classes | Utkarsh Education',
      description: 'Premium coaching for NEET, JEE, and MHT-CET entrance exams in Akola',
    };
  }

  const url = `${baseUrl}/courses/${courseSlug}`;

  return {
    title: course.title,
    description: course.description,
    keywords: course.keywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: course.title,
      description: course.description,
      siteName: 'Utkarsh Education',
      locale: 'en_IN',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      creator: '@utkarsheducation',
    },
  };
}
