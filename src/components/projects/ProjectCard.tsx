'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Body, Caption, Heading } from '../typography/Text';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    category?: string;
    year?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      window.location.href = project.link;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="article"
      aria-label={`Project: ${project.title}`}
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      <Link href={project.link} className="block h-full" aria-label={`View ${project.title} project details`}>
        <article className="relative h-full overflow-hidden rounded-2xl bg-background dark:bg-gray-800 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <div className="animate-pulse w-full h-full bg-gray-200 dark:bg-gray-600" />
              </div>
            )}
            {imageError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <span className="text-gray-500">Image not available</span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={`${project.title} project thumbnail`}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  setImageError(true);
                }}
              />
            )}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="relative p-6">
            {/* Category & Year */}
            {(project.category || project.year) && (
              <div className="flex items-center gap-3 mb-3" aria-label="Project metadata">
                {project.category && (
                  <Caption className="text-primary/60">{project.category}</Caption>
                )}
                {project.year && (
                  <Caption className="text-primary/60">{project.year}</Caption>
                )}
              </div>
            )}

            {/* Title & Description */}
            <Heading level={3} className="mb-3 group-hover:text-accent-500">
              {project.title}
            </Heading>
            <Body className="mb-6 text-secondary line-clamp-3">
              {project.description}
            </Body>

            {/* Tags */}
            <div className="flex flex-wrap gap-2" role="list" aria-label="Project technologies">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  role="listitem"
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 
                           text-secondary transition-colors duration-200
                           group-hover:bg-accent-100 group-hover:text-accent-700
                           dark:group-hover:bg-accent-900 dark:group-hover:text-accent-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hover Overlay */}
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute bottom-0 left-0 right-0 p-6 pt-12
                         bg-gradient-to-t from-background/90 to-transparent
                         dark:from-gray-800/90 transform translate-y-1/2"
              aria-hidden="true"
            >
              <span className="inline-flex items-center text-accent-500 font-medium">
                View Project
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </motion.div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
} 