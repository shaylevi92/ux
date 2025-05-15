import { motion } from 'framer-motion';
import { LinkedinLogo, GithubLogo, DribbbleLogo, EnvelopeSimple } from 'phosphor-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: LinkedinLogo,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: GithubLogo,
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: DribbbleLogo,
    },
    {
      name: 'Email',
      href: 'mailto:contact@example.com',
      icon: EnvelopeSimple,
    },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" weight="bold" />
              </motion.a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} UX Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 