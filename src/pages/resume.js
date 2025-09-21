import { useEffect } from 'react';
import Head from 'next/head';

export default function Redirect() {
  useEffect(() => {
    window.location.replace('https://andrewd.ai/Andrew_Dai_Resume.pdf');
  }, []);
    return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
