export default function NavButtons({
  median,
  displayMedian,
  setDisplayMedian,
  setPageState,
}) {
  const leftLabelColor = median > 50 ? 'bg-orange-base' : 'bg-yellow-base';
  const rightLabelColor = median < 50 ? 'bg-orange-base' : 'bg-yellow-base';
  const hoverOffset = 2.5;

  return (
    <>
      <div
        className="ease-out-back relative flex h-full transition-all duration-300"
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
          onPointerEnter={() => setDisplayMedian(median + hoverOffset)}
          onPointerLeave={() => setDisplayMedian(median)}
          onMouseDown={() => setDisplayMedian(displayMedian + hoverOffset)}
          onMouseUp={() => {
            setPageState(0);
            setDisplayMedian(70 + hoverOffset);
          }}
          onTouchStart={() => setDisplayMedian(displayMedian + hoverOffset)}
          onTouchEnd={() => {
            setPageState(0);
            setDisplayMedian(70 + hoverOffset);
          }}
        >
          <i className="text-md relative right-[5px] font-normal select-none">About</i>
        </button>
      </div>
      <div
        className="ease-out-back relative flex h-full transition-all duration-300"
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
          onPointerEnter={() => setDisplayMedian(median - hoverOffset)}
          onPointerLeave={() => setDisplayMedian(median)}
          onMouseDown={() => setDisplayMedian(displayMedian - hoverOffset)}
          onMouseUp={() => {
            setPageState(1);
            setDisplayMedian(30 - hoverOffset);
          }}
          onTouchStart={() => setDisplayMedian(displayMedian - hoverOffset)}
          onTouchEnd={() => {
            setPageState(1);
            setDisplayMedian(30 - hoverOffset);
          }}
        >
          <i className="text-md relative left-[5px] font-normal select-none">Projects</i>
        </button>
      </div>
    </>
  );
}
