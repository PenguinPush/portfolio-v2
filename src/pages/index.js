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
    '3 yrs of experience w/ Python and ML/AI libraries',
    '6 yrs w/ object-oriented-programming, C#, & Unity',
  ];
  const projects = [
    'built a hashing tool to group photos by visual similarity, saving photographers like me hours of culling photos',
    'designed an animal species classification pipeline using visual descriptions + semantic search; can classify without individually training on photos of each species',
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
      <div className="relative z-0 flex w-full flex-col gap-2 p-4 pb-[60vw] text-sm tracking-tight md:max-w-[720px] md:p-12 md:text-lg md:tracking-normal">
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
            <ul className="list-none space-y-1 pl-4 leading-relaxed md:pl-8">
              <li className={diamondListClass}>
                16-year-old programmer from Toronto with interests in{' '}
                <b className="hover-highlight" content="photography">
                  photography
                </b>
                ,{' '}
                <b className="hover-highlight" content="urban planning">
                  urban planning
                </b>
                , and{' '}
                <b className="hover-highlight" content="politics">
                  politics
                </b>
                .
              </li>
              <li className={diamondListClass}>
                stats breakdown:
                <p className={arrowListClass}>8x (consecutive) hackathon wins out of 13 attended</p>
                <p className={arrowListClass}>3 yrs of experience w/ Python and ML/AI libraries</p>
                <p className={arrowListClass}>
                  6 yrs w/ object-oriented-programming, C#, &amp; Unity
                </p>
              </li>
              <li className={diamondListClass}>
                recently, i&#39;ve...
                <p className={arrowListClass}>
                  built a{' '}
                  <b className="hover-highlight" content="hashing tool">
                    hashing tool
                  </b>{' '}
                  to group photos by visual similarity, saving photographers like me hours of
                  culling photos
                </p>
                <p className={arrowListClass}>
                  designed an animal species{' '}
                  <b className="hover-highlight" content="classification pipeline">
                    classification pipeline
                  </b>{' '}
                  using visual descriptions + semantic search; can classify without individually
                  training on photos of each species
                </p>
                <p className={arrowListClass}>
                  made{' '}
                  <b className="hover-highlight" content="a tool">
                    a tool
                  </b>{' '}
                  for home physiotherapy, using Nintendo Switch controllers to track movements &
                  monitor heart rate (with the built-in IR Camera!)
                </p>
              </li>
              <li className={diamondListClass}>
                currently i&#39;m...
                <p className={arrowListClass}>
                  {' '}
                  <b
                    className="hover-highlight"
                    content="Ontario Competitive Mathematics Committee"
                  >
                    Ontario Competitive Mathematics Committee
                  </b>{' '}
                  sponsorship lead
                </p>
                <p className={arrowListClass}>
                  president and exec of my school&#39;s CS and math clubs
                </p>
                <p className={arrowListClass}>
                  head organizer @ {' '}
                  <b className="hover-highlight" content="hack::peel">
                    hack::peel
                  </b>
                  {''}, hosting 100+ hackers
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AndrewPortrait />
    </div>
  );
}
