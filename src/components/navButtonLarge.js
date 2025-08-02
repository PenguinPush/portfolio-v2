import React, { useState } from 'react';

const pageHashes = ['about', 'projects'];
const clickModifiers = [2.5, -2.5];

export default function NavButtonLarge({ buttonText, targetPage, clickMods, changePage }) {
  const [clickModifier, setClickModifier] = clickMods;
  const [buttonScale, setButtonScale] = useState(1);
  const [gradientPosition, setGradientPosition] = useState('-110%');

  return (
    <div
      className="relative flex h-12 w-[50%]"
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
        window.location.hash = pageHashes[targetPage];
        setClickModifier(0);
      }}
    >
      <div
        className="ease-out-back bg-yellow-base pointer-events-none absolute inset-0 overflow-hidden rounded-lg transition-all duration-300"
        style={{
          transform: `scale(${buttonScale}, ${2 - buttonScale})`,
          willChange: 'transform',
        }}
      >
        <div
          className="bg-orange-base ease-out-back absolute inset-0 transition-all duration-300"
          style={{
            transform: `translateX(${gradientPosition}) skewX(-25deg)`,
            width: '120%',
            willChange: 'transform',
          }}
        ></div>
      </div>
      <button className="relative z-1 h-full w-full cursor-pointer bg-transparent">
        <i className="relative font-normal select-none md:text-lg">{buttonText}</i>
      </button>
    </div>
  );
}
