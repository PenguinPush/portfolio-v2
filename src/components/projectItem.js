import React, { useState, useRef, useEffect } from 'react';

export default function ProjectItem({
  name,
  description,
  image,
  techStack,
  demo,
  repo,
  openMessage,
  projectId,
  router,
  projectRefCallback,
  scrollTargetCallback
}) {

  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);
  const projectRef = useRef(null);
  const scrollTargetRef = useRef(null);


  useEffect(() => {
    if (projectRef.current && projectRefCallback) {
      projectRefCallback(projectRef.current);
    }
    if (scrollTargetRef.current && scrollTargetCallback) {
      scrollTargetCallback(scrollTargetRef.current);
    }
  }, []);

  function isActiveProject() {
    return router.query && router.query.project === projectId;
  }

    return (
      <div
        ref={projectRef}
        className={`${isActiveProject() ? 'active-project' : ''} ease-out-back relative left-1/2 flex min-h-48 -translate-x-1/2 flex-col overflow-hidden rounded-lg transition-all duration-300 md:min-h-64`}
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
            setClickModifier(0);
            router.push(`${!isActiveProject() ? `/projects?project=${projectId}` : "/projects"}`,  undefined, { scroll: false });
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
            <a
              className="hover-highlight-blue cursor-pointer"
              content="📂"
              href={repo}
              target="_blank"
            >
              📁
            </a>
          </div>
        </div>
      </div>
  );
}
