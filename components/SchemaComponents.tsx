import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
  baseUrl: string;
}

export function BreadcrumbSchema({ items, baseUrl }: BreadcrumbSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}

interface CourseSchemaProps {
  courseName: string;
  courseType: string;
  description: string;
  provider: string;
  baseUrl: string;
  courseUrl: string;
  price?: string;
  duration?: string;
  level?: string;
}

export function CourseSchema({
  courseName,
  courseType,
  description,
  provider,
  baseUrl,
  courseUrl,
  price,
  duration,
  level,
}: CourseSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: baseUrl,
      sameAs: [
        'https://www.facebook.com/utkarsheducation',
        'https://www.instagram.com/utkarsheducation',
      ],
    },
    url: courseUrl,
    ...(duration && { duration }),
    ...(price && { offers: { '@type': 'Offer', price, priceCurrency: 'INR' } }),
    ...(level && { educationLevel: level }),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}

interface ReviewSchemaProps {
  courseTitle: string;
  rating: number;
  reviewCount: number;
  description: string;
}

export function ReviewSchema({ courseTitle, rating, reviewCount, description }: ReviewSchemaProps) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: courseTitle,
    description: description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      ratingCount: reviewCount.toString(),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
