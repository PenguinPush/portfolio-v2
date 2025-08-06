import React, { useEffect, useRef, useState } from 'react';
import ProjectsPage from '@/components/projectsPage';
import NavButtonLarge from '@/components/navButtonLarge';
import Layout from '@/components/layout';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';

export default function Projects() {
  const projectsRef = useRef(null);
  const router = useRouter();
  const { setPageState } = useAppContext();
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
      description="Projects showcasing Andrew Dai's tech stack and problem-solving skills, ranging from passion projects to hackathon winners. All opened sourced on GitHub."
      url="https://andrewd.ai/projects/"
      image="https://andrewd.ai/images/projects_screenshot.jpeg"
      clickModifier={clickModifier}
      setClickModifier={setClickModifier}
    >
      <div ref={projectsRef} className="flex flex-col gap-2">
        <ProjectsPage/>
        <div className="flex w-full justify-center">
          <NavButtonLarge
            className="flex"
            buttonText={'learn more about me'}
            targetPage={0}
            setClickModifier={setClickModifier}
          />
        </div>
      </div>
    </Layout>
  );
}
