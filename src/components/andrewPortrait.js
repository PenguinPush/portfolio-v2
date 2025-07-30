import { useState, useEffect, useRef } from 'react';
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

const getImagePath = (path) => {
  // made for compatibility between localhost and github pages
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '';
  return `${basePath}/${cleanPath}`;
};

export default function AndrewPortrait() {
  const [activeIndex, setActiveIndex] = useState([0, 2]);
  const containerRef = useRef(null);
  const imageRefs = useRef({});
  const [portraitY, setPortraitY] = useState('100%');

  useEffect(() => {
    portraits.flat().forEach((src) => {
      const img = new window.Image();
      img.src = getImagePath(src);
    });
  }, []);

  useEffect(() => {
    const onPointerMove = (e) => {
      if (!containerRef.current) return;

      const isMobile = window.innerWidth < 768;
      const centerFactor = isMobile ? 12 : 8;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 3;

      setPortraitY(isMobile ? '62%' : '0%');

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
        transform: `translateY(${portraitY})`,
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
              src={getImagePath(src)}
              alt={`Andrew Dai ${row}, ${col}`}
              width={500}
              height={500}
              priority={row === 0 && col === 2}
              className="h-full w-full"
            />
          </div>
        )),
      )}
    </div>
  );
}
