
export default function NavButtons({
  median,
  displayMedian,
  setMedian,
  setDisplayMedian,
  hoverOffset,
  leftLabel,
  rightLabel,
}) {
  const leftLabelColor = median > 50 ? 'bg-orange-base' : 'bg-yellow-base';
  const rightLabelColor = median < 50 ? 'bg-orange-base' : 'bg-yellow-base';

  return (
    <>
      <div
        className="relative flex h-full transition-all ease-out-back"
        style={{
          width: `${displayMedian}%`,
        }}
      >
        <div
          className={`${leftLabelColor} clip-path-left absolute inset-0 rounded-l-lg transition-all`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 16px) 100%, 0% 100%)',
          }}
        ></div>
        <button
          className="relative z-1 h-full w-full cursor-pointer bg-transparent"
          onMouseEnter={() => setDisplayMedian(median + hoverOffset)}
          onMouseLeave={() => setDisplayMedian(median)}
          onMouseDown={() => setDisplayMedian(displayMedian + hoverOffset)}
          onMouseUp={() => {
            setMedian(70);
            setDisplayMedian(70 + hoverOffset);
          }}
        >
          <i className="text-md relative right-[5px] font-normal">{leftLabel}</i>
        </button>
      </div>
      <div
        className="relative flex h-full transition-all ease-out-back"
        style={{
          width: `${100 - displayMedian}%`,
        }}
      >
        <div
          className={`${rightLabelColor} clip-path-left absolute inset-0 rounded-r-lg transition-all`}
          style={{
            clipPath: 'polygon(16px 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        ></div>
        <button
          className="relative z-1 h-full w-full cursor-pointer bg-transparent"
          onMouseEnter={() => setDisplayMedian(median - hoverOffset)}
          onMouseLeave={() => setDisplayMedian(median)}
          onMouseDown={() => setDisplayMedian(displayMedian - hoverOffset)}
          onMouseUp={() => {
            setMedian(30);
            setDisplayMedian(30 - hoverOffset);
          }}
        >
          <i className="text-md relative left-[5px] font-normal">{rightLabel}</i>
        </button>
      </div>
    </>
  );
}
