import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const featuredProjects = [
    {
      title: 'E-commerce Redesign',
      description: 'Complete UX overhaul of an e-commerce platform',
      image: '/projects/ecommerce.jpg',
      link: '/projects/ecommerce'
    },
    {
      title: 'Healthcare App',
      description: 'Patient-centered healthcare management application',
      image: '/projects/healthcare.jpg',
      link: '/projects/healthcare'
    },
    {
      title: 'Financial Dashboard',
      description: 'Complex data visualization made simple',
      image: '/projects/finance.jpg',
      link: '/projects/finance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="relative bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <motion.div variants={fadeInUp} className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Creating meaningful</span>
                  <span className="block text-indigo-600">digital experiences</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  UX Designer focused on creating intuitive and engaging digital solutions that solve real user problems.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/projects"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      View Projects
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Contact Me
                    </Link>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        variants={stagger}
        initial="initial"
        animate="animate"
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              A selection of my recent work in UX design and research
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={project.link}
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
