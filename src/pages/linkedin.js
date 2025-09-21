import { useEffect } from 'react';
import Head from 'next/head';

export default function Redirect() {
  useEffect(() => {
    window.location.replace('https://www.linkedin.com/in/andrew-dai-dev');
  }, []);
    return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
