import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://utkarsh-educations-icop.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/results', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  // Course pages
  const coursePages = [
    // NEET Courses
    { url: '/courses/neet-11', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/neet-12', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/neet-dropper', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/neet-test-series', priority: 0.85, changeFrequency: 'weekly' as const },
    // JEE Courses
    { url: '/courses/jee-11', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/jee-12', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/jee-dropper', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/jee-advanced', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/courses/jee-test-series', priority: 0.85, changeFrequency: 'weekly' as const },
    // MHT-CET Courses
    { url: '/courses/mht-cet-11', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/mht-cet-12', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/mht-cet-dropper', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/courses/mht-cet-test-series', priority: 0.85, changeFrequency: 'weekly' as const },
  ];

  return [
    ...staticPages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...coursePages.map(page => ({
      url: `${baseUrl}${page.url}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ];
}
