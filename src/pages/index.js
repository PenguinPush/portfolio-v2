import { useState } from 'react';

import NavButtons, { updateMedian } from '../components/navButtons';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans();

export default function Main() {
  const [median, setMedian] = useState(70);
  const [displayMedian, setDisplayMedian] = useState(70);

  return (
    <div
      className={`${dmSans.className} text-md bg-yellow-base flex h-screen items-start justify-center text-white`}
    >
      <div className="flex h-screen w-full flex-col gap-2 p-4 md:max-w-[700px] md:p-12">
        <div className="flex flex-col items-center gap-4 px-4">
          <h1
            className="cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
            onClick={() => updateMedian(70, setMedian, setDisplayMedian)}
          >
            Andrew Dai
          </h1>
          <div className="flex h-8 w-full flex-row items-center">
            <NavButtons
              median={median}
              displayMedian={displayMedian}
              setMedian={setMedian}
              setDisplayMedian={setDisplayMedian}
              leftLabel="About"
              rightLabel="Projects"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
