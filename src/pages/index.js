import React, { useState, useEffect } from 'react';
import About from '@/components/about';
import Projects from '@/components/projects';
import NavButtonPair from '@/components/navButtonPair';
import BackgroundCircle from '@/components/backgroundCircle';
import AndrewPortrait from '@/components/andrewPortrait';
import NavButtonLarge from '@/components/navButtonLarge';
import Footer from '@/components/footer';
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
  const [evilMode, setEvilMode] = useState(false);

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
      className={`${dmSans.className} dotted-background-yellow flex min-h-[100dvh] items-start justify-center overflow-x-hidden overflow-y-auto overscroll-contain font-normal text-black`}
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
            onTouchStart={(e) => {
              e.preventDefault();
              setDisplayMedian(displayMedian + 2.5);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setPageState(0);
              setDisplayMedian(70);
            }}
          >
            Andrew Dai
          </h1>
          <div className="flex h-8 w-full flex-row items-center">
            <NavButtonPair
              median={median}
              displayMedian={displayMedian}
              setMedian={setMedian}
              setDisplayMedian={setDisplayMedian}
              pageState={pageState}
              setPageState={setPageState}
            />
          </div>
        </div>
        <div className="flex flex-grow flex-col gap-2">
          <div className="flex flex-grow flex-col">
            <div
              className="flex-col gap-2"
              style={{
                animation:
                  pageState === 0 ? 'bounce-in-right 0.3s var(--ease-out-back) forwards' : 'none',
                display: pageState === 0 ? 'flex' : 'none',
              }}
            >
              <About />
              <div className="flex w-full justify-center">
                <NavButtonLarge
                  className="flex"
                  buttonText={"see what else i've made"}
                  targetPage={1}
                  displayMedian={displayMedian}
                  setDisplayMedian={setDisplayMedian}
                  setPageState={setPageState}
                />
              </div>
            </div>
            <div
              className="flex-col gap-2"
              style={{
                animation:
                  pageState === 1 ? 'bounce-in-left 0.3s var(--ease-out-back) forwards' : 'none',
                display: pageState === 1 ? 'flex' : 'none',
              }}
            >
              <Projects />
              <div className="flex w-full justify-center">
                <NavButtonLarge
                  className="flex"
                  buttonText={"rats guess i'll go back"}
                  targetPage={0}
                  displayMedian={displayMedian}
                  setDisplayMedian={setDisplayMedian}
                  setPageState={setPageState}
                />
              </div>
            </div>
          </div>
          <Footer isMobile={isMobile} setEvilMode={setEvilMode} />
          <div
            className="pointer-events-none absolute bottom-10 z-10 h-[60dvh] w-[45dvh] transition-all ease-out"
            aria-hidden="true"
            style={{
              transitionDuration: evilMode ? '3s' : '150ms',
              left: evilMode ? 'calc(50% + 270px)' : '100vw',
              animation: evilMode ? 'shake 3s step-start' : 'none',
              imageRendering: 'pixelated',
            }}
          >
            <Image
              src={getImagePath('/images/big_evil_arrow.png')}
              alt={`BIG EVIL ARROW`}
              width={500}
              height={500}
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="h-[65vw] md:h-0" aria-hidden="true"></div>
        <AndrewPortrait getImagePath={getImagePath} aria-hidden="true" />
      </div>
    </div>
  );
}
