import Project from '@/components/project';

export default function ProjectsPage({
  activeProject,
  setActiveProject,
  projectHashes,
  getImagePath,
}) {
  const projectData = [
    [
      '📸 Cullergrader',
      '',
      getImagePath('/images/projects/placeholder.png'),
      ['Java', 'Swing UI'],
      'https://github.com/PenguinPush/cullergrader',
      'https://github.com/PenguinPush/cullergrader',
    ],
    [
      '🐻 FaunaDex',
      '',
      getImagePath('/images/projects/placeholder.png'),
      ['NumPy', 'GCP', 'OpenAI', 'React'],
      'https://github.com/PenguinPush/faunadex',
      'https://github.com/PenguinPush/faunadex',
    ],
    [
      '💪 Physiotherapy Tool',
      '',
      getImagePath('/images/projects/physiotherapy.png'),
      ['C++', 'Python', 'Arduino'],
      'https://github.com/iantang08/UTRAHacks2025',
      'https://github.com/iantang08/UTRAHacks2025',
    ],
    [
      '🗼 Pickle',
      '',
      getImagePath('/images/projects/pickle.png'),
      ['Flask', 'Twilio', 'MongoDB', 'Cohere'],
      'https://github.com/PenguinPush/deltahacks-xi',
      'https://github.com/PenguinPush/deltahacks-xi',
    ],
    [
      '🎸 Vivid Bedroom',
      '',
      getImagePath('/images/projects/miku.png'),
      ['HTML', 'three.js', 'TextAlive'],
      'https://github.com/PenguinPush/mikucontest-2024',
      'https://github.com/PenguinPush/mikucontest-2024',
    ],
    [
      '👉 TableTablet',
      '',
      getImagePath('/images/projects/tabletablet.png'),
      ['Python', 'MediaPipe', 'OpenCV'],
      'https://github.com/PenguinPush/cullergrader',
      'https://github.com/PenguinPush/cullergrader',
    ],
    [
      '🤖 DYLAN.AI',
      '',
      getImagePath('/images/projects/placeholder.png'),
      ['OpenAI', 'Cohere', 'GCP'],
      'https://github.com/PenguinPush/DylanAI',
      'https://github.com/PenguinPush/DylanAI',
    ],
  ];

  return (
    <div className="p-2">
      <div className="flex flex-col space-y-2">
        {projectData.map((value, index) => (
          <Project
            key={index}
            name={projectData[index][0]}
            description={projectData[index][1]}
            image={projectData[index][2]}
            techStack={projectData[index][3]}
            demo={projectData[index][4]}
            repo={projectData[index][5]}
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
