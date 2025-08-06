import ProjectItem from '@/components/projectItem';

const projectIds = [
  'cullergrader',
  'faunadex',
  'physiotherapy',
  'pickle',
  'miku',
  'tabletablet',
  'dylanai',
];

const projectData = [
  [
    '📸 Cullergrader',
    'Cullergrader uses a perceptual hashing algorithm to group photos by visual similarity to sort through images rapidly. ' +
      'As a photographer with the habit of taking the same shot many times, selecting my best takes is often a time consuming process (especially with thousands of photos!). ' +
      'Unable to find a suitable tool, I built Cullergrader to solve this problem, saving me hours at a time going through photos. ' +
      'Cullergrader is now available on Github as an open-source project, which I plan to actively maintain and accept contributions for to improve it as a tool for the photography community.',
    '/images/projects/cullergrader.png',
    ['Java', 'Swing UI', 'Actively Maintained'],
    'https://github.com/PenguinPush/cullergrader',
    'https://github.com/PenguinPush/cullergrader',
    '📸 Open in Github',
  ],
  [
    '🐻 FaunaDex',
    'Description under construction!',
    '/images/projects/faunadex.png',
    ['NumPy', 'GCP', 'OpenAI', 'React'],
    'https://github.com/PenguinPush/faunadex',
    'https://github.com/PenguinPush/faunadex',
    '🐻 Open in Github',
  ],
  [
    '💪 Physiotherapy Tool',
    'Description under construction!',
    '/images/projects/physiotherapy.png',
    ['C++', 'Python', 'Arduino'],
    'https://github.com/iantang08/UTRAHacks2025',
    'https://github.com/iantang08/UTRAHacks2025',
    '💪 Open in Github',
  ],
  [
    '🗼 Pickle',
    'Description under construction!',
    '/images/projects/pickle.png',
    ['Flask', 'Twilio', 'MongoDB', 'Cohere'],
    'https://github.com/PenguinPush/deltahacks-xi',
    'https://github.com/PenguinPush/deltahacks-xi',
    '🗼 Open in Github',
  ],
  [
    '🎸 Vivid Bedroom (DEMO)',
    'Description under construction!',
    '/images/projects/miku.png',
    ['HTML', 'three.js', 'TextAlive'],
    'https://penguinpush.github.io/mikucontest-2024',
    'https://github.com/PenguinPush/mikucontest-2024',
    '🎸 Open Demo Site',
  ],
  [
    '👉 TableTablet',
    'Description under construction!',
    '/images/projects/tabletablet.png',
    ['Python', 'MediaPipe', 'OpenCV'],
    'https://github.com/PenguinPush/cullergrader',
    'https://github.com/PenguinPush/cullergrader',
    '👉 Open in Github',
  ],
  [
    '🤖 DYLAN.AI',
    'Description under construction!',

    '/images/projects/placeholder.png',
    ['OpenAI', 'Cohere', 'GCP'],
    'https://github.com/PenguinPush/DylanAI',
    'https://github.com/PenguinPush/DylanAI',
    '🤖 Open in Github',
  ],
];

export default function ProjectsPage({}) {
  return (
    <div className="p-2">
      <div className="flex flex-col space-y-2">
        {projectData.map((value, index) => (
          <ProjectItem
            key={index}
            name={projectData[index][0]}
            description={projectData[index][1]}
            image={projectData[index][2]}
            techStack={projectData[index][3]}
            demo={projectData[index][4]}
            repo={projectData[index][5]}
            openMessage={projectData[index][6]}
            projectId={projectIds[index]}
          />
        ))}
      </div>
    </div>
  );
}
