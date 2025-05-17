'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../data';
import { ImageGallery } from '@/components/projects/ImageGallery';

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

function isFullProject(project: Project): project is FullProject {
  return 'challenge' in project;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p: Project) => p.id === params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link href="/projects" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        {isFullProject(project) && project.subtitle && (
          <h2 className="text-2xl text-gray-600 mb-4">{project.subtitle}</h2>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
      >
        <div>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p className="text-gray-700">
              {isFullProject(project) ? project.description : project.fullDescription}
            </p>
          </div>

          {isFullProject(project) && (
            <>
              {project.client && (
                <div className="mb-4">
                  <h4 className="font-semibold">Client</h4>
                  <p className="text-gray-700">{project.client}</p>
                </div>
              )}
              {project.duration && (
                <div className="mb-4">
                  <h4 className="font-semibold">Duration</h4>
                  <p className="text-gray-700">{project.duration}</p>
                </div>
              )}
              {project.role && (
                <div className="mb-4">
                  <h4 className="font-semibold">Role</h4>
                  <p className="text-gray-700">{project.role}</p>
                </div>
              )}
            </>
          )}

          <div className="mb-4">
            <h4 className="font-semibold">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {isFullProject(project) && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.challenge && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-gray-700">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                  <p className="text-gray-700">{project.solution}</p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">The Outcome</h3>
                  <p className="text-gray-700">{project.outcome}</p>
                </div>
              )}
            </div>
          </motion.div>

          {project.deliverables && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4">Deliverables</h3>
              <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.deliverables.map((item) => (
                  <li key={item} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {project.gallery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6">Project Gallery</h3>
              <ImageGallery
                images={project.gallery.map((src) => ({
                  src,
                  alt: `${project.title} gallery image`
                }))}
              />
            </motion.div>
          )}
        </>
      )}
    </div>
  );
} 