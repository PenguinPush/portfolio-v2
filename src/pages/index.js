import React, { useState, useEffect, useRef, use } from 'react';
import AboutPage from '@/components/aboutPage';
import ProjectsPage from '@/components/projectsPage';
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

const projectHashes = [
  'cullergrader',
  'faunadex',
  'physiotherapy',
  'pickle',
  'miku',
  'tabletablet',
  'dylanai',
];

export default function Main() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const [pageState, setPageState] = useState(0);
  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [evilMode, setEvilMode] = useState(false);

  const [activeProject, setActiveProject] = useState(null);

  const hoverMods = [hoverModifier, setHoverModifier];
  const clickMods = [clickModifier, setClickModifier];

  let fromHash = null;

  const changePage = (page) => {
    if (page === 1.5) {
      setPageState(1);
    } else {
      setPageState(page);
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    }
    setClickModifier(0);

    if (page === 0) {
      if (aboutRef.current) {
        aboutRef.current.style.animation = 'bounce-in-right 0.3s var(--ease-out-back) forwards';
        if (projectsRef.current) projectsRef.current.style.animation = 'none';
      }
    } else if (page === 1 || page === 1.5) {
      if (projectsRef.current) {
        projectsRef.current.style.animation = 'bounce-in-left 0.3s var(--ease-out-back) forwards';
        if (aboutRef.current) aboutRef.current.style.animation = 'none';
      }
    }
  };

  useEffect(() => {
    const onHashChange = () => {
      const toHash = window.location.hash.replace('#', '').toLowerCase();

      if (toHash === 'projects' && !projectHashes.includes(fromHash)) {
        changePage(1);
        setActiveProject(null);
      } else if (
        (projectHashes.includes(toHash) && activeProject !== projectHashes.indexOf(toHash)) ||
        toHash === 'projects'
      ) {
        changePage(1.5);
        setActiveProject(projectHashes.indexOf(toHash));
      } else changePage(0);

      fromHash = toHash;
    };

    window.addEventListener('hashchange', onHashChange);
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobile]);

  const getImagePath = (path) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '';
    return `${basePath}/${cleanPath}`;
  };

  return (
    <div
      className={`${dmSans.className} dotted-background-yellow flex min-h-[100dvh] items-start justify-center overflow-x-hidden overflow-y-auto overscroll-contain font-normal text-black`}
    >
      <div className="relative z-0 flex min-h-[100dvh] w-full flex-col gap-2 p-4 text-sm tracking-tight md:max-w-[720px] md:p-12 md:text-lg md:tracking-normal">
        <BackgroundCircle isMobile={isMobile} />
        <div className="flex flex-col items-center gap-2 px-4">
          <div>
            <h1
              className="hover-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
              onMouseDown={() => setClickModifier(2.5)}
              onTouchStart={() => setClickModifier(2.5)}
              onClick={() => {
                window.location.hash = 'about';
                setClickModifier(0);
              }}
            >
              Andrew Dai
            </h1>
          </div>
          <div className="flex h-8 w-full flex-row items-center">
            <NavButtonPair hoverMods={hoverMods} clickMods={clickMods} pageState={pageState} />
          </div>
        </div>
        <div className="flex flex-grow flex-col gap-2">
          <div className="flex flex-grow flex-col">
            <div
              ref={aboutRef}
              className="flex-col gap-2"
              style={{
                display: pageState === 0 ? 'flex' : 'none',
              }}
            >
              <AboutPage />
              <div className="flex w-full justify-center">
                <NavButtonLarge
                  className="flex"
                  buttonText={"see what else i've made"}
                  targetPage={1}
                  clickMods={clickMods}
                />
              </div>
            </div>
            <div
              ref={projectsRef}
              className="flex-col gap-2"
              style={{
                display: pageState === 1 ? 'flex' : 'none',
              }}
            >
              <ProjectsPage
                activeProject={activeProject}
                projectHashes={projectHashes}
                getImagePath={getImagePath}
              />
              <div className="flex w-full justify-center">
                <NavButtonLarge
                  className="flex"
                  buttonText={'learn more about me'}
                  targetPage={0}
                  clickMods={clickMods}
                  pageState={pageState}
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
              willChange: evilMode ? 'transform' : 'auto',
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
