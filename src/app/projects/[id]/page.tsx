import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a CMS or API
const projects = {
  ecommerce: {
    title: 'E-commerce Redesign',
    client: 'Fashion Retailer',
    description: 'A complete overhaul of the e-commerce platform focusing on improving conversion rates and user engagement through intuitive navigation and streamlined checkout process.',
    challenge: 'The existing platform had a high cart abandonment rate and users reported difficulty in finding products. The challenge was to create a more intuitive shopping experience while maintaining the brand's premium feel.',
    solution: 'Through extensive user research and iterative design, we developed a new navigation structure and simplified the checkout process. We also implemented advanced filtering and search capabilities.',
    outcome: 'The redesign resulted in a 40% reduction in cart abandonment and a 25% increase in average order value. User satisfaction scores improved by 60%.',
    image: '/projects/ecommerce.jpg',
    gallery: [
      '/projects/ecommerce-1.jpg',
      '/projects/ecommerce-2.jpg',
      '/projects/ecommerce-3.jpg'
    ],
    tags: ['UX Design', 'UI Design', 'User Research', 'Prototyping'],
    duration: '3 months',
    role: 'Lead UX Designer',
    deliverables: [
      'User Research Report',
      'Wireframes',
      'Interactive Prototype',
      'Design System',
      'User Testing Results'
    ]
  },
  healthcare: {
    title: 'Healthcare App',
    client: 'Medical Center',
    description: 'Designed a patient-centered healthcare management application that simplifies appointment scheduling, medical record access, and communication with healthcare providers.',
    challenge: 'Patients struggled with managing their healthcare information and scheduling appointments. The goal was to create a unified platform that would make healthcare management more accessible.',
    solution: 'We developed a user-friendly mobile application with intuitive navigation and clear information hierarchy. The app includes features like appointment scheduling, medication reminders, and secure messaging.',
    outcome: 'Patient engagement increased by 45%, and appointment no-shows decreased by 30%. The app received a 4.8/5 rating on app stores.',
    image: '/projects/healthcare.jpg',
    gallery: [
      '/projects/healthcare-1.jpg',
      '/projects/healthcare-2.jpg',
      '/projects/healthcare-3.jpg'
    ],
    tags: ['Mobile Design', 'Healthcare UX', 'User Testing'],
    duration: '4 months',
    role: 'UX/UI Designer',
    deliverables: [
      'User Personas',
      'Journey Maps',
      'Mobile App Design',
      'Usability Test Reports'
    ]
  },
  finance: {
    title: 'Financial Dashboard',
    client: 'Investment Firm',
    description: 'Created an intuitive dashboard for financial data visualization, making complex information accessible and actionable for users.',
    challenge: 'The existing dashboard was overwhelming users with data and lacked clear hierarchical organization. The goal was to simplify the interface while maintaining all necessary functionality.',
    solution: 'We implemented a modular dashboard design with customizable widgets and clear data visualization. The new interface includes smart filtering and contextual information display.',
    outcome: 'Users reported 50% faster task completion times and a 70% increase in data comprehension. The new dashboard has been adopted by multiple departments.',
    image: '/projects/finance.jpg',
    gallery: [
      '/projects/finance-1.jpg',
      '/projects/finance-2.jpg',
      '/projects/finance-3.jpg'
    ],
    tags: ['Dashboard Design', 'Data Visualization', 'User Research'],
    duration: '2 months',
    role: 'UX Designer',
    deliverables: [
      'Dashboard Wireframes',
      'Interactive Prototype',
      'User Testing Report',
      'Implementation Guide'
    ]
  },
  // Add more projects as needed
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Project({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

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
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div className="relative h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Client</dt>
                  <dd className="mt-1 text-lg text-gray-900">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Role</dt>
                  <dd className="mt-1 text-lg text-gray-900">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Duration</dt>
                  <dd className="mt-1 text-lg text-gray-900">{project.duration}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Tags</dt>
                  <dd className="mt-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="space-y-16"
        >
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600">{project.challenge}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Solution</h2>
            <p className="text-lg text-gray-600">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Outcome</h2>
            <p className="text-lg text-gray-600">{project.outcome}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Deliverables</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.deliverables.map((deliverable) => (
                <li
                  key={deliverable}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <p className="text-lg text-gray-900">{deliverable}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Project Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-64">
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Next Project */}
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 