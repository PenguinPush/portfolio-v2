import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About({
  displayMedian,
  setDisplayMedian,
  setPageState,
  getImagePath,
  isMobile,
}) {
  const diamondListClass =
    'group ease-out-back diamond-list-decoration relative pr-2 transition duration-300 hover:translate-x-1 active:translate-x-1 md:pr-4';

  const arrowListClass =
    'group ease-out-back arrow-list-decoration relative translate-x-4 transition duration-300 hover:translate-x-5 active:translate-x-5';

  const [buttonScale, setButtonScale] = useState(1);
  const [gradientPosition, setGradientPosition] = useState('-110%');

  return (
    <div className="p-2">
      <ul className="list-none space-y-1 pl-4 leading-relaxed md:pl-8">
        <li className={diamondListClass}>
          16-year-old programmer from Toronto with interests in{' '}
          <a className="hover-highlight" content="📸 photography">
            📷 photography
          </a>
          ,{' '}
          <a className="hover-highlight" content="🌆 urban planning">
            🏙️ urban planning
          </a>
          , and{' '}
          <a className="hover-highlight" content="🌍 politics">
            🌎 politics
          </a>
          .
        </li>
        <li className={diamondListClass}>
          stats breakdown:
          <p className={arrowListClass}>8x (consecutive) hackathon wins out of 13 attended</p>
          <p className={arrowListClass}>3 yrs of experience w/ Python and ML/AI libraries</p>
          <p className={arrowListClass}>6 yrs w/ object-oriented-programming, C#, &amp; Unity</p>
        </li>
        <li className={diamondListClass}>
          recently, i&#39;ve...
          <p className={arrowListClass}>
            built a{' '}
            <a className="hover-highlight" content="💽 hashing tool">
              💾 hashing tool
            </a>{' '}
            to group photos by visual similarity, saving photographers like me hours of culling
            photos
          </p>
          <p className={arrowListClass}>
            designed an animal species{' '}
            <a className="hover-highlight" content="🐼️ classification pipeline">
              🐻 classification pipeline
            </a>{' '}
            using visual descriptions + semantic search; can classify without individually training
            on photos of each species
          </p>
          <p className={arrowListClass}>
            made{' '}
            <a className="hover-highlight" content="🦾 a tool">
              💪 a tool
            </a>{' '}
            for home physiotherapy, using Nintendo Switch controllers to track movements & monitor
            heart rate (with the built-in IR Camera!)
          </p>
        </li>
        <li className={diamondListClass}>
          currently i&#39;m...
          <p className={arrowListClass}>
            {' '}
            <a className="hover-highlight" content="Ontario Competitive Mathematics Committee">
              Ontario Competitive Mathematics Committee
            </a>{' '}
            sponsorship lead
          </p>
          <p className={arrowListClass}>president and exec of my school&#39;s CS and math clubs</p>
          <p className={arrowListClass}>
            head organizer @{' '}
            <a className="hover-highlight" content="hack::peel">
              hack::peel
            </a>
            {''}, hosting 100+ hackers
          </p>
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center gap-1 pt-6 md:gap-2">
        <div
          className="relative flex h-12 w-[50%]"
          onPointerEnter={() => {
            setButtonScale(1.05);
            setGradientPosition('-12.5%');
          }}
          onPointerLeave={() => {
            setButtonScale(1.0);
            setGradientPosition('-110%');
          }}
          onMouseDown={() => {
            setButtonScale(1.1);
            setDisplayMedian(displayMedian - 2.5);
          }}
          onMouseUp={() => {
            setButtonScale(1.05);
            setPageState(1);
            setDisplayMedian(30 - 2.5);
          }}
          onTouchStart={() => {
            setButtonScale(1.1);
            setDisplayMedian(displayMedian - 2.5);
          }}
          onTouchEnd={() => {
            setButtonScale(1.0);
            setPageState(1);
            setDisplayMedian(30 - 2.5);
          }}
        >
          <div
            className="ease-out-back bg-yellow-base pointer-events-none absolute inset-0 overflow-hidden rounded-lg transition-all duration-300"
            style={{
              transform: `scale(${buttonScale}, ${2 - buttonScale})`,
            }}
          >
            <div
              className="bg-orange-base ease-out-back absolute inset-0 transition-all duration-300"
              style={{
                transform: `translateX(${gradientPosition}) skewX(-25deg)`,
                width: '120%',
              }}
            ></div>
          </div>
          <button className="relative z-1 h-full w-full cursor-pointer bg-transparent">
            <i className="relative font-normal select-none md:text-lg">
              see what else i&#39;ve made
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
