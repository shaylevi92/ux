'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'iplant',
    title: 'iPlant',
    description: 'Advanced IoT plant monitoring system for efficient plant care. Provides data on soil, sun, temp, and food levels with ease.',
    image: '/projects/iplant.jpg',
    tags: ['Dashboard', 'Data visualization', 'AI Assistant', 'IoT']
  },
  {
    id: 'careery',
    title: 'Careery',
    description: 'A mobile application for navigating and comparing between different career paths. Say goodbye to confusion, and hello to clarity.',
    image: '/projects/careery.jpg',
    tags: ['Mobile app', 'Personal project', 'Research', 'Career Development']
  },
  {
    id: 'eyetracking',
    title: 'Eye Tracking Research',
    description: 'How do online shoppers choose their products? Comparing product ratings to the number of feedbacks just before making a purchase.',
    image: '/projects/eyetracking.jpg',
    tags: ['User Research', 'E-commerce', 'Decision Making', 'Eye Tracking']
  },
  {
    id: 'homemanager',
    title: 'Home Manager IoT',
    description: 'IoT project to control smart devices at my house. Integrating various smart home devices into a single, intuitive interface.',
    image: '/projects/homemanager.jpg',
    tags: ['IoT', 'Smart Home', 'Arduino', 'Automation']
  },
  {
    id: 'happier',
    title: 'Happier - Services',
    description: 'Final project for my bachelor degree in IT. A comprehensive platform for mental health services and support.',
    image: '/projects/happier.jpg',
    tags: ['Mental Health', 'Web Platform', 'Final Project', 'Healthcare']
  },
  {
    id: 'spacemadness',
    title: 'Space Madness',
    description: 'Digital Project Management course project. An interactive space-themed game focusing on resource management.',
    image: '/projects/spacemadness.jpg',
    tags: ['Game Design', 'Project Management', 'Interactive', 'Education']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work in UX design and research
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]">
                    <div className="relative h-72">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 