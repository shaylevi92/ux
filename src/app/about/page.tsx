import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  { category: 'Design', items: ['User Interface Design', 'User Experience Design', 'Interaction Design', 'Wireframing', 'Prototyping'] },
  { category: 'Research', items: ['User Research', 'Usability Testing', 'A/B Testing', 'Analytics', 'Heuristic Evaluation'] },
  { category: 'Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'] },
  { category: 'Additional', items: ['Design Systems', 'Agile Methodology', 'Project Management', 'Team Leadership', 'Client Communication'] }
];

const experiences = [
  {
    company: 'Design Studio X',
    role: 'Senior UX Designer',
    period: '2021 - Present',
    description: 'Leading UX design initiatives for enterprise clients, managing design teams, and establishing design systems.'
  },
  {
    company: 'Tech Innovators',
    role: 'UX/UI Designer',
    period: '2019 - 2021',
    description: 'Designed user-centered solutions for mobile and web applications, conducted user research and usability testing.'
  },
  {
    company: 'Creative Agency',
    role: 'UI Designer',
    period: '2017 - 2019',
    description: 'Created visually appealing and functional interfaces for various digital products and platforms.'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Passionate UX designer with 5+ years of experience creating intuitive and impactful digital experiences
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
            <div className="relative h-96 lg:h-auto">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hello, I'm [Your Name]
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a UX designer focused on creating digital products that are both beautiful and functional. With over 5 years of experience in the field, I've had the opportunity to work with various clients across different industries, helping them achieve their business goals through user-centered design.
              </p>
              <p className="text-gray-600">
                My approach combines strategic thinking with creative problem-solving, ensuring that every design decision is backed by user research and business objectives. I'm passionate about creating experiences that not only look great but also make a real difference in people's lives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-600">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 