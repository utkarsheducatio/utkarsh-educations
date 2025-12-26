import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://utkarsh-educations-icop.vercel.app';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'course';
}

export function generateMetadata(seoData: SEOMetadata): Metadata {
  const url = seoData.url || baseUrl;
  const image = seoData.image || `${baseUrl}/og-image.jpg`;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords?.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: seoData.type === 'article' ? 'article' : 'website',
      url,
      title: seoData.title,
      description: seoData.description,
      siteName: 'Utkarsh Education',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: seoData.title,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      images: [image],
      creator: '@utkarsheducation',
    },
  };
}

export function generateCourseMeta(
  courseName: string,
  courseType: string,
  examType: string
): Metadata {
  const title = `${courseName} Coaching Classes in Akola | Utkarsh Education`;
  const description = `Join ${courseName} coaching at Utkarsh Education in Akola. Expert faculty, 200+ mock tests, personalized mentoring, and proven success for ${examType} entrance exam.`;
  const keywords = [
    `${courseName} in Akola`,
    `${examType} coaching in Akola`,
    `${courseType} classes Akola`,
    `${examType} preparation`,
    'Best coaching in Akola',
    'Entrance exam preparation',
  ];

  return generateMetadata({
    title,
    description,
    keywords,
    url: `${baseUrl}/courses/${courseType}`,
  });
}

export const coursePages = [
  // NEET Courses
  {
    path: 'neet-11',
    name: 'NEET Class 11',
    exam: 'NEET',
    description: 'Expert NEET Class 11 coaching with comprehensive curriculum, mock tests, and personalized mentoring',
  },
  {
    path: 'neet-12',
    name: 'NEET Class 12',
    exam: 'NEET',
    description: 'Advanced NEET Class 12 preparation with 250+ mock tests and expert guidance',
  },
  {
    path: 'neet-dropper',
    name: 'NEET Dropper',
    exam: 'NEET',
    description: 'Intensive 1-year NEET dropper program for serious medical aspirants',
  },
  {
    path: 'neet-test-series',
    name: 'NEET Test Series',
    exam: 'NEET',
    description: '250+ NEET mock tests with instant solutions and performance analytics',
  },
  // JEE Courses
  {
    path: 'jee-11',
    name: 'JEE Class 11',
    exam: 'JEE',
    description: 'Comprehensive JEE Class 11 coaching with expert faculty and structured curriculum',
  },
  {
    path: 'jee-12',
    name: 'JEE Class 12',
    exam: 'JEE',
    description: 'Advanced JEE Class 12 preparation with 200+ mock tests and detailed solutions',
  },
  {
    path: 'jee-dropper',
    name: 'JEE Dropper',
    exam: 'JEE',
    description: 'Dedicated JEE dropper program for focused IIT preparation',
  },
  {
    path: 'jee-advanced',
    name: 'JEE Advanced',
    exam: 'JEE',
    description: 'Elite IIT preparation program with advanced problem-solving and toppers guidance',
  },
  {
    path: 'jee-test-series',
    name: 'JEE Test Series',
    exam: 'JEE',
    description: '315+ JEE mock tests covering Mains and Advanced with detailed analysis',
  },
  // MHT-CET Courses
  {
    path: 'mht-cet-11',
    name: 'MHT-CET Class 11',
    exam: 'MHT-CET',
    description: 'Expert MHT-CET Class 11 coaching for Maharashtra state entrance exam',
  },
  {
    path: 'mht-cet-12',
    name: 'MHT-CET Class 12',
    exam: 'MHT-CET',
    description: 'Comprehensive MHT-CET Class 12 preparation with 175+ mock tests',
  },
  {
    path: 'mht-cet-dropper',
    name: 'MHT-CET Dropper',
    exam: 'MHT-CET',
    description: 'Intensive MHT-CET dropper program with focused preparation',
  },
  {
    path: 'mht-cet-test-series',
    name: 'MHT-CET Test Series',
    exam: 'MHT-CET',
    description: '175+ MHT-CET mock tests with instant solutions and progress tracking',
  },
];
