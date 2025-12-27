'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSliderProps {
  onEnrollClick?: (courseName?: string) => void;
}

const banners = [
  {
    key: 'banner-1',
    url: 'https://ik.imagekit.io/qujrbo6v2/01.jpg',
    alt: 'Utkarsh Education Banner 1'
  },
  {
    key: 'banner-2',
    url: 'https://ik.imagekit.io/qujrbo6v2/02..jpg',
    alt: 'Utkarsh Education Banner 2'
  },
];

export default function HeroSlider({ onEnrollClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        {banners.map((banner, index) => (
          <div
            key={banner.key}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={banner.url}
              alt={banner.alt}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="100vw"
              unoptimized
            />
          </div>
        ))}

        {banners.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
