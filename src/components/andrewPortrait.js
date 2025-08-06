import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';

const portraits = [
  [
    '/images/andrew/andrew_northwest.png',
    '/images/andrew/andrew_north.png',
    '/images/andrew/andrew_northeast.png',
  ],
  [
    '/images/andrew/andrew_west.png',
    '/images/andrew/andrew_neutral.png',
    '/images/andrew/andrew_east.png',
  ],
  [
    '/images/andrew/andrew_southwest.png',
    '/images/andrew/andrew_south.png',
    '/images/andrew/andrew_southeast.png',
  ],
];

export default function AndrewPortrait({}) {
  const { isMobile, portraitState, setPortraitState } = useAppContext();
  const [activeIndex, setActiveIndex] = useState([0, 2]);
  const containerRef = useRef(null);
  const imageRefs = useRef({});

  useEffect(() => {
    portraits.flat().forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const onPointerMove = (e) => {
      if (!containerRef.current) return;
      if (portraitState === 0) {
        setTimeout(() => {
          setPortraitState(1);
        }, 300);
      }

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 3;

      const centerFactor = isMobile ? 12 : 8;

      let dx, dy;
      if (e.touches && e.touches.length > 0) {
        dx = e.touches.item(0).clientX - centerX;
        dy = e.touches.item(0).clientY - centerY;
      } else {
        dx = e.clientX - centerX;
        dy = e.clientY - centerY;
      }

      let row = 1,
        col = 1;
      if (dy < -rect.height / centerFactor) row = 0;
      else if (dy > rect.height / centerFactor) row = 2;

      if (dx < -rect.width / centerFactor) col = 0;
      else if (dx > rect.width / centerFactor) col = 2;

      if (row !== activeIndex[0] || col !== activeIndex[1]) {
        setActiveIndex([row, col]);
      }
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove);
    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="portrait-gradient-background md:bg-none-override pointer-events-none fixed bottom-0 left-[-40%] z-20 w-[180%] md:left-0 md:w-[35vw]"
      style={{
        transform: `translateY(${portraitState !== 0 || isMobile ? (isMobile || portraitState === 2 ? '62%' : '0%') : '100%'})`,
        transition: 'transform 0.3s var(--ease-out)',
      }}
    >
      {portraits.map((rows, row) =>
        rows.map((src, col) => (
          <div
            key={`${row}${col}`}
            style={{
              display: activeIndex[0] === row && activeIndex[1] === col ? 'block' : 'none',
            }}
          >
            <Image
              ref={(el) => (imageRefs.current[`${row}${col}`] = el)}
              src={src}
              alt={`Andrew Dai ${row}, ${col}`}
              width={500}
              height={500}
              priority={row === 0 && col === 2}
              className="h-full w-full"
            />
          </div>
        )),
      )}
      <div onClick={() => setPortraitState((portraitState % 2) + 1)}>
        <div className="pointer-events-auto absolute top-[34%] left-[50%] z-30 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full md:cursor-pointer"></div>
        <div className="pointer-events-auto absolute bottom-[0%] left-[54%] z-30 h-[45%] w-[85%] -translate-x-1/2 rounded-t-full md:cursor-pointer"></div>
      </div>
    </div>
  );
}
