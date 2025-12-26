'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSliderProps {
  onEnrollClick?: (courseName?: string) => void;
}

interface S3Image {
  key: string;
  url: string;
}

export default function HeroSlider({ onEnrollClick }: HeroSliderProps) {
  const [s3Images, setS3Images] = useState<S3Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch signed URLs from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/s3-images');
        const data = await response.json();
        
        if (!response.ok) {
          setError(data.error || 'Failed to load images');
          console.error('API error:', data);
        } else if (data.images && data.images.length > 0) {
          setS3Images(data.images);
          setError(null);
        } else {
          setError('No images found');
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        setError(errorMsg);
        console.error('Error fetching S3 images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* S3 Image - Clean, no overlay, no text */}
      {!isLoading && s3Images.length > 0 && !error && (
        <div className="relative w-full h-[600px] md:h-[700px]">
          <Image
            src={s3Images[0].url}
            alt="Utkarsh Education Banner"
            fill
            className="object-contain"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
      )}

      {/* Loading state */}
      {isLoading && (
        <div className="w-full h-[600px] md:h-[700px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center">
          <div className="text-white text-2xl">Loading Images...</div>
        </div>
      )}

      {/* Error state */}
      {!isLoading && error && (
        <div className="w-full h-[600px] md:h-[700px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center flex-col gap-4">
          <div className="text-white text-2xl text-center px-4">
            ⚠️ Unable to Load Banner Images
          </div>
          <div className="text-white/80 text-sm text-center px-4 max-w-md">
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
      {!isLoading && s3Images.length === 0 && !error && (
        <div className="w-full h-[600px] md:h-[700px] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center">
          <div className="text-white text-2xl text-center px-4">
            Utkarsh Education - Leading Coaching Institute
          </div>
        </div>
      )}
    </div>
  );
}
