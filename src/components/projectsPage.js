import ProjectItem from '@/components/projectItem';

const projectIds = [
  'jamhacks',
  'cullergrader',
  'workflow',
  'tmun',
  'miku',
  'faunadex',
  'goose',
];

const projectData = [
  [
    '🍇 JAMHacks',
    "JAMHacks is Canada's largest high school hackathon, ",
    ['Hackathon', 'University of Waterloo'],
    'https://jamhacks.ca',
    '🍇 Visit jamhacks.ca',
  ],
  [
    '📸 Cullergrader',
    'Cullergrader uses a perceptual hashing algorithm to group photos by visual similarity to sort through images rapidly. ' +
      'As a photographer with the habit of taking the same shot many times, selecting my best takes is often a time consuming process (especially with thousands of photos!). ' +
      'Unable to find a suitable tool, I built Cullergrader to solve this problem, saving me hours at a time going through photos. ' +
      'Cullergrader is now available on Github as an open-source project, which I plan to actively maintain and accept contributions for to improve it as a tool for the photography community.',
    ['Open Source', 'Actively Maintained'],
    'https://github.com/PenguinPush/cullergrader',
    '📸 Open in Github',
  ],
  [
    '⚙️ Protosynthesis',
    'Description under construction!',
    ['Moorcheh.ai RAG', 'Gemini Agent'],
    'https://devpost.com/software/protosynthesis',
    '⚙️ Open in Devpost',
  ],
  [
    '🇺🇳 Toronto Model United Nations',
    'Cullergrader uses a perceptual hashing algorithm to group photos by visual similarity to sort through images rapidly. ' +
      'As a photographer with the habit of taking the same shot many times, selecting my best takes is often a time consuming process (especially with thousands of photos!). ' +
      'Unable to find a suitable tool, I built Cullergrader to solve this problem, saving me hours at a time going through photos. ' +
      'Cullergrader is now available on Github as an open-source project, which I plan to actively maintain and accept contributions for to improve it as a tool for the photography community.',
    ['7k+ visits/mo', 'Actively Maintained'],
    'https://tmun.ca',
    '📸 Visit TMUN Site',
  ],
  [
    '🎸 Vivid Bedroom',
    'Description udner construction!',
    ['HTML', 'three.js', 'TextAlive'],
    'https://penguinpush.github.io/mikucontest-2024',
    '🎸 Visit Site',
  ],
  [
    '🐻 FaunaDex',
    'Description under construction!',
    ['NumPy', 'Google Cloud Platform', 'OpenAI'],
    'https://github.com/PenguinPush/faunadex',
    '🐻 Open in Github',
  ],
  [
    '🪿 Carl Friedrich Goose',
    'Description under construction!',
    ['Hack the North', 'Redis', 'LaTeX'],
    'https://devpost.com/software/carl-friedrich-goose',
    '🪿 Open in Devpost',
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
            techStack={projectData[index][2]}
            demo={projectData[index][3]}
            repo={projectData[index][4]}
            openMessage={projectData[index][5]}
            projectId={projectIds[index]}
          />
        ))}
      </div>
    </div>
  );
}
