import { useState } from 'react';
import NavButtons from '@/components/navButtons';
import BackgroundCircle from '@/components/backgroundCircle';
import AndrewPortrait from '@/components/andrewPortrait';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export default function Main() {
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
    'sponsorship director @ ontario competitive mathematics committee',
    "president and exec of my high school's CS and math club respectively",
    'member of the advocacy group More Transit Southern Ontario',
  ];

  const diamondListClass =
    'group ease-out-back diamond-list-decoration relative pr-2 transition duration-300 hover:translate-x-1 active:translate-x-1 md:pr-4';

  const arrowListClass =
    'group ease-out-back arrow-list-decoration relative translate-x-4 transition duration-300 hover:translate-x-5 active:translate-x-5';

  return (
    <div
      className={`${dmSans.className} dotted-background-yellow flex min-h-screen items-start justify-center overflow-auto font-normal text-black`}
    >
      <div className="text-md relative z-0 flex w-full flex-col gap-2 p-4 pb-[60vw] md:max-w-[750px] md:p-12 md:text-lg">
        <BackgroundCircle radiusVh={radiusVh} setRadiusVh={setRadiusVh} />
        <div className="flex flex-col items-center gap-2 px-4">
          <h1
            className="hover-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
            onMouseDown={() => setDisplayMedian(displayMedian + 2.5)}
            onMouseUp={() => {
              setMedian(70);
              setDisplayMedian(70);
            }}
            onTouchStart={() => setDisplayMedian(displayMedian + 2.5)}
            onTouchEnd={() => {
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
              leftLabel="About"
              rightLabel="Projects"
            />
          </div>
        </div>
        <div>
          <div className="p-2">
            <ul className="list-none space-y-1 pl-4 md:pl-8 md:leading-relaxed">
              <li className={diamondListClass}>
                16-year-old programmer from Toronto with interests in photography, urban planning,
                and politics.
              </li>
              <li className={diamondListClass}>
                stats breakdown:
                {stats.map((stat, index) => (
                  <p key={index} className={arrowListClass}>
                    {stat}
                  </p>
                ))}
              </li>
              <li className={diamondListClass}>
                recently, i&#39;ve...
                {projects.map((project, index) => (
                  <p
                    key={index}
                    className={`${arrowListClass} hover-highlight`}
                    data-content={project}
                  >
                    {project}
                  </p>
                ))}
              </li>
              <li className={diamondListClass}>
                currently i&#39;m...
                {positions.map((position, index) => (
                  <p key={index} className={arrowListClass}>
                    {position}
                  </p>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AndrewPortrait />
    </div>
  );
}
