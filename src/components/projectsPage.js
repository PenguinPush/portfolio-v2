import Project from '@/components/project';

export default function ProjectsPage({ activeProject, setActiveProject, projectHashes, getImagePath }) {

  const projectData = [
    [
      'Cullergrader',
      'description',
      getImagePath('/images/projects/placeholder_1.png'),
      ['Java', 'Swing UI'],
    ],
    [
      'FaunaDex',
      'description',
      getImagePath('/images/projects/placeholder_2.png'),
      ['Python', 'Google Vision', 'OpenAI'],
    ],
    [
      'Physiotherapy Tool',
      'description',
      getImagePath('/images/projects/placeholder_3.png'),
      ['C++', 'Python', 'Arduino'],
    ],
    [
      'Vivid Bedroom',
      'description',
      getImagePath('/images/projects/placeholder_3.png'),
      ['HTML', 'three.js', 'TextAlive'],
    ],    [
      'Vivid Bedroom',
      'description',
      getImagePath('/images/projects/placeholder_3.png'),
      ['HTML', 'three.js', 'TextAlive'],
    ],    [
      'Vivid Bedroom',
      'description',
      getImagePath('/images/projects/placeholder_3.png'),
      ['HTML', 'three.js', 'TextAlive'],
    ],    [
      'Vivid Bedroom',
      'description',
      getImagePath('/images/projects/placeholder_3.png'),
      ['HTML', 'three.js', 'TextAlive'],
    ],
  ];

  return (
    <div className="p-2">
      <div className="space-y-2 flex flex-col">
        {projectData.map((value, index) => (
          <Project
            key={index}
            name={projectData[index][0]}
            description={projectData[index][1]}
            image={projectData[index][2]}
            techStack={projectData[index][3]}
            hash={projectHashes[index]}
            index={index}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        ))}
      </div>
    </div>
  );
}
