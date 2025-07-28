import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans();

export default function Home() {
  return (
    <div
      className={`${dmSans.className} flex items-start justify-center text-lg text-black h-screen bg-yellow-base`}>
      <div className="flex flex-col p-4 md:p-12 h-screen gap-2 w-full md:max-w-[700px]">
        <h1 className="text-6xl font-black tracking-tighter text-center text-nowrap">Andrew Dai</h1>
        <div className="flex flex-col items-center px-4">
          <div className="flex w-full h-8 items-center justify-center overflow-clip bg-yellow-dark">
            <div className="relative flex gap-8 text-nowrap top-[1px]">
              <p>8x Hackathon Winner</p>
              <p>Software Engineer</p>
              <p>Photographer</p>
              <p>A</p>
              <p>Gamer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
