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

export default function IPlantProject() {
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
            UX Case Study
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            iPlant Smart Nursery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            An advanced IoT plant monitoring system that makes plant care effortless through intuitive data visualization and smart notifications.
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
            src="/projects/iplant-hero.jpg"
            alt="iPlant Dashboard Overview"
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
                Many plant enthusiasts struggle to maintain optimal growing conditions for their plants. 
                Traditional methods of plant care rely heavily on guesswork and manual monitoring, 
                leading to inconsistent results and plant health issues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                iPlant combines IoT sensors with an intuitive dashboard to provide real-time monitoring 
                of crucial plant health metrics. The system offers automated alerts and care recommendations 
                based on collected data.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Process */}
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
              <div>
                <h3 className="text-2xl font-semibold mb-4">Research & Discovery</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Through user interviews and market analysis, we identified key pain points in plant care:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Difficulty in maintaining consistent care routines</li>
                  <li>Lack of knowledge about optimal growing conditions</li>
                  <li>Uncertainty about when to water or feed plants</li>
                  <li>Challenge in monitoring multiple plants simultaneously</li>
                </ul>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/projects/iplant-research.jpg"
                  alt="Research Phase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/projects/iplant-wireframes.jpg"
                  alt="Wireframes"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Design & Prototyping</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  The design process focused on creating an intuitive interface that would:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Present complex data in an easily digestible format</li>
                  <li>Provide clear actionable insights</li>
                  <li>Support both novice and experienced users</li>
                  <li>Scale effectively for multiple plants</li>
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
                title: 'Real-time Monitoring',
                description: 'Continuous tracking of soil moisture, light levels, temperature, and nutrient content.'
              },
              {
                title: 'Smart Notifications',
                description: 'Timely alerts for watering, feeding, and environmental adjustments.'
              },
              {
                title: 'Data Analytics',
                description: 'Historical data analysis and growth pattern recognition for optimized care.'
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

        {/* Results & Impact */}
        <motion.section
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={fadeInTransition}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  85%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Improvement in plant health reported by users
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  60%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Reduction in water waste
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  92%
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  User satisfaction rate
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
            href="/projects/careery"
            className="block text-2xl font-bold mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
          >
            Careery - Career Path Explorer
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 