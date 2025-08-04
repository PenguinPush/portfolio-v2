import Project from '@/components/project';

export default function ProjectsPage({ activeProject, projectHashes, getImagePath }) {
  const projectData = [
    [
      '📸 Cullergrader',
      'Cullergrader uses a perceptual hashing algorithm to group photos by visual similarity to sort through images rapidly. ' +
        'As a photographer with the habit of taking the same shot many times, selecting my best takes is often a time consuming process (especially with thousands of photos!). ' +
        'Unable to find a suitable tool, I built Cullergrader to solve this problem, saving me hours at a time going through photos. ' +
        'Cullergrader is now available on Github as an open-source project, which I plan to actively maintain and accept contributions for to improve it as a tool for the photography community.',
      getImagePath('/images/projects/cullergrader.png'),
      ['Java', 'Swing UI', 'Actively Maintained'],
      'https://github.com/PenguinPush/cullergrader',
      'https://github.com/PenguinPush/cullergrader',
      '📸 Open in Github',
    ],
    [
      '🐻 FaunaDex',
      'this one is cool but maybe i should deploy it somewhere so its actually usable and refine the pipeline part a bit, someone remind me to add a readme to the github',
      getImagePath('/images/projects/placeholder.png'),
      ['NumPy', 'GCP', 'OpenAI', 'React'],
      'https://github.com/PenguinPush/faunadex',
      'https://github.com/PenguinPush/faunadex',
      '🐻 Open in Github',
    ],
    [
      '💪 Physiotherapy Tool',
      'cant really deploy this one LOL but at least i can add the demo video https://devpost.com/software/the-exercists',
      getImagePath('/images/projects/physiotherapy.png'),
      ['C++', 'Python', 'Arduino'],
      'https://github.com/iantang08/UTRAHacks2025',
      'https://github.com/iantang08/UTRAHacks2025',
      '💪 Open in Github',
    ],
    [
      '🗼 Pickle',
      'this one is pretty awesome i can probably deploy this one too so you can like give the sms stuff a shot which i think would be kinda impressive',
      getImagePath('/images/projects/pickle.png'),
      ['Flask', 'Twilio', 'MongoDB', 'Cohere'],
      'https://github.com/PenguinPush/deltahacks-xi',
      'https://github.com/PenguinPush/deltahacks-xi',
      '🗼 Open in Github',
    ],
    [
      '🎸 Vivid Bedroom (DEMO)',
      'the only one currently with a demo https://penguinpush.github.io/mikucontest-2024 i think its pretty awesome',
      getImagePath('/images/projects/miku.png'),
      ['HTML', 'three.js', 'TextAlive'],
      'https://penguinpush.github.io/mikucontest-2024',
      'https://github.com/PenguinPush/mikucontest-2024',
      '🎸 Open Demo',
    ],
    [
      '👉 TableTablet',
      'tabletablet i can probably make downloadable but this also deserves a demo video tbh, i will make demo videos for all of them along with download links n stuff. should they be youtube or hosted here (implementing a video player sounds hard maybe just yt)',
      getImagePath('/images/projects/tabletablet.png'),
      ['Python', 'MediaPipe', 'OpenCV'],
      'https://github.com/PenguinPush/cullergrader',
      'https://github.com/PenguinPush/cullergrader',
      '👉 Open in Github',
    ],
    [
      '🤖 DYLAN.AI',
      'this one is really old and ill probably do a demo video with download link this is the one that uses voice commands and stuff its cool its cool',
      getImagePath('/images/projects/placeholder.png'),
      ['OpenAI', 'Cohere', 'GCP'],
      'https://github.com/PenguinPush/DylanAI',
      'https://github.com/PenguinPush/DylanAI',
      '🤖 Open in Github',
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
            openMessage={projectData[index][6]}
            hash={projectHashes[index]}
            index={index}
            activeProject={activeProject}
          />
        ))}
      </div>
    </div>
  );
}
