import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

const radiusDefault = 60;
const radiusHover = 62;
const radiusClick = 62.5;

const isMouseInCircle = (e, radiusVh) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const radiusPx = radiusVh * window.innerHeight * 0.01;
  const distancePx = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

  return distancePx <= radiusPx;
};

export default function BackgroundCircle({}) {
    const { isMobile, radiusVh, setRadiusVh } = useAppContext();
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!mouseDown && isMouseInCircle(e, radiusVh)) {
        setRadiusVh(radiusHover);
      } else if (!mouseDown) {
        setRadiusVh(radiusDefault);
      }
    };

    const onMouseDown = (e) => {
      if (isMouseInCircle(e, radiusVh)) {
        setMouseDown(true);
        setRadiusVh(radiusClick);
      }
    };

    const onMouseUp = (e) => {
      setMouseDown(false);
      if (isMouseInCircle(e, radiusVh)) {
        setRadiusVh(radiusHover);
      } else {
        setRadiusVh(radiusDefault);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [radiusVh, setRadiusVh, mouseDown]);

  return (
    <>
      <div
        className="dotted-background-white ease-out-back pointer-events-none fixed top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 transition-[clip-path] duration-300"
        style={{
          clipPath: `${isMobile ? '' : `circle(${radiusVh}vh at 50% 50%)`}`,
          willChange: 'clip-path',
        }}
      ></div>
    </>
  );
}
