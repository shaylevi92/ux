interface BaseProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface FullProject extends BaseProject {
  subtitle?: string;
  client?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  gallery?: string[];
  duration?: string;
  role?: string;
  deliverables?: string[];
}

interface SimpleProject extends BaseProject {
  fullDescription: string;
}

type Project = FullProject | SimpleProject;

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: "E-commerce Redesign",
    client: "Fashion Retailer",
    description: "A complete overhaul of the e-commerce platform focusing on improving conversion rates and user engagement through intuitive navigation and streamlined checkout process.",
    challenge: "The existing platform had a high cart abandonment rate and users reported difficulty in finding products. The challenge was to create a more intuitive shopping experience while maintaining the brand's premium feel.",
    solution: "Through extensive user research and iterative design, we developed a new navigation structure and simplified the checkout process. We also implemented advanced filtering and search capabilities.",
    outcome: "The redesign resulted in a 40% reduction in cart abandonment and a 25% increase in average order value. User satisfaction scores improved by 60%.",
    image: "/projects/ecommerce.jpg",
    gallery: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg"
    ],
    tags: ["UX Design", "UI Design", "User Research", "Prototyping"],
    duration: "3 months",
    role: "Lead UX Designer",
    deliverables: [
      "User Research Report",
      "Wireframes",
      "Interactive Prototype",
      "Design System",
      "User Testing Results"
    ]
  },
  {
    id: 'healthcare',
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
  {
    id: 'finance',
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
  {
    id: 'iplant',
    title: 'iPlant Smart Nursery',
    description: 'Advanced IoT plant monitoring system for efficient plant care',
    fullDescription: 'An advanced IoT plant monitoring system that makes plant care effortless through intuitive data visualization and smart notifications.',
    image: '/projects/iplant.jpg',
    tags: ['Dashboard', 'IoT', 'Data Visualization'],
  },
  {
    id: 'careery',
    title: 'Careery',
    description: 'Mobile app for finding your perfect career path',
    fullDescription: 'A mobile application that helps users navigate and compare different career paths, making career decisions more informed and less overwhelming.',
    image: '/projects/careery.jpg',
    tags: ['Mobile App', 'UX Research', 'Career'],
  },
  {
    id: 'eye-tracking',
    title: 'Eye Tracking Research',
    description: 'Research on purchase decisions using eye tracking',
    fullDescription: 'An in-depth study on how online shoppers make purchase decisions, analyzing the relationship between product ratings, reviews, and visual attention patterns.',
    image: '/projects/eye-tracking.jpg',
    tags: ['Research', 'E-commerce', 'Analytics'],
  },
  {
    id: 'homemanager',
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
  {
    id: 'happier',
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
  {
    id: 'spacemadness',
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
]; 