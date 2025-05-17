'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInTransition = {
  duration: 0.6
};

const projects = [
  {
    id: 'iplant',
    title: 'iPlant Smart Nursery',
    description: 'Advanced IoT plant monitoring system for efficient plant care. Provides data on soil, sun, temperature, and food levels with ease.',
    image: '/projects/iplant.jpg',
    tags: ['Dashboard', 'IoT', 'Data Visualization'],
    challenge: 'Creating an intuitive interface for monitoring multiple plant parameters while making the data easily digestible for users.',
    solution: 'Developed a clean dashboard layout with clear visual hierarchy and real-time data updates.',
    link: '/projects/iplant'
  },
  {
    id: 'careery',
    title: 'Careery',
    description: 'A mobile application for navigating and comparing between different career paths. Say goodbye to confusion, and hello to clarity.',
    image: '/projects/careery.jpg',
    tags: ['Mobile App', 'UX Research', 'Career'],
    challenge: 'Simplifying complex career decision-making process into an engaging mobile experience.',
    solution: 'Created an interactive career exploration tool with personalized recommendations.',
    link: '/projects/careery'
  },
  {
    id: 'eye-tracking',
    title: 'Eye Tracking Research',
    description: 'Research on purchase decisions using eye tracking technology. Understanding how users interact with e-commerce platforms.',
    image: '/projects/eye-tracking.jpg',
    tags: ['Research', 'E-commerce', 'Analytics'],
    challenge: 'Analyzing complex eye-tracking data to derive meaningful insights about user behavior.',
    solution: 'Developed a comprehensive research methodology and visualization system for eye-tracking data.',
    link: '/projects/eye-tracking'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work in UX design, showcasing my approach to solving complex design challenges.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Featured Project
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-semibold mb-2">The Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">The Solution</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium"
                >
                  View Case Study
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="text-center mt-24 py-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects and creative ideas.
            Let's work together to bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 