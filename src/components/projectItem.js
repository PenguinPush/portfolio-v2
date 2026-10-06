import Link from 'next/link';
import Image from 'next/image';
import posthog from 'posthog-js';
import posthogLogger from '@/lib/posthogLogger';

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

export default function ProjectItem({ name, description, techStack, demo, projectId }) {
  return (
    <article
      id={projectId}
      className="group ease-out-back relative left-1/2 flex w-full min-w-0 -translate-x-1/2 scroll-mt-48 flex-col overflow-hidden rounded-2xl transition-[width] duration-300 hover:z-10 hover:w-[102.5%] active:w-[105%] motion-reduce:transition-none"
      aria-labelledby={`${projectId}-title`}
    >
      <Link
        href={`/projects/#${projectId}`}
        aria-label={`View ${name}`}
        className="focus-visible:outline-blue-highlight block overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2"
      >
        <Image
          src={`/images/projects/${projectId}.png`}
          className="ease-out-back h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.025] group-active:scale-[1.05] motion-reduce:transition-none md:h-52"
          alt={name}
          loading="lazy"
          width="1000"
          height="500"
        />
      </Link>
      <div hidden>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="relative z-1 flex flex-grow flex-col items-start justify-between gap-1 bg-black px-3 py-2 text-sm font-bold text-white md:text-base">
        <h3 id={`${projectId}-title`}>
          <Link
            className="hover-highlight-blue"
            content={name}
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
            {name}
          </Link>
        </h3>
        <div className="flex flex-wrap items-center gap-1">
          {techStack.map((value, index) => (
            <span
              key={index}
              className="bg-red-highlight rounded-xs px-1 text-xs md:rounded-sm md:px-1.5 md:text-sm"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
