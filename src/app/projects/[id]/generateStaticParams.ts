import { projects } from '../data';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  
  return {
    title: project ? `${project.title} | UX Portfolio` : 'Project | UX Portfolio',
    description: project?.description || 'UX Project Case Study',
  };
} 