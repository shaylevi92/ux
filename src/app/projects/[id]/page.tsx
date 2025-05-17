'use client';

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
    challenge: 'The existing platform had a high cart abandonment rate and users reported difficulty in finding products. The challenge was to create a more intuitive shopping experience while maintaining the brand\'s premium feel.',
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
    client: 'Healthcare Provider',
    description: 'אפליקציה לניהול בריאות המתמקדת בצרכי המטופל ומאפשרת גישה קלה למידע רפואי וניהול תורים.',
    challenge: 'מטופלים התקשו לנהל את המידע הרפואי שלהם ולתאם תורים. האתגר היה ליצור ממשק ידידותי שיאפשר גישה קלה למידע ושירותים רפואיים.',
    solution: 'פיתחנו ממשק משתמש פשוט ואינטואיטיבי עם דגש על נגישות. הוספנו תכונות כמו תזכורות אוטומטיות וצאט עם צוות רפואי.',
    outcome: 'האפליקציה הובילה לעלייה של 70% בשביעות רצון המטופלים וירידה של 30% בביטולי תורים.',
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
    description: 'דשבורד פיננסי המציג נתונים מורכבים בצורה פשוטה וברורה למשתמש.',
    challenge: 'משקיעים התקשו להבין ולנתח נתונים פיננסיים מורכבים. האתגר היה להפוך מידע מורכב לנגיש וקל להבנה.',
    solution: 'עיצבנו ממשק ויזואלי עם גרפים אינטראקטיביים ותצוגות מותאמות אישית. הוספנו כלי ניתוח וסינון מתקדמים.',
    outcome: 'הדשבורד החדש הוביל לעלייה של 50% בזמן השימוש ו-80% מהמשתמשים דיווחו על הבנה טובה יותר של הנתונים.',
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
  iplant: {
    title: 'iPlant',
    subtitle: 'Smart Nursery Plant Dashboard',
    description: 'Advanced IoT plant monitoring system for efficient plant care. Provides data on soil, sun, temp, and food levels with ease.',
    challenge: 'Create an intuitive interface that allows users to monitor and care for their plants easily, integrating real-time data from IoT devices.',
    solution: 'Developed a smart dashboard that displays data visually and clearly, with AI-powered alerts and care recommendations.',
    outcome: 'The system led to a 40% improvement in plant survival rates and 60% reduction in water usage.',
    image: '/projects/iplant.jpg',
    gallery: [
      '/projects/iplant-1.jpg',
      '/projects/iplant-2.jpg',
      '/projects/iplant-3.jpg'
    ],
    tags: ['Dashboard', 'Data visualization', 'AI Assistant', 'IoT'],
    duration: '4 months',
    role: 'Lead UX Designer',
    deliverables: [
      'User Research',
      'UX/UI Design',
      'Interactive Prototype',
      'Design System'
    ]
  },
  careery: {
    title: 'Careery',
    subtitle: 'Find Your Perfect Career Path',
    description: 'A mobile application for navigating and comparing between different career paths. Say goodbye to confusion, and hello to clarity.',
    challenge: 'Many struggle with career decisions due to lack of comprehensive and reliable information. The challenge was to create a platform that helps users make informed decisions.',
    solution: 'Developed an app that combines professional information, personal experiences, and job market data in an intuitive interface.',
    outcome: '85% of users reported increased confidence in their career choices.',
    image: '/projects/careery.jpg',
    gallery: [
      '/projects/careery-1.jpg',
      '/projects/careery-2.jpg',
      '/projects/careery-3.jpg'
    ],
    tags: ['Mobile app', 'Personal project', 'Research', 'Career Development'],
    duration: '3 months',
    role: 'UX Designer & Researcher',
    deliverables: [
      'User Research Report',
      'App Design',
      'Interactive Prototype',
      'User Testing Results'
    ]
  },
  eyetracking: {
    title: 'Eye Tracking Research',
    subtitle: 'Understanding Purchase Decisions',
    description: 'How do online shoppers choose their products? Comparing product ratings to the number of feedbacks just before making a purchase.',
    challenge: 'Understand how users make purchase decisions on e-commerce sites, particularly in relation to ratings and reviews.',
    solution: 'Conducted in-depth research using eye-tracking technology, analyzing user behavior during purchase decision-making.',
    outcome: 'Research led to valuable insights that were implemented in product interface redesign, resulting in a 25% increase in conversion rates.',
    image: '/projects/eyetracking.jpg',
    gallery: [
      '/projects/eyetracking-1.jpg',
      '/projects/eyetracking-2.jpg',
      '/projects/eyetracking-3.jpg'
    ],
    tags: ['User Research', 'E-commerce', 'Decision Making', 'Eye Tracking'],
    duration: '2 months',
    role: 'UX Researcher',
    deliverables: [
      'Research Report',
      'Eye Tracking Analysis',
      'Design Recommendations',
      'Presentation'
    ]
  },
  homemanager: {
    title: 'Home Manager IoT',
    subtitle: 'Smart Home Automation System',
    description: 'IoT project to control smart devices at my house. Integrating various smart home devices into a single, intuitive interface.',
    challenge: 'Create a unified system to control and monitor various smart home devices, making home automation accessible and user-friendly.',
    solution: 'Developed a centralized dashboard with custom automation rules and voice control integration.',
    outcome: 'Achieved seamless control of all home devices, resulting in improved energy efficiency and convenience.',
    image: '/projects/homemanager.jpg',
    gallery: [
      '/projects/homemanager-1.jpg',
      '/projects/homemanager-2.jpg',
      '/projects/homemanager-3.jpg'
    ],
    tags: ['IoT', 'Smart Home', 'Arduino', 'Automation'],
    duration: '6 months',
    role: 'IoT Developer & UX Designer',
    deliverables: [
      'System Architecture',
      'Interface Design',
      'Hardware Integration',
      'Mobile App'
    ]
  },
  happier: {
    title: 'Happier - Services',
    subtitle: 'Mental Health Support Platform',
    description: 'Final project for my bachelor degree in IT. A comprehensive platform for mental health services and support.',
    challenge: 'Design a platform that makes mental health services more accessible while maintaining privacy and providing personalized support.',
    solution: 'Created a secure platform connecting users with mental health professionals and resources.',
    outcome: 'Platform successfully launched with positive feedback from both users and healthcare providers.',
    image: '/projects/happier.jpg',
    gallery: [
      '/projects/happier-1.jpg',
      '/projects/happier-2.jpg',
      '/projects/happier-3.jpg'
    ],
    tags: ['Mental Health', 'Web Platform', 'Final Project', 'Healthcare'],
    duration: '4 months',
    role: 'Full Stack Developer',
    deliverables: [
      'Web Platform',
      'Mobile App',
      'Admin Dashboard',
      'API Documentation'
    ]
  },
  spacemadness: {
    title: 'Space Madness',
    subtitle: 'Interactive Space Management Game',
    description: 'Digital Project Management course project. An interactive space-themed game focusing on resource management.',
    challenge: 'Create an engaging educational game that teaches project management principles through space exploration scenarios.',
    solution: 'Developed an interactive game with resource management mechanics and project planning elements.',
    outcome: 'Successfully demonstrated project management concepts through gameplay, receiving high marks and positive student feedback.',
    image: '/projects/spacemadness.jpg',
    gallery: [
      '/projects/spacemadness-1.jpg',
      '/projects/spacemadness-2.jpg',
      '/projects/spacemadness-3.jpg'
    ],
    tags: ['Game Design', 'Project Management', 'Interactive', 'Education'],
    duration: '3 months',
    role: 'Game Designer & Developer',
    deliverables: [
      'Game Design Document',
      'Interactive Prototype',
      'Final Game Build',
      'User Testing Report'
    ]
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Project({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.div
          variants={fadeInUp}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Outcome</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative h-64 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Role</h4>
                  <p className="text-gray-900">{project.role}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Duration</h4>
                  <p className="text-gray-900">{project.duration}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Deliverables</h4>
                  <ul className="list-disc list-inside text-gray-900 space-y-1">
                    {project.deliverables.map(deliverable => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-block w-full text-center py-4 px-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              ← Back to Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 