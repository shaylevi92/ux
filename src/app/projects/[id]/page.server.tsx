import { projects } from '../data';
import { Metadata } from 'next';
import ProjectPage from './ProjectPage';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projects.find((p) => p.id === params.id);
  return {
    title: project ? `${project.title} | UX Portfolio` : 'Project | UX Portfolio',
    description: project?.description,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectPage params={params} />;
} 