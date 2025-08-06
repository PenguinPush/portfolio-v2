import React, { useEffect, useRef, useState } from 'react';

export default function Project({
  name,
  description,
  image,
  techStack,
  demo,
  repo,
  openMessage,
  hash,
  index,
  activeProject,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);
  const projectRef = useRef(null);
  const scrollTargetRef = useRef(null);

  function isActiveProject() {
    return index === activeProject;
  }

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (isActiveProject() && projectRef.current && scrollTargetRef.current) {
      const rect = projectRef.current.getBoundingClientRect();
      const margin = isMobile
        ? projectRef.current.offsetHeight
        : projectRef.current.offsetHeight / 2;
      const isVisible =
        rect.top >= margin && rect.bottom <= window.innerHeight - (isMobile ? margin * 2 : margin);
      if (!isVisible) {
        scrollTargetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [activeProject, index, isMobile]);

  return (
    <div
      ref={projectRef}
      className="ease-out-back relative left-1/2 flex min-h-48 -translate-x-1/2 flex-col overflow-hidden rounded-lg transition-all duration-300 md:min-h-64"
      style={{
        width: `${100 + hoverModifier + clickModifier}%`,
        willChange: 'width',
      }}
    >
      <div ref={scrollTargetRef} className="absolute -top-48 left-0"></div>
      <div
        className="ease-out-back relative flex min-h-48 w-full flex-grow cursor-pointer flex-col justify-between transition-all duration-300 md:min-h-64"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          willChange: 'transform',
        }}
        onPointerEnter={() => setHoverModifier(2.5)}
        onPointerLeave={() => {
          setHoverModifier(0);
          setClickModifier(0);
        }}
        onMouseDown={() => setClickModifier(2.5)}
        onTouchStart={() => setClickModifier(2.5)}
        onClick={() => {
          window.location.hash = !isActiveProject() ? hash : 'projects';
          setClickModifier(0);
        }}
      >
        <div
          className="bg-red-highlight ease-out-back min-h-48 w-full p-3 px-4 text-xs tracking-wide text-white transition-all duration-300 md:min-h-64 md:p-4 md:px-6 md:text-base"
          style={{
            clipPath: `polygon(0 0, ${isActiveProject() ? '115%' : '0'} 0, ${isActiveProject() ? '100%' : '-15%'} 100%, 0 100%)`,
            willChange: 'clip-path',
          }}
        >
          <p
            className="ease-out-back relative transition-all duration-300"
            style={{
              width: `${100 / ((100 + hoverModifier + clickModifier) / 100)}%`,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="ease-out-back z-1 flex w-full flex-row items-center justify-between bg-black px-2 py-1 text-sm font-bold text-white transition-all duration-300 md:px-4 md:text-lg">
        <h3>
          <a
            className="hover-highlight-blue"
            content={`${!isActiveProject() ? name : openMessage}`}
            href={demo}
            target="_blank"
          >
            {!isActiveProject() ? name : openMessage}
          </a>
        </h3>
        <div className="flex flex-row items-center space-x-1 md:space-x-2">
          {techStack.map((value, index) => (
            <span
              key={index}
              className="bg-red-highlight rounded-xs px-1 text-xs md:rounded-sm md:px-2 md:text-sm"
            >
              {value}
            </span>
          ))}
          <a className="hover-highlight-blue cursor-pointer" content="📂" href={repo} target="_blank">
            📁
          </a>
        </div>
      </div>
    </div>
  );
}
