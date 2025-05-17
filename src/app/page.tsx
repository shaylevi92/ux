'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInTransition = {
  duration: 0.6
};

const projects = [
  {
    title: 'iPlant Smart Nursery',
    description: 'Advanced IoT plant monitoring system for efficient plant care',
    image: '/projects/iplant.jpg',
    tags: ['Dashboard', 'IoT', 'Data Visualization'],
    link: '/projects/iplant'
  },
  {
    title: 'Careery',
    description: 'Mobile app for finding your perfect career path',
    image: '/projects/careery.jpg',
    tags: ['Mobile App', 'UX Research', 'Career'],
    link: '/projects/careery'
  },
  {
    title: 'Eye Tracking Research',
    description: 'Research on purchase decisions using eye tracking',
    image: '/projects/eye-tracking.jpg',
    tags: ['Research', 'E-commerce', 'Analytics'],
    link: '/projects/eye-tracking'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Crafting Digital Experiences<br />
              <span className="text-blue-600 dark:text-blue-400">That Matter</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              I design digital products combining a user-centered approach with solid product strategy,
              creating experiences that are both beautiful and functional.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300">
              A selection of my recent work in UX design and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={project.link}>
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Hi, I'm Shay</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                A UX designer based in Tel Aviv, passionate about creating intuitive and impactful digital experiences.
                I combine user research, strategic thinking, and creative design to solve complex problems.
              </p>
              <Link
                href="/about"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium"
              >
                Learn more about me →
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/about/profile.jpg"
                alt="Shay Levi"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
