import ProjectItem from '@/components/projectItem';

const projectIds = [
  'jamhacks',
  'faunadex',
  'cullergrader',
  'protosynthesis',
  'quantum',
  'tmun',
  'goose',
  'nimbus',
  'flippingrobot',
  'miku',
  'goodminton',
  'pickle',
  'physiotherapy',
  'cyclone',
  'locallingo',
  'remote',
  'callmaout',
  'studyslap',
  'carbonsense',
  'tabletablet',
  'dylan',
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
      'Winner of the Edge AI Challenge at DeltaHacks 12.',
    ],
    ['DeltaHacks Winner', 'Moorcheh.ai RAG', 'Gemini Agent'],
    'https://devpost.com/software/protosynthesis',
    '⚙️ Open in Devpost',
  ],
  [
    '🔑 Quantum Key Distribution',
    [
      'Quantum Key Distribution is an encryption method used by governments around the world to securely transmit data by encoding it in the superposition of polarized light.',
      'This project recreates that system by rotating motorized half/quarter-waveplates and polarizers to send bits in a manner that destroys the data if intercepted.',
    ],
    ['Arduino', 'Quantum Mechanics'],
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
    '🚁 Nimbus',
    [
      'Nimbus turns simple sentences (and what you see) into precise drone actions. Say "Hey Nimbus, fly to the pillar in the distance" and it figures out what you mean, completely hands-free.',
      "Voice is transcribed with ElevenLabs and passed to a Freesolo fine-tuned LLM that outputs strict JSON drone actions, delegating to Gemini as a VLM whenever it needs to see a real-world reference point. By default, a local YOLOv8 model on the iPhone's neural engine keeps the drone following its operator.",
    ],
    ['Hack the 6ix', 'Swift', 'Gemini'],
    'https://devpost.com/software/nimbus-n9x04s',
    '🚁 Open in Devpost',
  ],
  [
    '🥞 Awesome Flipping Robot',
    [
      'A custom-built robotic arm that flips pancakes! Flipping a pancake turns out to be hard for a robot: it leaves the pan, tumbles for a third of a second, and the whole flip is decided in the few milliseconds where the pan changes direction.',
      "The two-joint arm is driven by an RL model trained on millions of MuJoCo physics simulations, run on Baseten's H100 training platform. Given only the pancake's bounding box, it decides when the pancake is ready and lands the flip.",
    ],
    ['Hack the North', 'MuJoCo', 'Baseten'],
    'https://devpost.com/software/awesome-flipping-robot',
    '🥞 Open in Devpost',
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
  [
    '🏸 Goodminton',
    [
      'Goodminton is object-permanent 3D computer vision for fast-moving small objects -- play badminton anywhere with an imaginary court and net (imaginary racket not included).',
      "Using iPhone LiDAR depth data, Roboflow's YOLOv8 models, camera extrinsics, and some 11th-grade physics, it tracks the shuttlecock's 3D position even when it can't be seen, while a Next.js frontend keeps score live over websockets.",
      'Winner of Best Use of Roboflow at Ignition Hacks v.6.',
    ],
    ['Ignition Hacks Winner', 'Roboflow', 'OpenCV'],
    'https://devpost.com/software/goodminton',
    '🏸 Open in Devpost',
  ],
  [
    '🥒 Pickle',
    [
      'Inspired by the Los Angeles wildfires, Pickle is an emergency response app that keeps you and your loved ones safe amidst disaster -- all without the shackles of an internet connection.',
      'By falling back on good old SMS through Twilio, Pickle shares your location and status only during emergencies, feeds anonymous data into a heatmap for disaster responders, and offers a Cohere-powered AI survival assistant over text.',
      'Winner of Build an AI Agent with Cohere at DeltaHacks XI.',
    ],
    ['DeltaHacks Winner', 'Twilio', 'Cohere'],
    'https://devpost.com/software/pickle-2sjc9y',
    '🥒 Open in Devpost',
  ],
  [
    '💪 The Exercists',
    [
      'The Exercists expels the laziness from our bodies -- think Typeracer for your muscles. Players race a real robot car forward by performing exercises, with bursts of speed rewarded for good form and consecutive reps.',
      'Joy-Cons track movement (and heart rate through the IR camera), an Arduino drives the car, and a backend built with Flask, MongoDB, Terraform, and Databricks powers leaderboards, stats, and personalized AI voice lines.',
      'Winner of Best AI Project with Databricks Open Source at UTRA Hacks 2025.',
    ],
    ['UTRA Hacks Winner', 'Arduino', 'Databricks'],
    'https://devpost.com/software/the-exercists',
    '💪 Open in Devpost',
  ],
  [
    '🌀 Cyclone',
    [
      'Cyclone is a free, privacy-first menstrual cycle platform -- no paywalls, and no data collected, with all cycle predictions powered by Wolfram and stored locally.',
      'It also features a Menstrual Map of locations offering free products to tackle period poverty, an AI chatbot for confidential advice, a product finder, and Cyclash, a Unity game that makes menstrual education fun.',
      'Winner of Best Education Hack at Ignition Hacks 2024.',
    ],
    ['Ignition Hacks Winner', 'Wolfram', 'Unity'],
    'https://devpost.com/software/cyclone-ze0j6t',
    '🌀 Open in Devpost',
  ],
  [
    '🗺️ Local Lingo',
    [
      'Local Lingo is an immersive daily RPG inspired by Stardew Valley that teaches you languages by talking to locals in a 3D rendition of the real world, built with Google and Cesium 3D map tiles.',
      'All dialogue is generated with GPT, so the story can go in infinite directions depending on your responses, alongside hand-drawn sprites, daily quests, and vocabulary minigames.',
      'Winner of Best Overall Project: Education at EurekaHACKS 2024.',
    ],
    ['EurekaHACKS Winner', 'Unity', 'OpenAI'],
    'https://devpost.com/software/sfsdafdgfds',
    '🗺️ Open in Devpost',
  ],
  [
    '🪄 Ordinary Remote Controller',
    [
      'An accessibility project that lets you experience navigating a smart home from a wheelchair, controlling lights, doors, windows, and appliances with a single gesture-based remote.',
      'Nintendo Joy-Con gyroscope and pointer data are processed by a Flask backend into gestures, which drive an interactive three.js 3D smart room alongside real Arduino hardware.',
    ],
    ['Hack The Ridge', 'three.js', 'Flask'],
    'https://devpost.com/software/house-remote-magic-wand-thing',
    '🪄 Open in Devpost',
  ],
  [
    '🤣 calLMAOut',
    [
      'A Chrome extension to catch you when you type LMAO with a straight face. Whenever you "laugh", it sends a photo of how you\'re actually reacting -- if you go too far, you might owe the chat an apology.',
      "A text model detects whether your message is supposed to express laughter, and a custom-trained CV model checks whether or not you're actually laughing.",
    ],
    ['Stupid Ideas Hackathon', 'Computer Vision'],
    'https://devpost.com/software/callmaout',
    '🤣 Open in Devpost',
  ],
  [
    '👋 Study Slap',
    [
      'Study Slap is a Chrome extension that keeps you focused while studying. It feeds your tab titles to GPT to judge whether they are relevant to the task at hand.',
      'If not, the tab is dimmed, made unresponsive, and covered with a "motivational" image.',
      'Winner of Most Creative at Hack the Ridge 2023.',
    ],
    ['Hack The Ridge Winner', 'Chrome Extension', 'GPT'],
    'https://devpost.com/software/study-slap',
    '👋 Open in Devpost',
  ],
  [
    '🌱 Carbon Sense',
    [
      'Carbon Sense is a carbon consumption calculator with a sense of humour, helping you "budget" your carbon spending like money in support of UN SDG 12 (Responsible Consumption and Production).',
      'GPT-4 estimates the carbon cost of anything you type in (with a fun fact), a quiz game challenges you to guess which of two items is more carbon-wasteful, and a Google Maps-powered transit helper calculates the cost of your trips.',
    ],
    ['DeltaHacks', 'Flask', 'GPT-4'],
    'https://devpost.com/software/carbon-sense',
    '🌱 Open in Devpost',
  ],
  [
    '👉 TableTablet',
    [
      'TableTablet turns any table into a touchscreen for your PC -- an extremely affordable alternative to a drawing tablet that only needs a webcam.',
      "After selecting four corners of a surface, Google's MediaPipe tracks your hand and translates your index finger into clicks and mouse movements, using a perspective transform and input smoothing to keep lines clean and jitter-free.",
    ],
    ['Hack the North', 'MediaPipe', 'OpenCV'],
    'https://devpost.com/software/tabletablet',
    '👉 Open in Devpost',
  ],
  [
    '🎙️ DYLAN.AI',
    [
      'DYLAN.AI (Dynamic Yielding Language-based Assistant and Navigator) is an AI accessibility tool that performs computer actions through voice commands, for people who are unable to use a mouse or keyboard.',
      "Commands are transcribed with OpenAI's Whisper, then classified by Cohere into searches (generated and reranked with Cohere) or keyboard and mouse macros that are executed on your computer.",
    ],
    ['MetHacks', 'Cohere', 'Whisper'],
    'https://devpost.com/software/dylan-dai',
    '🎙️ Open in Devpost',
  ],
];

export default function ProjectsPage() {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-2 p-2 md:grid-cols-2 md:gap-4">
      {projectData.map((project, index) => (
        <ProjectItem
          key={projectIds[index]}
          name={project[0]}
          description={project[1]}
          techStack={project[2]}
          demo={project[3]}
          projectId={projectIds[index]}
        />
      ))}
    </div>
  );
}
