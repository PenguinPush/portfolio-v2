import React, { useState } from 'react';

import BackgroundCircle from '@/components/backgroundCircle';
import AndrewPortrait from '@/components/andrewPortrait';
import NavButtonPair from '@/components/navButtonPair';
import Footer from '@/components/footer';
import { useAppContext } from '@/context/AppContext';

import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export default function Layout({
  children,
  title,
  description,
  url,
  image,
  clickModifier,
  setClickModifier,
}) {
  const { isMobile } = useAppContext();
  const [evilMode, setEvilMode] = useState(false);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />

        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <meta name="og:url" content={url} />
        <meta name="twitter:url" content={url} />
        <link rel="canonical" href={url} />

        <meta name="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div
        className={`${dmSans.className} dotted-background-yellow flex min-h-[100dvh] w-screen items-start justify-center overflow-x-hidden overflow-y-auto overscroll-contain font-normal text-black`}
      >
        <div className="relative z-0 flex min-h-[100dvh] flex-col gap-2 p-4 text-sm tracking-tight md:max-w-[720px] md:p-12 md:text-lg md:tracking-normal">
          <BackgroundCircle />
          <div className="flex flex-col items-center gap-2 px-4">
            <Link
              className="hover-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
              href="/"
              onMouseEnter={() => {
                if (!isMobile) {
                  setEvilMode(true);
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setEvilMode(false);
                }
              }}
              onMouseDown={() => setClickModifier(2.5)}
              onTouchStart={() => setClickModifier(2.5)}
              onClick={() => setClickModifier(0)}
            >
              <h1>Andrew Dai</h1>
            </Link>
            <div className="flex h-8 w-full flex-row items-center">
              <NavButtonPair clickModifier={clickModifier} setClickModifier={setClickModifier} />
              <div className="relative ml-2 h-8 overflow-hidden rounded-lg">
                <Image
                  src="https://pvbc.e.hackclub.app/3e192ddb-70fb-4738-8b8d-e4feeef64a15?label=visitors&style=flat-square&color=fc9f01&labelColor=ffc01a"
                  alt="page visitors"
                  width="1000"
                  height="1000"
                  style={{
                    height: '100%',
                    width: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-col gap-2">
            <div className="flex flex-grow flex-col">{children}</div>
            <Footer setEvilMode={setEvilMode} />
            <div
              className="pointer-events-none absolute bottom-10 z-10 h-[60dvh] w-[45dvh] transition-all ease-out"
              aria-hidden="true"
              style={{
                transitionDuration: evilMode ? '3s' : '150ms',
                left: evilMode ? 'calc(50% + 270px)' : '100vw',
                animation: evilMode ? 'shake 3s step-start' : 'none',
                imageRendering: 'pixelated',
                willChange: evilMode ? 'transform' : 'auto',
              }}
            >
              <Image
                src={'/images/big_evil_arrow.png'}
                alt={`BIG EVIL ARROW`}
                width={500}
                height={500}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="h-[65vw] md:h-0" aria-hidden="true"></div>
          <AndrewPortrait aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
