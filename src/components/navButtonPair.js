const medians = [70, 30];
const labelColors = ['bg-orange-base', 'bg-yellow-base'];
const labelHeights = [1, 1];

export default function NavButtonPair({ hoverMods, clickMods, pageState }) {
  const [hoverModifier, setHoverModifier] = hoverMods;
  const [clickModifier, setClickModifier] = clickMods;

  return (
    <>
      <div
        className="ease-out-back relative flex transition-all duration-300"
        style={{
          height: `${100 * labelHeights[pageState]}%`,
          width: `${medians[pageState] + hoverModifier + clickModifier}%`,
          willChange: 'width',
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
          onPointerEnter={() => setHoverModifier(2.5)}
          onPointerLeave={() => setHoverModifier(0)}
          onMouseDown={() => setClickModifier(2.5)}
          onTouchStart={() => setClickModifier(2.5)}
          onClick={() => {
            window.location.hash = 'about';
            setClickModifier(0);
          }}
        >
          <i className={`text-md relative right-[5px] font-normal select-none`}>about</i>
        </button>
      </div>
      <div
        className="ease-out-back relative flex transition-all duration-300"
        style={{
          height: `${100 * labelHeights[(pageState + 1) % 2]}%`,
          width: `${medians[(pageState + 1) % 2] - hoverModifier - clickModifier}%`,
          willChange: 'width',
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
          onPointerEnter={() => setHoverModifier(-2.5)}
          onPointerLeave={() => setHoverModifier(0)}
          onMouseDown={() => setClickModifier(-2.5)}
          onTouchStart={() => setClickModifier(-2.5)}
          onClick={() => {
            if (pageState !== 1) {
              window.location.hash = 'projects';
            }
            setClickModifier(0);
          }}
        >
          <i className={`text-md relative left-[5px] font-normal select-none`}>projects</i>
        </button>
      </div>
    </>
  );
}
