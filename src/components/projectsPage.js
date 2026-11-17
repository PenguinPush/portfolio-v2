import ProjectItem from '@/components/projectItem';
import projects from '@/data/projects.json';

export default function ProjectsPage({}) {
  return (
    <div className="p-2">
      <div className="flex flex-col space-y-2">
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
