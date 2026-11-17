import ProjectItem from '@/components/projectItem';
import projects from '@/data/projects.json';

export default function ProjectsPage({}) {
  return (
    <div className="p-2">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-x-6">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            demo={project.demo}
            openMessage={project.openMessage}
            projectId={project.id}
          />
        ))}
      </div>
    </div>
  );
}
