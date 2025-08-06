import React, { useEffect, useRef, useState } from 'react';

import ProjectsPage from '@/components/projectsPage';
import NavButtonLarge from '@/components/navButtonLarge';
import Layout from '@/components/layout';
import { useAppContext } from '@/context/AppContext';

import { useRouter } from 'next/router';

const projectHashes = [
  'cullergrader',
  'faunadex',
  'physiotherapy',
  'pickle',
  'miku',
  'tabletablet',
  'dylanai',
];

export default function Projects() {
  const projectsRef = useRef(null);
  const router = useRouter();
  const { isMobile, setPageState } = useAppContext();

  const [clickModifier, setClickModifier] = useState(0);

  useEffect(() => {
    if (projectsRef.current) {
      projectsRef.current.style.animation = 'bounce-in-left 0.3s var(--ease-out-back) forwards';
      setPageState(1);
    }
  }, [router.query]);

  return (
    <Layout
      title="Andrew Dai - Projects"
      clickModifier={clickModifier}
      setClickModifier={setClickModifier}
      router={router}
    >
      <div ref={projectsRef} className="flex-col gap-2">
        <ProjectsPage projectIds={projectHashes} isMobile={isMobile} router={router} />
        <div className="flex w-full justify-center">
          <NavButtonLarge
            className="flex"
            buttonText={'learn more about me'}
            targetPage={0}
            setClickModifier={setClickModifier}
            router={router}
          />
        </div>
      </div>
    </Layout>
  );
}
