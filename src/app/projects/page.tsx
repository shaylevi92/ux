import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'ecommerce',
    title: 'E-commerce Redesign',
    client: 'Fashion Retailer',
    description: 'A complete overhaul of the e-commerce platform focusing on improving conversion rates and user engagement through intuitive navigation and streamlined checkout process.',
    image: '/projects/ecommerce.jpg',
    tags: ['UX Design', 'UI Design', 'User Research', 'Prototyping'],
    duration: '3 months',
    role: 'Lead UX Designer'
  },
  {
    id: 'healthcare',
    title: 'Healthcare App',
    client: 'Medical Center',
    description: 'Designed a patient-centered healthcare management application that simplifies appointment scheduling, medical record access, and communication with healthcare providers.',
    image: '/projects/healthcare.jpg',
    tags: ['Mobile Design', 'Healthcare UX', 'User Testing'],
    duration: '4 months',
    role: 'UX/UI Designer'
  },
  {
    id: 'finance',
    title: 'Financial Dashboard',
    client: 'Investment Firm',
    description: 'Created an intuitive dashboard for financial data visualization, making complex information accessible and actionable for users.',
    image: '/projects/finance.jpg',
    tags: ['Dashboard Design', 'Data Visualization', 'User Research'],
    duration: '2 months',
    role: 'UX Designer'
  },
  {
    id: 'social',
    title: 'Social Platform',
    client: 'Tech Startup',
    description: 'Developed the UX/UI for a new social platform focused on connecting professionals in creative industries.',
    image: '/projects/social.jpg',
    tags: ['Social Media', 'Interaction Design', 'Prototyping'],
    duration: '5 months',
    role: 'Senior UX Designer'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            A collection of my work showcasing user-centered design solutions across various industries
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {project.client}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="block mt-1 text-2xl font-semibold text-gray-900 hover:text-indigo-600"
                  >
                    {project.title}
                  </Link>
                  <p className="mt-4 text-gray-500">{project.description}</p>
                  
                  <div className="mt-4">
                    <div className="text-sm font-medium text-gray-500">Role</div>
                    <div className="text-base text-gray-900">{project.role}</div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-sm font-medium text-gray-500">Duration</div>
                    <div className="text-base text-gray-900">{project.duration}</div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 