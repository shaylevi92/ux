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

export default function EyeTrackingProject() {
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
            Research Project
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Eye Tracking Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An in-depth study on how online shoppers make purchase decisions, analyzing the relationship
            between product ratings, reviews, and visual attention patterns.
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
            src="/projects/eye-tracking-hero.jpg"
            alt="Eye Tracking Study Overview"
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
          <h2 className="text-3xl font-bold mb-8">Research Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Research Question</h3>
              <p className="text-gray-600 dark:text-gray-300">
                How do online shoppers evaluate product information before making a purchase decision?
                Specifically, what is the relationship between visual attention patterns and the influence
                of product ratings versus number of reviews?
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Methodology</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Using eye-tracking technology, we studied 50 participants as they browsed and made
                purchase decisions on a simulated e-commerce platform. Data was collected on fixation
                points, duration, and scan paths.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Research Process */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12">Research Process</h2>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Study Setup</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The research was conducted in a controlled environment with:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Professional eye-tracking equipment</li>
                  <li>Customized e-commerce interface</li>
                  <li>Varied product presentations</li>
                  <li>Controlled testing conditions</li>
                </ul>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/projects/eye-tracking-setup.jpg"
                  alt="Research Setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/projects/eye-tracking-heatmap.jpg"
                  alt="Eye Tracking Heatmap"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Data Analysis</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our analysis focused on:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Heat map generation and analysis</li>
                  <li>Gaze plot visualization</li>
                  <li>Fixation pattern analysis</li>
                  <li>Statistical correlation studies</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Findings */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-12">Key Findings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Visual Attention',
                description: 'Users spent 60% more time examining product ratings compared to price information.'
              },
              {
                title: 'Decision Factors',
                description: 'Number of reviews had a stronger influence on purchase decisions than average rating.'
              },
              {
                title: 'Scanning Patterns',
                description: 'Users followed an F-shaped pattern when scanning product information pages.'
              }
            ].map((finding, index) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{finding.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{finding.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Research Impact</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  35%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Improvement in conversion rate after implementing findings
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  45%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Reduction in decision-making time
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  3
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Academic publications
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
            href="/projects/iplant"
            className="block text-2xl font-bold mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
          >
            iPlant Smart Nursery
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 