'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from './data';
import { ProjectCard } from '@/components/projects/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 text-lg">
          A collection of my UX design and development projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 