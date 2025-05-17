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

export default function CareeryProject() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Mobile App Design
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Careery: Career Path Explorer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A mobile application that helps users navigate and compare different career paths,
            making career decisions more informed and less overwhelming.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative h-[60vh] rounded-xl overflow-hidden mb-24"
        >
          <Image
            src="/projects/careery-hero.jpg"
            alt="Careery App Overview"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Career decision-making is often overwhelming due to information overload and 
                lack of structured guidance. Many individuals struggle to understand the implications 
                of their career choices and the paths available to them.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Careery provides a personalized career exploration experience, combining data-driven 
                insights with user-friendly visualization tools. The app helps users understand 
                different career paths and make informed decisions about their professional future.
              </p>
            </div>
          </div>
        </motion.section>

        {/* User Research */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12">User Research</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Findings</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  78% of users feel overwhelmed by career choices
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  92% want better understanding of career progression
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  65% struggle to find reliable career information
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  83% desire personalized career recommendations
                </li>
              </ul>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/projects/careery-research.jpg"
                alt="User Research Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Design Process */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12">Design Process</h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/projects/careery-wireframes.jpg"
                  alt="Wireframes"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Wireframing & Prototyping</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The design process focused on creating an intuitive and engaging user experience:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Clear information hierarchy</li>
                  <li>Interactive career path visualization</li>
                  <li>Simplified comparison tools</li>
                  <li>Personalized recommendation system</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Career Path Visualization',
                description: 'Interactive maps showing possible career trajectories and progression paths.'
              },
              {
                title: 'Skill Analysis',
                description: 'Detailed breakdown of required skills and competencies for different roles.'
              },
              {
                title: 'Personalized Recommendations',
                description: 'AI-powered career suggestions based on user interests and skills.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Impact & Results</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  90%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  User satisfaction rate
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  75%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Reduction in decision-making time
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  50K+
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Active monthly users
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Next Project */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="text-center py-16 border-t border-gray-200 dark:border-gray-800"
        >
          <span className="text-gray-600 dark:text-gray-300">Next Project</span>
          <Link
            href="/projects/eye-tracking"
            className="block text-2xl font-bold mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
          >
            Eye Tracking Research
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 