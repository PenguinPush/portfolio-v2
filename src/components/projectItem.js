import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectItem({
  name,
  description,
  techStack,
  demo,
  repo,
  openMessage,
  projectId,
}) {
  const { isMobile } = useAppContext();
  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);
  const [isActiveProject, setIsActiveProject] = useState(false);
  const projectRef = useRef(null);
  const scrollTargetRef = useRef(null);

  useEffect(() => {
    updateActiveProject();
  }, [updateActiveProject]);

  function updateActiveProject() {
    setIsActiveProject(window.location.hash === `#${projectId}`);
  }

  useEffect(() => {
    if (isActiveProject && projectRef.current && scrollTargetRef.current) {
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
  }, [isMobile, isActiveProject]);

  return (
    <div
      ref={projectRef}
      className="ease-out-back relative left-1/2 flex min-h-48 -translate-x-1/2 flex-col overflow-hidden rounded-2xl transition-all duration-300 md:min-h-64"
      style={{
        width: `${100 + hoverModifier + clickModifier}%`,
        willChange: 'width',
      }}
    >
      <div ref={scrollTargetRef} className="absolute -top-48 left-0"></div>
      <Link
        className="ease-out-back relative flex min-h-48 w-full flex-grow cursor-pointer flex-col justify-between transition-all duration-300 md:min-h-64"
        href={!isActiveProject ? `/projects/#${projectId}` : '/projects'}
        onPointerEnter={() => setHoverModifier(2.5)}
        onPointerLeave={() => {
          setHoverModifier(0);
          setClickModifier(0);
        }}
        onMouseDown={() => setClickModifier(2.5)}
        onTouchStart={() => setClickModifier(2.5)}
        onClick={() => {
          setClickModifier(0);
          updateActiveProject();
        }}
        scroll={false}
      >
        <Image
          src={`/images/projects/${projectId}.png`}
          className="ease-out-back absolute inset-0 h-full w-full object-cover transition-transform duration-300"
          alt={name}
          style={{
            transform: `scale(${1 + (hoverModifier + clickModifier) / 100})`,
            willChange: 'transform',
          }}
          loading="lazy"
          width="1000"
          height="500"
        />

        <div
          className="bg-red-highlight ease-out-back min-h-48 w-full p-3 px-4 text-xs tracking-wide text-white transition-all duration-300 md:min-h-64 md:p-4 md:px-6 md:text-base"
          style={{
            clipPath: `polygon(0 0, ${isActiveProject ? '115%' : '0'} 0, ${isActiveProject ? '100%' : '-15%'} 100%, 0 100%)`,
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
      </Link>

      <div className="z-1 flex flex-row items-center justify-between bg-black px-3 py-1 text-sm font-bold text-white md:px-4 md:text-lg">
        <h3>
          <a
            className="hover-highlight-blue"
            content={`${!isActiveProject ? name : openMessage}`}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {!isActiveProject ? name : openMessage}
          </a>
        </h3>
        <div className="flex flex-row flex-wrap items-center justify-end space-x-1 md:space-x-2">
          {techStack.map((value, index) => (
            <span
              key={index}
              className="bg-red-highlight rounded-xs px-1 text-xs text-nowrap md:rounded-sm md:px-2 md:text-sm"
            >
              {value}
            </span>
          ))}
          <a
            className="hover-highlight-blue cursor-pointer"
            content="📂"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            📁
          </a>
        </div>
      </div>
    </div>
  );
}
