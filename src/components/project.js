import React, { useRef, useEffect, useState } from 'react';

export default function Project({
  name,
  description,
  image,
  techStack,
  demo,
  repo,
  hash,
  index,
  activeProject,
  setActiveProject,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);
  const projectRef = useRef(null);
  const scrollTargetRef = useRef(null);

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
    if (index === activeProject && projectRef.current && scrollTargetRef.current) {
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
  }, [activeProject, index]);

  return (
    <div
      ref={projectRef}
      className="ease-out-back relative left-1/2 flex h-48 -translate-x-1/2 flex-col overflow-hidden rounded-lg transition-all duration-300 md:h-64"
      style={{
        width: `${100 + hoverModifier + clickModifier}%`,
        willChange: 'width',
      }}
    >
      <div ref={scrollTargetRef} className="absolute -top-48 left-0"></div>
      <div
        className="ease-out-back relative flex h-full w-full flex-grow cursor-pointer flex-col justify-between transition-all duration-300"
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
          window.location.hash = index !== activeProject ? hash : 'projects';
          setClickModifier(0);
        }}
      >
        <div
          className="bg-red-highlight ease-out-back h-full w-full p-2 text-sm text-white transition-all duration-300 md:px-4 md:text-lg"
          style={{
            clipPath: `polygon(0 0, ${index === activeProject ? '110%' : '0'} 0, ${index === activeProject ? '100%' : '0'} 100%, 0 100%)`,
            willChange: 'clip-path',
          }}
        >
          <p
            className="ease-out-back transition-all duration-300"
            style={{
              width: `${100 / ((100 + hoverModifier + clickModifier) / 100)}%`,
            }}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="ease-out-back z-1 flex w-full flex-row items-center justify-between bg-black px-2 py-1 text-xs font-bold text-white transition-all duration-300 md:px-4 md:text-base">
        <h3>
          <a className="hover-highlight" content={`${name}`} href={demo} target="_blank">
            {name}
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
          {/*<span className="hover-highlight cursor-pointer" content="📂">*/}
          {/*  📁*/}
          {/*</span>*/}
        </div>
      </div>
    </div>
  );
}
