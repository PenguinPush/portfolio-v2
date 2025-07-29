const hoverOffset = 2.5;

export function updateMedian(targetMedian, setMedian, setDisplayMedian) {
  let signedHoverOffset;

  if (targetMedian >= 50) {
    signedHoverOffset = hoverOffset;
  } else {
    signedHoverOffset = -hoverOffset;
  }

  setMedian(targetMedian);
  setDisplayMedian(targetMedian + signedHoverOffset * 2);
  setTimeout(() => setDisplayMedian(targetMedian + signedHoverOffset), 150);
}

export default function NavButtons({
  median,
  displayMedian,
  setMedian,
  setDisplayMedian,
  leftLabel,
  rightLabel,
}) {
  return (
    <>
      <div
        className="relative flex h-full transition-all"
        style={{
          width: `${displayMedian}%`,
          transitionTimingFunction: 'var(--ease-out-back)',
        }}
      >
        <div
          className="bg-yellow-dark clip-path-left absolute inset-0 rounded-l-lg"
          style={{
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0% 100%)',
          }}
        ></div>
        <button
          className="relative z-1 h-full w-full cursor-pointer bg-transparent"
          onMouseEnter={() => setDisplayMedian(median + hoverOffset)}
          onMouseLeave={() => setDisplayMedian(median)}
          onClick={() => updateMedian(70, setMedian, setDisplayMedian, hoverOffset)}
        >
          <i className="relative right-[5px]">{leftLabel}</i>
        </button>
      </div>
      <div
        className="relative flex h-full transition-all"
        style={{
          width: `${100 - displayMedian}%`,
          transitionTimingFunction: 'var(--ease-out-back)',
        }}
      >
        <div
          className="bg-yellow-dark clip-path-right absolute inset-0 rounded-r-lg"
          style={{
            clipPath: 'polygon(20px 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        ></div>
        <button
          className="relative z-1 h-full w-full cursor-pointer bg-transparent"
          onMouseEnter={() => setDisplayMedian(median - hoverOffset)}
          onMouseLeave={() => setDisplayMedian(median)}
          onClick={() => updateMedian(30, setMedian, setDisplayMedian, hoverOffset)}
        >
          <i className="relative left-[5px]">{rightLabel}</i>
        </button>
      </div>
    </>
  );
}
