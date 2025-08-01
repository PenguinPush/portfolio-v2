export default function NavButtonPair({
  median,
  displayMedian,
  setDisplayMedian,
  pageState,
  setPageState,
}) {
  const labelColors = ['bg-orange-base', 'bg-yellow-base'];
  const labelHeights = [1, 1];
  const hoverOffset = 2.5;

  return (
    <>
      <div
        className="ease-out-back relative flex transition-all duration-300"
        style={{
          height: `${100 * labelHeights[pageState]}%`,
          width: `${displayMedian}%`,
        }}
      >
        <div
          className={`${labelColors[pageState]} clip-path-left absolute inset-0 rounded-l-lg transition-all`}
          style={{
            clipPath: `polygon(0 0, 100% 0, calc(100% - ${16 * labelHeights[pageState]}px) 100%, 0% 100%)`,
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
          <i className={`text-md relative right-[5px] font-normal select-none`}>about</i>
        </button>
      </div>
      <div
        className="ease-out-back relative flex transition-all duration-300"
        style={{
          height: `${100 * labelHeights[(pageState + 1) % 2]}%`,
          width: `${100 - displayMedian}%`,
        }}
      >
        <div
          className={`${labelColors[(pageState + 1) % 2]} clip-path-left absolute inset-0 rounded-r-lg transition-all`}
          style={{
            clipPath: `polygon(${16 * labelHeights[(pageState + 1) % 2]}px 0, 100% 0, 100% 100%, 0% 100%)`,
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
          <i className={`text-md relative left-[5px] font-normal select-none`}>projects</i>
        </button>
      </div>
    </>
  );
}
