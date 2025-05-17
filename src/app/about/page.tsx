'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const fadeInTransition = {
  duration: 0.6
};

const skills = [
  { name: 'UX Design', level: 'Expert' },
  { name: 'UI Design', level: 'Expert' },
  { name: 'User Research', level: 'Advanced' },
  { name: 'Prototyping', level: 'Expert' },
  { name: 'Design Systems', level: 'Advanced' },
  { name: 'Figma', level: 'Expert' },
  { name: 'Adobe XD', level: 'Advanced' },
  { name: 'Sketch', level: 'Advanced' }
];

const experiences = [
  {
    title: 'UX Designer',
    company: 'Freelance',
    period: '2022 - Present',
    description: 'Working with various clients to create user-centered digital experiences, focusing on web and mobile applications.'
  },
  {
    title: 'UX/UI Designer',
    company: 'Tech Startup',
    period: '2020 - 2022',
    description: 'Led the design of multiple products, conducted user research, and implemented design systems.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/about/profile.jpg"
                alt="Shay Levi"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6">About Me</h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Hey there! I'm Shay, a UX/UI enthusiast on a mission to sprinkle a little magic into the digital world. 
                Based in sunny Tel Aviv, I'm all about blending creativity with practicality to craft memorable user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Last year, I proudly graduated with honors from HIT College, where I pursued my bachelor's degree in learning technologies.
                I discovered the fascinating intersection between learning methodologies and user experience design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={fadeInTransition}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Beyond Design</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              When I'm not designing, you can find me exploring new hiking trails, 
              experimenting with new cooking recipes, or diving into a good book. 
              I'm always seeking opportunities to learn and grow both personally and professionally.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200">
              Download CV
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 