import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

const medians = [70, 30];
const labelColors = ['bg-orange-base', 'bg-yellow-base'];
const labelHeights = [1, 1];

export default function NavButtonPair({ clickModifier, setClickModifier }) {
  const { hoverModifier, setHoverModifier, pageState } = useAppContext();

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
        <Link
          href="/"
          className="relative z-1 flex h-full w-full cursor-pointer items-center justify-center bg-transparent"
          onPointerEnter={() => setHoverModifier(2.5)}
          onPointerLeave={() => setHoverModifier(0)}
          onMouseDown={() => setClickModifier(2.5)}
          onTouchStart={() => setClickModifier(2.5)}
          onClick={() => setClickModifier(0)}
        >
          <i className="text-md relative right-[5px] font-normal select-none">about</i>
        </Link>
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
        <Link
          href="/projects"
          className="relative z-1 flex h-full w-full cursor-pointer items-center justify-center bg-transparent"
          onPointerEnter={() => setHoverModifier(-2.5)}
          onPointerLeave={() => setHoverModifier(0)}
          onMouseDown={() => setClickModifier(-2.5)}
          onTouchStart={() => setClickModifier(-2.5)}
          onClick={() => setClickModifier(0)}
        >
          <i className={`text-md relative left-[5px] font-normal select-none`}>projects</i>
        </Link>
      </div>
    </>
  );
}
