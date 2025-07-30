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
  const [imgSrc, setImgSrc] = useState(portraits[1][1]);
  const imgRef = useRef(null);

  // Preload all images
  useEffect(() => {
    portraits.flat().forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Determine direction
      let row = 1,
        col = 1;
      if (dy < -rect.height / 6)
        row = 0; // north
      else if (dy > rect.height / 6) row = 2; // south

      if (dx < -rect.width / 6)
        col = 0; // west
      else if (dx > rect.width / 6) col = 2; // east

      setImgSrc(portraits[row][col]);
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <Image
        ref={imgRef}
        src={imgSrc}
        alt="Andrew Dai"
        width="700"
        height="700"
        className="absolute bottom-0 left-0 z-20"
      ></Image>
    </>
  );
}
