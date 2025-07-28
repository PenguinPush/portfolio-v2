import { useRef, useEffect } from 'react';

export default function Spinner() {
  const containerRef = useRef(null);
  const targetRefs = useRef([]);

  const items = [
    '8x Hackathon Winner',
    'Software Engineer',
    'Photographer',
    'Student Leader',
    'Competitive Programmer',
    'Mathlete',
    'Gamer',
  ];
  const duplicatedItems = [...items, ...items, ...items, ...items];

  let currentIndex = 0;

  const spinTo = (index) => {
    let targetIndex;
    const length = items.length;

    // always target an item to the right
    if (currentIndex < index % length) {
      targetIndex = index % length;
    } else {
      targetIndex = index % length + length;
    }

    if (!containerRef.current || !targetRefs.current[targetIndex]) return;
    currentIndex = targetIndex % length;

    // target the right side
    const container = containerRef.current;
    const target = targetRefs.current[targetIndex + length];

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const offset = targetRect.left - containerRect.left - containerRect.width / 2 + targetRect.width / 2;
    container.style.transform = `translateX(${-offset}px)`;

    // loop back the left-side item if we shifted a loop forward
    if (currentIndex < targetIndex) {
      setTimeout(() => {
        const target = targetRefs.current[targetIndex];

        const targetRect = target.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const offset = targetRect.left - containerRect.left - containerRect.width / 2 + targetRect.width / 2;

        // make resetting of transform instantaneous
        container.classList.remove('transition-transform');
        container.classList.remove('duration-500');
        container.style.transform = `translateX(${-offset}px)`;

        setTimeout(() => {
          container.classList.add('transition-transform');
          container.classList.add('duration-500');
        }, 50);
      }, 500);
    }

    return (targetIndex);
  };

  useEffect(() => {
    window.spinTo = spinTo;
    spinTo(0);

    const interval = setInterval(() => {
      spinTo(currentIndex + 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (<div className="flex w-full h-8 items-center justify-center overflow-clip bg-yellow-dark">
    <div
      ref={containerRef}
      className="relative flex flex-row gap-8 text-nowrap top-[1px]">
      {duplicatedItems.map((text, index) => (
        <p
          key={index}
          ref={(i) => (targetRefs.current[index] = i)}
        >
          {text}</p>
      ))}
    </div>
  </div>);
}
