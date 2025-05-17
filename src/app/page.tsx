'use client';

import { AnimatedSection } from '@/components/AnimatedSection';
import { Grid, GridItem } from '@/components/layout/Grid';
import { Heading, Body, Caption } from '@/components/typography/Text';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'iPlant',
    description: 'Advanced IoT plant monitoring system for efficient plant care. Provides data on soil, sun, temp, and food levels with ease.',
    image: '/projects/iplant.jpg',
    tags: ['Dashboard', 'Data visualization', 'AI Assistant'],
    link: '/projects/iplant'
  },
  {
    title: 'Careery',
    description: 'A mobile application for navigating and comparing between different career paths. Say goodbye to confusion, and hello to clarity.',
    image: '/projects/careery.jpg',
    tags: ['Mobile app', 'Personal project', 'Research'],
    link: '/projects/careery'
  },
  {
    title: 'Eye Tracking Research',
    description: 'How do online shoppers choose their products? Comparing product ratings to the number of feedbacks just before making a purchase.',
    image: '/projects/eyetracking.jpg',
    tags: ['User Research', 'E-commerce', 'Decision Making'],
    link: '/projects/eyetracking'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="container-custom section">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-3xl mx-auto"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/profile.jpg"
                alt="Shay Levi"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <Heading level={1}>
              Hi, I'm Shay
            </Heading>
            <Heading level={2} weight="semibold" className="text-secondary">
              UX Designer
            </Heading>
            <Body size="xl" className="text-secondary max-w-2xl mx-auto">
              I design digital products that combine user-centered approach with solid product strategy.
            </Body>
            <div className="flex items-center justify-center gap-6 mt-8">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/cv" className="btn-secondary">
                Download CV
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="container-custom section">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Heading level={2} className="mb-4">
              Selected Projects
            </Heading>
            <Body size="xl" className="text-secondary max-w-2xl mx-auto">
              A selection of my recent work in UX design and research
            </Body>
          </AnimatedSection>

          <Grid cols={3} gap="2rem" animate>
            {projects.map((project, index) => (
              <GridItem key={project.title}>
                <Link href={project.link} className="block group">
                  <article className="card overflow-hidden h-full">
                    <div className="relative h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300" />
                    </div>
                    <div className="p-8">
                      <Heading level={3} className="mb-3">
                        {project.title}
                      </Heading>
                      <Body className="mb-6 line-clamp-3">
                        {project.description}
                      </Body>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Caption
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-secondary rounded-full"
                          >
                            {tag}
                          </Caption>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-background">
        <div className="container-custom section text-center">
          <AnimatedSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Heading level={2} className="mb-4">
              Have a project in mind?
            </Heading>
            <Body size="xl" className="mb-8 text-background/80">
              Let's talk about your next project and make it a reality
            </Body>
            <Link href="/contact" className="btn-primary bg-background text-primary hover:bg-gray-100">
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
