import ProjectItem from '@/components/projectItem';

const projectIds = [
  'jamhacks',
  'faunadex',
  'cullergrader',
  'workflow',
  'quantum',
  'tmun',
  'goose',
  'miku',
];
const projectData = [
  [
    '🍇 JAMHacks',
    [
      'JAMHacks is the largest high-school hackathon in Canada, where over 250 high school students gather in Waterloo to build over the course of a full weekend.',
      "As a head organizer, I've worked closely in bringing JAMHacks to life, and building + deploying the website (why not give it a visit?).",
      'Sponsorship inquiries are always welcome at hello@jamhacks.ca ;)',
    ],
    ['Hackathon', 'University of Waterloo'],
    'https://jamhacks.ca',
    '🍇 Visit jamhacks.ca',
  ],
  [
    '🐻 FaunaDex',
    [
      'FaunaDex performs semantic species retrieval on animal photos by matching visual descriptions with a vector search. Instead of lengthy training on individual photos of each species, the database can be expanded simply by adding more embeddings.',
      "As of writing, FaunaDex supports 9,641 species, 366% more than Google SpeciesNet's 2,066. I've also published the animal datasets on HuggingFace, where it has a combined 100+ downloads.",
    ],
    ['Computer Vision', 'Vector Search'],
    'https://faunadex.andrewd.ai/',
    '🐻 View Demo',
  ],
  [
    '📸 Cullergrader',
    [
      'Cullergrader is an open-source personal project which uses a perceptual hash to efficiently group similar photos of the same subject.',
      'It was built to solve my own habit of struggling to sort through high volumes of photos.',
      'The project is available on GitHub for contributors and the photography community.',
    ],
    ['Open Source', 'Actively Maintained'],
    'https://github.com/PenguinPush/cullergrader',
    '📸 Open in Github',
  ],
  [
    '⚙️ Protosynthesis',
    [
      'Protosynthesis is an agent-powered system to build/test workflows and prototypes using visual drag-and-drop tiles to make API calls, logic actions, etc.',
      "Bundling Gemini with Moorcheh.ai's RAG system, it intelligently builds with an understanding of your project's goal and the tools available.",
    ],
    ['Moorcheh.ai RAG', 'Gemini Agent'],
    'https://devpost.com/software/protosynthesis',
    '⚙️ Open in Devpost',
  ],
  [
    '🔑 Quantum Key Distribution',
    [
      'Quantum Key Distribution is an encryption method used by governments around the world to securely transmit data by encoding it in the superposition of polarized light.',
      'This project recreates that system by rotating motorized half/quarter-waveplates and polarizers to send bits in a manner that destroys the data if intercepted.',
    ],
    ['Arduino', 'Quantum Mehcanics'],
    'https://youtu.be/hVg9TDSrWFY',
    '🔑 Watch My Demo',
  ],
  [
    '🌎 TMUN',
    [
      "Toronto Model United Nations (TMUN) is Canada's largest high-schooler-run Model UN conference, featuring 800+ students across delegates and staff.",
      'Along with building the website, I led staffing and academics at the conference, overseeing the development of 18 committees (and 670 pages worth of research guides).',
    ],
    ['7k+ visits/mo', 'Actively Maintained'],
    'https://tmun.ca',
    '🌎 Visit tmun.ca',
  ],
  [
    '🪿 Carl Friedrich Goose',
    [
      'Meet Carl Friedrich Goose, a robotic STEM tutor who can read and write diagrams, equations, and graphs on a virtual whiteboard!',
      'Powering his conversational voice agent with Vapi and Gemini, and bringing him to life with motors and speakers, Carl can easily handle university-level math, physics, and chemistry problems like a champ!',
    ],
    ['Hack the North', 'Vapi', 'Redis'],
    'https://devpost.com/software/carl-friedrich-goose',
    '🪿 Open in Devpost',
  ],
  [
    '🎸 Vivid Bedroom',
    [
      "My submission to Piapro's Hatsune Miku Magical Mirai 2024 Programming Contest -- Vivid Bedroom, was a joint project between myself and classmates to build a virtual world which brought the lyrics of music to life.",
      'To bring this project to life, I self-taught Blender and three.js, and translated Japanese-only documentation.',
    ],
    ['3D-Modelled', 'three.js', 'TextAlive'],
    'https://penguinpush.github.io/mikucontest-2024',
    '🎸 Visit Site',
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
            openMessage={projectData[index][4]}
            projectId={projectIds[index]}
          />
        ))}
      </div>
    </div>
  );
}
