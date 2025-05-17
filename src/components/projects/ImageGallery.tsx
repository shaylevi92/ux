'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loading, setLoading] = useState<boolean[]>(new Array(images.length).fill(true));

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
      case 'ArrowRight':
        showNext();
        break;
      case 'ArrowLeft':
        showPrev();
        break;
      case 'Escape':
        setIsLightboxOpen(false);
        break;
    }
  }, [isLightboxOpen, showNext, showPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleImageLoad = (index: number) => {
    setLoading(prev => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        role="grid"
        aria-label="Image gallery"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => {
              setCurrentIndex(index);
              setIsLightboxOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setCurrentIndex(index);
                setIsLightboxOpen(true);
              }
            }}
            role="gridcell"
            tabIndex={0}
            aria-label={`Open ${image.alt} in lightbox`}
          >
            {loading[index] && (
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700 animate-pulse" />
            )}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-transform duration-300 hover:scale-110 ${
                loading[index] ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              onLoad={() => handleImageLoad(index)}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-label="Image lightbox"
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              {...handlers}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white
                         bg-black/20 rounded-full backdrop-blur-sm transition-colors"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                className="absolute left-4 p-2 text-white/80 hover:text-white
                         bg-black/20 rounded-full backdrop-blur-sm transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-4 p-2 text-white/80 hover:text-white
                         bg-black/20 rounded-full backdrop-blur-sm transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Current Image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4"
              >
                {loading[currentIndex] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  </div>
                )}
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className={`object-contain ${loading[currentIndex] ? 'opacity-0' : 'opacity-100'}`}
                  sizes="100vw"
                  priority
                  onLoad={() => handleImageLoad(currentIndex)}
                />
              </motion.div>

              {/* Image Counter */}
              <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 
                            bg-black/20 rounded-full backdrop-blur-sm text-white/80"
                role="status"
                aria-live="polite"
              >
                Image {currentIndex + 1} of {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 