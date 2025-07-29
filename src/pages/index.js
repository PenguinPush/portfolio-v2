import { useState } from 'react';
import NavButtons, { updateMedian } from '@/components/navButtons';
import BackgroundCircle from '@/components/backgroundCircle';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans();

export default function Main() {
  const hoverOffset = 2.5;
  const [median, setMedian] = useState(70);
  const [displayMedian, setDisplayMedian] = useState(70);
  const [radiusVh, setRadiusVh] = useState(60);

  const stats = [
    '8x (consecutive) hackathon wins out of 13 attended',
    '3 years with Python and machine learning/artificial intelligence',
    '6 years with object-oriented-programming, C#, and Unity',
  ];
  const projects = [
    'built a blazingly-fast hashing tool to group photos by visual similarity, saving photographers (myself included!) hours of culling photos',
    'designed an animal species classification pipeline from photos using visual descriptions + semantic search; capable of identifying animals without needing to individually train on photos of species',
    'used Nintendo Switch Joy-Con accelerometers to create a tool for home physiotherapy, including heart-rate measurement via IR camera',
  ];
  const positions = [
    'idk man is hack:peel worth putting',
    'president of cs club and math club exec',
    "maybe i'll apply to jamhacks",
    'uhhh ontario competitive mathematics committee',
  ];

  return (
    <div
      className={`${dmSans.className} dotted-background-yellow flex min-h-screen items-start justify-center overflow-auto font-normal text-black`}
    >
      <div className="z-0 flex min-h-[800px] w-full flex-col gap-2 p-4 md:max-w-[750px] md:p-12">
        <BackgroundCircle radiusVh={radiusVh} setRadiusVh={setRadiusVh} />
        <div className="flex flex-col items-center gap-2 px-4">
          <h1
            className="animated-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
            onMouseDown={() => setDisplayMedian(displayMedian + hoverOffset)}
            onMouseUp={() => {
              setMedian(70);
              setDisplayMedian(70);
            }}
          >
            Andrew Dai
          </h1>
          <div className="flex h-8 w-full flex-row items-center">
            <NavButtons
              median={median}
              displayMedian={displayMedian}
              setMedian={setMedian}
              setDisplayMedian={setDisplayMedian}
              hoverOffset={hoverOffset}
              leftLabel="About"
              rightLabel="Projects"
            />
          </div>
        </div>
        <div>
          <div className="p-2 text-lg">
            <ul className="list-none space-y-1 pl-8 leading-relaxed">
              <li className="group ease-out-back diamond-list-decoration relative leading-normal transition hover:translate-x-1">
                16-year-old programmer from Toronto with interests in photography, urban planning,
                and politics.
              </li>
              <li className="group ease-out-back diamond-list-decoration relative pr-4 transition hover:translate-x-1">
                stats breakdown:
                {stats.map((stat, index) => (
                  <p
                    key={index}
                    className="group ease-out-back arrow-list-decoration relative translate-x-4 leading-normal transition hover:translate-x-5"
                  >
                    {stat}
                  </p>
                ))}
              </li>
              <li className="group ease-out-back diamond-list-decoration relative pr-4 transition hover:translate-x-1">
                recently, i&#39;ve...
                {projects.map((project, index) => (
                  <p
                    key={index}
                    className="group ease-out-back arrow-list-decoration animated-underline relative translate-x-4 leading-normal transition hover:translate-x-5"
                  >
                    {project}
                  </p>
                ))}
              </li>
              <li className="group ease-out-back diamond-list-decoration relative pr-4 transition hover:translate-x-1">
                currently i&#39;m...
                {positions.map((position, index) => (
                  <p
                    key={index}
                    className="group ease-out-back arrow-list-decoration relative translate-x-4 leading-normal transition hover:translate-x-5"
                  >
                    {position}
                  </p>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
