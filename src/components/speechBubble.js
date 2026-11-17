import { useAppContext } from '@/context/AppContext';
import { getPortraitPosition } from '@/components/andrewPortrait';

export default function SpeechBubble({ header, body = [] }) {
  const { isMobile, portraitState } = useAppContext();
  const { centerX, centerY } = getPortraitPosition(isMobile, portraitState);

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <div
        aria-hidden="true"
        className="bg-red-highlight absolute inset-0"
        style={{
          clipPath: `polygon(calc(50% - 16px) 50%, calc(50% + 16px) 50%, ${centerX} ${centerY})`,
          transition: 'clip-path 0.3s var(--ease-out)',
        }}
      />
      <div className="pointer-events-auto absolute top-1/2 left-1/2 w-full max-w-[786px] -translate-x-1/2 -translate-y-1/2 px-4 md:px-12">
        <div
          className="bg-red-highlight ease-out-back relative flex min-h-48 w-full min-w-0 flex-col gap-2 rounded-2xl p-3 px-4 text-center text-xs font-normal wrap-anywhere text-white transition-all duration-300 md:min-h-52 md:p-4 md:px-6 md:text-base"
        >
          <h2 className="font-bold">
            {header}
          </h2>
          <div className="space-y-2">
            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
