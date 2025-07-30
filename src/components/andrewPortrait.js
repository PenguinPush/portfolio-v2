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

export default function AndrewPortrait() {
  const [activeIndex, setActiveIndex] = useState([1, 1]); // [row, col]
  const containerRef = useRef(null);
  const imageRefs = useRef({});

  // Preload all images
  useEffect(() => {
    portraits.flat().forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Determine direction
      let row = 1, col = 1;
      if (dy < -rect.height / 6) row = 0;
      else if (dy > rect.height / 6) row = 2;

      if (dx < -rect.width / 6) col = 0;
      else if (dx > rect.width / 6) col = 2;

      if (row !== activeIndex[0] || col !== activeIndex[1]) {
        setActiveIndex([row, col]);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="absolute bottom-0 left-0 z-20 w-[700px]">
      {portraits.map((row, rowIndex) => (
        row.map((src, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              display: activeIndex[0] === rowIndex && activeIndex[1] === colIndex ? 'block' : 'none'
            }}
          >
            <Image
              ref={el => imageRefs.current[`${rowIndex}-${colIndex}`] = el}
              src={src}
              alt={`Andrew Dai ${rowIndex}-${colIndex}`}
              width={1000}
              height={1000}
            />
          </div>
        ))
      ))}
    </div>
  );
}
