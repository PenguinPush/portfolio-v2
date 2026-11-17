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
  // Local state: hover/click changes only re-render this component, not the whole page
  const [radiusVh, setRadiusVh] = useState(radiusDefault);
  const radiusRef = useRef(radiusDefault);
  const mouseDownRef = useRef(false);

  // Listeners are registered once and read the latest values through refs
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

  if (isMobile) {
    return (
      <div className="dotted-background-white pointer-events-none fixed inset-0 -z-10 h-full w-full" />
    );
  }

  // A fixed-size circle animated with transform: scale (GPU-composited) instead of clip-path (full repaint)
  const baseRadius = radiusDefault + (isTablet ? radiusTabletMod : 0);
  const scale = (radiusVh + (isTablet ? radiusTabletMod : 0)) / baseRadius;

  return (
    <div
      className="dotted-background-white ease-out-back pointer-events-none fixed top-1/2 left-1/2 -z-10 rounded-full transition-transform duration-300"
      style={{
        width: `${baseRadius * 2}vh`,
        height: `${baseRadius * 2}vh`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        willChange: 'transform',
      }}
    />
  );
}
