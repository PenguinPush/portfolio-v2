import BackgroundCircle from '@/components/backgroundCircle';
import AndrewPortrait from '@/components/andrewPortrait';
import NavButtonPair from '@/components/navButtonPair';
import Footer from '@/components/footer';

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
        <div className="relative z-0 flex min-h-[100dvh] flex-col gap-2 p-4 text-sm tracking-tight md:max-w-[740px] md:p-12 md:text-lg md:tracking-normal">
          <BackgroundCircle />
          <div className="flex flex-col items-center gap-2 px-4">
            <Link
              className="hover-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
              href="/"
              onMouseDown={() => setClickModifier(2.5)}
              onTouchStart={() => setClickModifier(2.5)}
              onClick={() => setClickModifier(0)}
            >
              <h1>Andrew Dai</h1>
            </Link>
            <div className="flex h-8 w-full flex-row items-center">
              <NavButtonPair clickModifier={clickModifier} setClickModifier={setClickModifier} />
            </div>
          </div>
          <div className="flex flex-grow flex-col gap-2">
            <div className="flex flex-grow flex-col">{children}</div>
            <Footer/>
            <div
              className="pointer-events-none absolute bottom-10 z-10 h-[60dvh] w-[45dvh] transition-all ease-out"
              aria-hidden="true"
              style={{
                left: 'calc(50% + 270px)',
                imageRendering: 'pixelated',
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
