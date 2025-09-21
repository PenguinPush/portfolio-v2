import { useEffect } from 'react';
import Head from 'next/head';

export default function Redirect() {
  useEffect(() => {
    window.location.replace('https://github.com/PenguinPush');
  }, []);
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
}
