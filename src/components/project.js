import React, { use, useState } from 'react';

export default function Project({ name, description, image, techStack }) {
  const [gradientPosition, setGradientPosition] = useState('-110%');
  const [hoverModifier, setHoverModifier] = useState(0);
  const [clickModifier, setClickModifier] = useState(0);

  return (
    <div
      className="ease-out-back relative left-1/2 min-h-32 -translate-x-1/2 overflow-hidden rounded-lg transition-all duration-300"
      onPointerEnter={() => {
        setHoverModifier(2.5);
        setGradientPosition('-15%');
      }}
      onPointerLeave={() => {
        setHoverModifier(0);
        setClickModifier(0);
        setGradientPosition('-110%');
      }}
      onMouseDown={() => setClickModifier(2.5)}
      onTouchStart={() => setClickModifier(2.5)}
      onClick={() => setClickModifier(0)}
      style={{
        width: `${100 + hoverModifier + clickModifier}%`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300"
        style={{
          scale: `1 ${2 - (100 + hoverModifier + clickModifier) / 100}`,
          willChange: 'width transform',
          background: `no-repeat center url(${image})`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className="bg-orange-base ease-out-back absolute inset-0 transition-all duration-300"
          style={{
            transform: `translateX(${gradientPosition}) skewX(-25deg)`,
            width: '130%',
            willChange: 'transform',
          }}
        ></div>
      </div>
      <button className="absolute inset-0 z-1 cursor-pointer flex-col items-start justify-center overflow-hidden bg-transparent px-4 md:px-8">
        <p className="bg-red-highlight absolute bottom-0 left-0 w-full px-2 text-left align-text-bottom font-bold text-white md:px-4 md:text-lg">
          {name}
        </p>
      </button>
    </div>
  );
}
