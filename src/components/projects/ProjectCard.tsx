'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
} 