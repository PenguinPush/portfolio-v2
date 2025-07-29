import { useState } from 'react';
import NavButtons, { updateMedian } from '@/components/navButtons';
import BackgroundCircle from '@/components/backgroundCircle';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans();

export default function Main() {
  const hoverOffset = 2.5;
  const [median, setMedian] = useState(70);
  const [displayMedian, setDisplayMedian] = useState(70);
  const [radiusVh, setRadiusVh] = useState(60);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <div
      className={`${dmSans.className} dotted-background-yellow flex min-h-screen items-start justify-center overflow-auto font-medium text-black`}
    >
      <div className="z-0 flex h-[800px] w-full flex-col gap-2 p-4 md:max-w-[700px] md:p-12">
        <BackgroundCircle radiusVh={radiusVh} setRadiusVh={setRadiusVh} />
        <div className="flex flex-col items-center gap-2 px-4">
          <h1
            className="animated-underline cursor-pointer text-center text-6xl font-black tracking-tighter text-nowrap"
            onMouseDown={() => setDisplayMedian(displayMedian + hoverOffset)}
            onMouseUp={() => {
              setMedian(70);
              setDisplayMedian(70);
            }}
          >
            Andrew Dai
          </h1>
          <div className="flex h-8 w-full flex-row items-center">
            <NavButtons
              median={median}
              displayMedian={displayMedian}
              setMedian={setMedian}
              setDisplayMedian={setDisplayMedian}
              hoverOffset={hoverOffset}
              leftLabel="About"
              rightLabel="Projects"
            />
          </div>
        </div>
        <div>
          <div className="p-4 text-lg">
            <ul className="list-none space-y-2 pl-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="group ease-out-back relative transform transition before:absolute before:-left-6 before:transition before:content-['⬥'] hover:translate-x-1 hover:before:rotate-45"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
