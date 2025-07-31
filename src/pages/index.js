import React, { useState, useEffect } from 'react';
import About from '@/pages/about';
import Projects from '@/pages/projects';
import NavButtons from '@/components/navButtons';
import BackgroundCircle from '@/components/backgroundCircle';
import AndrewPortrait from '@/components/andrewPortrait';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export default function Main() {
  const [pageState, setPageState] = useState(0);
  const [median, setMedian] = useState(70);
  const [displayMedian, setDisplayMedian] = useState(70);
  const [radiusVh, setRadiusVh] = useState(60);

  useEffect(() => {
    if (pageState === 0) {
      setMedian(70);
    } else if (pageState === 1) {
      setMedian(30);
    }
  });

  return (
    <div
      className={`${dmSans.className} dotted-background-yellow flex min-h-screen items-start justify-center overflow-auto font-normal text-black`}
    >
      <div className="relative z-0 flex min-h-screen w-full flex-col gap-2 p-4 pb-[65vw] text-sm tracking-tight md:max-w-[720px] md:p-12 md:text-lg md:tracking-normal">
        <BackgroundCircle radiusVh={radiusVh} setRadiusVh={setRadiusVh} />
        <div className="flex flex-col items-center gap-2 px-4">
          <h1
            className="hover-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
            onMouseDown={() => setDisplayMedian(displayMedian + 2.5)}
            onMouseUp={() => {
              setPageState(0);
              setDisplayMedian(70);
            }}
            onTouchStart={() => setDisplayMedian(displayMedian + 2.5)}
            onTouchEnd={() => {
              setPageState(0);
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
              setPageState={setPageState}
            />
          </div>
        </div>
        <div className="flex flex-1">
          <About />
          {/*<Projects />*/}
        </div>
        <div className="md:text-lg flex justify-center gap-4 pt-8 text-xs md:items-end">
          <b className="hover-highlight" content="📩 email">
            📧 email
          </b>
          <b className="hover-highlight" content="🦑 github">
            🐙 github
          </b>
          <b className="hover-highlight" content="⛓️‍💥 linkedin">
            🔗 linkedin
          </b>{' '}
          <b className="hover-highlight" content="📜 resume">
            📃 resume
          </b>{' '}
          <b className="hover-highlight" content="📂 repo">
            📁 repo
          </b>
        </div>
      </div>
      <AndrewPortrait />
    </div>
  );
}
