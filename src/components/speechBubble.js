import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import projects from '@/data/projects.json';

export default function SpeechBubble() {
  const router = useRouter();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const onHashChange = () => setHash(decodeURIComponent(window.location.hash.slice(1)));
    onHashChange();
    router.events.on('hashChangeComplete', onHashChange);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      router.events.off('hashChangeComplete', onHashChange);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [router.events]);

  const project = projects.find((p) => p.id === hash);
  if (!project) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
      <div className="pointer-events-auto w-full max-w-[786px] px-4 md:px-12">
        <div className="bg-red-highlight ease-out-back relative flex min-h-48 w-full min-w-0 flex-col gap-2 rounded-2xl p-3 px-4 text-xs font-normal wrap-anywhere text-white transition-all duration-300 md:min-h-52 md:p-4 md:px-6 md:text-base">
          <h2 className="text-center font-bold">{project.name}</h2>
          <div className="space-y-2">
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
