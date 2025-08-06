import React, { useEffect, useRef, useState } from 'react';
import AboutPage from '@/components/aboutPage';
import NavButtonLarge from '@/components/navButtonLarge';
import Layout from '@/components/layout';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';

export default function Home() {
  const aboutRef = useRef(null);
  const router = useRouter();

  const { setPageState } = useAppContext();

  const [clickModifier, setClickModifier] = useState(0);

  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.style.animation = 'bounce-in-right 0.3s var(--ease-out-back) forwards';
      setPageState(0);
    }
  }, [router.query]);

  return (
    <Layout
      title="Andrew Dai's Portfolio Site"
      description="16-year-old programmer from Toronto with interests in photography, urban planning, and politics. Currently at 8x consecutive hackathon wins and counting."
      url="https://andrewd.ai/"
      image="https://andrewd.ai/images/home_screenshot.jpeg"
      clickModifier={clickModifier}
      setClickModifier={setClickModifier}
      router={router}
    >
      <div ref={aboutRef} className="flex-col gap-2">
        <AboutPage />
        <div className="flex w-full justify-center">
          <NavButtonLarge
            className="flex"
            buttonText={"see what else i've made"}
            targetPage={1}
            setClickModifier={setClickModifier}
            router={router}
          />
        </div>
      </div>
    </Layout>
  );
}
