import { useState } from 'react';
import AboutPage from '@/components/aboutPage';
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
        <AboutPage />
      </div>
      <AndrewPortrait />
    </div>
  );
}
