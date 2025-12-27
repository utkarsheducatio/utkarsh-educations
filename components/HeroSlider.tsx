'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSliderProps {
  onEnrollClick?: (courseName?: string) => void;
}

interface Banner {
  id: string;
  title: string;
  altText: string;
  link?: string;
  image: {
    url: string;
    alt: string;
  } | null;
}

interface S3Image {
  key: string;
  url: string;
}

export default function HeroSlider({ onEnrollClick }: HeroSliderProps) {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [s3Images, setS3Images] = useState<S3Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch banners from CMS first, fallback to S3
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        // Try CMS banners first
        const cmsResponse = await fetch('/api/banners');
        const cmsData = await cmsResponse.json();

        if (cmsResponse.ok && cmsData.banners && cmsData.banners.length > 0) {
          setBanners(cmsData.banners);
          setError(null);
          setIsLoading(false);
          return;
        }

        // Fallback to S3 images
        const s3Response = await fetch('/api/s3-images');
        const s3Data = await s3Response.json();

        if (s3Response.ok && s3Data.images && s3Data.images.length > 0) {
          setS3Images(s3Data.images);
          setError(null);
        } else {
          setError('No banners found');
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        setError(errorMsg);
        console.error('Error fetching banners:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const totalSlides = banners.length > 0 ? banners.length : s3Images.length;
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length, s3Images.length]);

  const totalSlides = banners.length > 0 ? banners.length : s3Images.length;

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* CMS Banners */}
      {!isLoading && banners.length > 0 && (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {banner.link ? (
                <a href={banner.link} className="block w-full h-full">
                  {banner.image?.url && (
                    <Image
                      src={banner.image.url}
                      alt={banner.altText || banner.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="100vw"
                    />
                  )}
                </a>
              ) : (
                banner.image?.url && (
                  <Image
                    src={banner.image.url}
                    alt={banner.altText || banner.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                    sizes="100vw"
                  />
                )
              )}
            </div>
          ))}

          {/* Navigation Arrows */}
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

          {/* Dot Indicators */}
          {banners.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* S3 Images Fallback */}
      {!isLoading && banners.length === 0 && s3Images.length > 0 && !error && (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
          {s3Images.map((image, index) => (
            <div
              key={image.key}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image.url}
                alt={`Utkarsh Education Banner ${index + 1}`}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="100vw"
                unoptimized
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          {s3Images.length > 1 && (
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

          {/* Dot Indicators */}
          {s3Images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {s3Images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center">
          <div className="text-white text-xl sm:text-2xl animate-pulse">Loading Banners...</div>
        </div>
      )}

      {/* Error state */}
      {!isLoading && error && banners.length === 0 && s3Images.length === 0 && (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center flex-col gap-4 px-4">
          <div className="text-white text-xl sm:text-2xl text-center">
            ⚠️ Unable to Load Banners
          </div>
          <div className="text-white/80 text-sm text-center max-w-md">
            {error}
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Fallback when no images available */}
      {!isLoading && banners.length === 0 && s3Images.length === 0 && !error && (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center">
          <div className="text-white text-xl sm:text-2xl text-center px-4">
            Utkarsh Education - Leading Coaching Institute in Akola
          </div>
        </div>
      )}
    </div>
  );
}
