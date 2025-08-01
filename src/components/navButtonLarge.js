import React, { useState } from 'react';

export default function NavButtonLarge({
  buttonText,
  targetPage,
  displayMedian,
  setDisplayMedian,
  setPageState,
}) {
  const medians = [70, 30];
  const hovers = [2.5, -2.5];
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
      }}
      onMouseDown={() => {
        setButtonScale(1.1);
        setDisplayMedian(displayMedian + hovers[targetPage]);
      }}
      onMouseUp={() => {
        setButtonScale(1.05);
        setPageState(targetPage);
        setDisplayMedian(medians[targetPage]);
      }}
      onTouchStart={(e) => {
        e.preventDefault();
        setButtonScale(1.1);
        setDisplayMedian(displayMedian + hovers[targetPage]);
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        setButtonScale(1.0);
        setPageState(targetPage);
        setDisplayMedian(medians[targetPage]);
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
        <i className="relative font-normal select-none md:text-lg">{buttonText}</i>
      </button>
    </div>
  );
}
