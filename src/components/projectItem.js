import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import posthogLogger from '@/lib/posthogLogger';
import { useAppContext } from '@/context/AppContext';

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

export default function ProjectItem({
  name,
  description,
  techStack,
  demo,
  openMessage,
  projectId,
}) {
  const { isMobile } = useAppContext();
  const router = useRouter();
  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);
  const projectRef = useRef(null);
  const scrollTargetRef = useRef(null);
  const isActiveProject = router.asPath.endsWith(`#${projectId}`);

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
    <article
      ref={projectRef}
      id={projectId}
      className="ease-out-back relative left-1/2 flex min-h-48 -translate-x-1/2 flex-col overflow-hidden rounded-2xl transition-[width] duration-300 md:min-h-52"
      style={{
        width: `${100 + hoverModifier + clickModifier}%`,
        willChange: 'width, height',
      }}
      aria-labelledby={`${projectId}-title`}
    >
      <div ref={scrollTargetRef} className="absolute -top-48 left-0"></div>
      <Link
        className={`ease-out-back relative flex w-full cursor-pointer flex-col justify-between overflow-hidden transition-[height] duration-300 ${isActiveProject ? 'h-96 md:h-104' : 'h-48 md:h-52'}`}
        href={!isActiveProject ? `/projects/#${projectId}` : '/projects'}
        aria-label={`View ${name}`}
        draggable={false}
        onPointerEnter={() => setHoverModifier(2.5)}
        onPointerLeave={() => {
          setHoverModifier(0);
          setClickModifier(0);
        }}
        onMouseDown={() => setClickModifier(2.5)}
        onTouchStart={() => setClickModifier(2.5)}
        onClick={() => setClickModifier(0)}
        scroll={false}
      >
        <Image
          src={`/images/projects/${projectId}.png`}
          className="ease-out-back absolute inset-0 h-full w-full object-cover transition-transform duration-300"
          alt={name}
          draggable={false}
          style={{
            transform: `scale(${1 + (hoverModifier + clickModifier) / 100})`,
            willChange: 'transform',
          }}
          loading="lazy"
          width="1000"
          height="500"
        />

        <div
          className="bg-red-highlight ease-out-back min-h-48 w-full shrink-0 flex-grow p-3 px-4 text-xs text-white transition-[clip-path] duration-300 md:min-h-52 md:p-4 md:px-6 md:text-base"
          style={{
            clipPath: `polygon(0 0, ${isActiveProject ? '115%' : '0'} 0, ${isActiveProject ? '100%' : '-15%'} 100%, 0 100%)`,
            willChange: 'clip-path',
          }}
        >
          <div
            className="ease-out-back relative flex flex-col gap-4 transition-[width] duration-300"
            style={{
              width: `${100 / ((100 + hoverModifier + clickModifier) / 100)}%`,
            }}
          >
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Link>

      <div className="z-1 flex flex-row items-center justify-between bg-black px-3 py-1 text-sm font-bold text-white md:px-4 md:text-lg">
        <h3 id={`${projectId}-title`}>
          <Link
            className="hover-highlight-red"
            content={isActiveProject ? openMessage : name}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (isPostHogConfigured) {
                posthog.capture('project_demo_opened', { project_id: projectId });
                posthogLogger.info('portfolio project demo opened', { project_id: projectId });
              }
            }}
          >
            {isActiveProject ? openMessage : name}
          </Link>
        </h3>
        {/*<div className="flex flex-wrap items-center gap-1">*/}
        {/*  {techStack.map((value, index) => (*/}
        {/*    <span*/}
        {/*      key={index}*/}
        {/*      className="bg-red-highlight rounded-xs px-1 text-xs md:rounded-sm md:px-1.5 md:text-sm"*/}
        {/*    >*/}
        {/*      {value}*/}
        {/*    </span>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </article>
  );
}
