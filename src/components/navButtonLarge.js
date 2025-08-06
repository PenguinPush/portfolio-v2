import React, { useState } from 'react';
import Link from 'next/link';

const pageUrls = ['/', '/projects'];
const clickModifiers = [2.5, -2.5];

export default function NavButtonLarge({ buttonText, targetPage, setClickModifier }) {
  const [buttonScale, setButtonScale] = useState(1);
  const [gradientPosition, setGradientPosition] = useState('-110%');

  return (
    <Link
      className="relative z-1 flex h-12 w-[50%] cursor-pointer items-center justify-center bg-transparent"
      href={pageUrls[targetPage]}
      onPointerEnter={() => {
        setButtonScale(1.05);
        setGradientPosition('-12.5%');
      }}
      onPointerLeave={() => {
        setButtonScale(1.0);
        setGradientPosition('-110%');
        setClickModifier(0);
      }}
      onMouseDown={() => {
        setButtonScale(1.1);
        setClickModifier(clickModifiers[targetPage]);
      }}
      onTouchStart={() => {
        setButtonScale(1.1);
        setClickModifier(clickModifiers[targetPage]);
      }}
      onClick={() => {
        setButtonScale(1.0);
        setClickModifier(0);
      }}
    >
      <div
        className="ease-out-back bg-blue-highlight pointer-events-none absolute inset-0 overflow-hidden rounded-lg transition-all duration-300"
        style={{
          transform: `scale(${buttonScale}, ${2 - buttonScale})`,
          willChange: 'transform',
        }}
      >
        <div
          className="ease-out-back absolute inset-0 bg-white transition-all duration-300"
          style={{
            transform: `translateX(${gradientPosition}) skewX(-25deg)`,
            width: '120%',
            willChange: 'transform',
          }}
        ></div>
      </div>
      <i className="relative font-normal select-none md:text-lg">{buttonText}</i>
    </Link>
  );
}
