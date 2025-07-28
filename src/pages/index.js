import Spinner from '../components/spinner';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans();

export default function Main() {
  return (
    <div
      className={`${dmSans.className} flex items-start justify-center text-lg text-white h-screen bg-yellow-base`}>
      <div className="flex flex-col p-4 md:p-12 h-screen gap-2 w-full md:max-w-[700px]">
        <h1 className="text-6xl font-black tracking-tighter text-center text-nowrap">Andrew Dai</h1>
        <div className="flex flex-col items-center px-4">
          <Spinner/>
          </div>
        </div>
      </div>
  );
}
