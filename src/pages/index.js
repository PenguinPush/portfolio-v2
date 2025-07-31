import React, { useState, useEffect } from 'react';
import About from '@/pages/about';
import Projects from '@/pages/projects';
import NavButtons from '@/components/navButtons';
import BackgroundCircle from '@/components/backgroundCircle';
import AndrewPortrait from '@/components/andrewPortrait';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export default function Main() {
  const [pageState, setPageState] = useState(0);
  const [median, setMedian] = useState(70);
  const [displayMedian, setDisplayMedian] = useState(70);
  const [radiusVh, setRadiusVh] = useState(60);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (pageState === 0) {
      setMedian(70);
    } else if (pageState === 1) {
      setMedian(30);
    }
  }, [pageState]);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobile]);

  const getImagePath = (path) => {
    // made for compatibility between localhost and github pages
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '';
    return `${basePath}/${cleanPath}`;
  };

  return (
    <div
      className={`${dmSans.className} dotted-background-yellow flex min-h-[100dvh] items-start justify-center overflow-x-clip overflow-y-auto overscroll-contain font-normal text-black`}
    >
      <div className="relative z-0 flex min-h-[100dvh] w-full flex-col gap-2 p-4 text-sm tracking-tight md:max-w-[720px] md:p-12 md:text-lg md:tracking-normal">
        <BackgroundCircle radiusVh={radiusVh} setRadiusVh={setRadiusVh} isMobile={isMobile} />
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
              pageState={pageState}
              setPageState={setPageState}
            />
          </div>
        </div>
        <div className="flex flex-1">
          <About
            displayMedian={displayMedian}
            setMedian={setMedian}
            setDisplayMedian={setDisplayMedian}
            setPageState={setPageState}
            getImagePath={getImagePath}
            isMobile={isMobile}
          />
          {/*<Projects />*/}
        </div>
        <div className="flex justify-center gap-4 pt-2 text-xs md:items-end md:text-lg">
          <b className="hover-highlight" content="💌 email">
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
        <div className="h-[65vw] md:h-0" aria-hidden="true"></div>
      </div>
      <AndrewPortrait getImagePath={getImagePath} aria-hidden="true" />
    </div>
  );
}
