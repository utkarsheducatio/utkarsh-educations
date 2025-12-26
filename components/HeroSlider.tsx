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

  // Fetch signed URLs from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/s3-images');
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          setS3Images(data.images);
        }
      } catch (error) {
        console.error('Error fetching S3 images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Single S3 Image - Clean, no overlay, no text */}
      {!isLoading && s3Images.length > 0 && (
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
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )}
    </div>
  );
}
