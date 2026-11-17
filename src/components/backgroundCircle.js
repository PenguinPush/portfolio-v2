import { useState, useEffect, useRef } from 'react';
import { useAppContext } from '@/context/AppContext';

const radiusDefault = 60;
const radiusHover = 62;
const radiusClick = 62.5;
const radiusTabletMod = 10;

const isMouseInCircle = (e, radiusVh) => {
  const { clientX, clientY } = e;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const radiusPx = radiusVh * window.innerHeight * 0.01;
  const distancePx = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

  return distancePx <= radiusPx;
};

export default function BackgroundCircle({}) {
  const { isMobile, isTablet } = useAppContext();
  const [radiusVh, setRadiusVh] = useState(radiusDefault);
  const radiusRef = useRef(radiusDefault);
  const mouseDownRef = useRef(false);

  useEffect(() => {
    const setRadius = (r) => {
      radiusRef.current = r;
      setRadiusVh(r);
    };

    const onMouseMove = (e) => {
      if (mouseDownRef.current) return;
      setRadius(isMouseInCircle(e, radiusRef.current) ? radiusHover : radiusDefault);
    };

    const onMouseDown = (e) => {
      if (isMouseInCircle(e, radiusRef.current)) {
        mouseDownRef.current = true;
        setRadius(radiusClick);
      }
    };

    const onMouseUp = (e) => {
      mouseDownRef.current = false;
      setRadius(isMouseInCircle(e, radiusRef.current) ? radiusHover : radiusDefault);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div
      className="dotted-background-white ease-out-back pointer-events-none fixed top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 transition-[clip-path] duration-300"
      style={{
        clipPath: `${isMobile ? '' : `circle(${radiusVh + (isTablet ? radiusTabletMod : 0)}vh at 50% 50%)`}`,
        willChange: 'clip-path',
      }}
    />
  );
}
