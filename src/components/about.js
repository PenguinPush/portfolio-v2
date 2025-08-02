const diamondListClass =
  'group ease-out-back diamond-list-decoration relative pr-2 transition duration-300 hover:translate-x-1 active:translate-x-1 md:pr-4';

const arrowListClass =
  'group ease-out-back arrow-list-decoration relative translate-x-4 transition duration-300 hover:translate-x-5 active:translate-x-5';

export default function About({}) {
  return (
    <div className="p-2">
      <ul className="list-none space-y-1 pl-4 leading-relaxed md:pl-8">
        <li className={diamondListClass}>
          16-year-old programmer from Toronto with interests in{' '}
          <a className="hover-highlight" content="📸 photography">
            📷 photography
          </a>
          ,{' '}
          <a className="hover-highlight" content="🌆 urban planning">
            🏙️ urban planning
          </a>
          , and{' '}
          <a className="hover-highlight" content="🌏 politics">
            🌎 politics
          </a>
          .
        </li>
        <li className={diamondListClass}>
          stats breakdown:
          <p className={arrowListClass}>8x (consecutive) hackathon wins out of 13 attended</p>
          <p className={arrowListClass}>3 yrs of experience w/ Python and ML/AI libraries</p>
          <p className={arrowListClass}>6 yrs w/ object-oriented-programming, C#, &amp; Unity</p>
        </li>
        <li className={diamondListClass}>
          recently, i&#39;ve...
          <p className={arrowListClass}>
            built a{' '}
            <a className="hover-highlight" content="💽 hashing tool">
              💾 hashing tool
            </a>{' '}
            to group photos by visual similarity, saving photographers like me hours of culling
            photos
          </p>
          <p className={arrowListClass}>
            designed an animal species{' '}
            <a className="hover-highlight" content="🐼️ classification pipeline">
              🐻 classification pipeline
            </a>{' '}
            using visual descriptions + semantic search; can classify without individually training
            on photos of each species
          </p>
          <p className={arrowListClass}>
            made{' '}
            <a className="hover-highlight" content="🦾 a tool">
              💪 a tool
            </a>{' '}
            for home physiotherapy, using Nintendo Switch controllers to track movements & monitor
            heart rate (with the built-in IR Camera!)
          </p>
        </li>
        <li className={diamondListClass}>
          currently i&#39;m...
          <p className={arrowListClass}>
            {' '}
            <a className="hover-highlight" content="Ontario Competitive Mathematics Committee">
              Ontario Competitive Mathematics Committee
            </a>{' '}
            sponsorship lead
          </p>
          <p className={arrowListClass}>president and exec of my school&#39;s CS and math clubs</p>
          <p className={arrowListClass}>
            head organizer @{' '}
            <a className="hover-highlight" content="hack::peel">
              hack::peel
            </a>
            {''}, hosting 100+ hackers
          </p>
        </li>
      </ul>
    </div>
  );
}
