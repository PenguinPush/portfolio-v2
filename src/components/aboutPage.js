import Link from 'next/link';

const diamondListClass =
  'group ease-out-back diamond-list-decoration relative pr-2 transition duration-300 hover:translate-x-1 active:translate-x-1 md:pr-4';

const arrowListClass =
  'group ease-out-back arrow-list-decoration relative translate-x-4 transition duration-300 hover:translate-x-5 active:translate-x-5';

export default function AboutPage({}) {
  return (
    <div className="p-2">
      <ul className="list-none space-y-4 px-4 leading-relaxed md:pr-0 md:pl-8">
        <h2 className={diamondListClass}>
          CS student @ Waterloo who builds and scales to impact many: interested in{' '}
          <Link
            className="hover-highlight-red"
            content="📸 photography"
            href="https://www.instagram.com/penguinpush.photos"
            target="_blank"
          >
            📷 photography
          </Link>
          , {/*<a className="hover-highlight" content="🌆 urban planning">*/}
          {/*🏙️*/}
          urban planning
          {/*</a>*/}, and {/*<a className="hover-highlight" content="🌏 politics">*/}
          {/*🌎*/}
          politics
          {/*</a>*/}.
        </h2>
        <h2 className={diamondListClass}>
          <strong>currently i&#39;m...</strong>
          <p className={arrowListClass}>
            scaling{' '}
            <Link className="hover-highlight-red" content="🍇 JAMHacks" href="/projects/#jamhacks">
              🍇 JAMHacks
            </Link>
            {''}, Canada&#39;s largest high school hackathon, by +41.5% hackers as it's head
            organizer (and full-stack dev)
          </p>
          <p className={arrowListClass}>
            building an open source{' '}
            <Link
              className="hover-highlight-red"
              content="💽 hashing tool"
              href="/projects/#cullergrader"
            >
              💾 hashing tool
            </Link>{' '}
            to group photos by visual similarity, saving photographers like me hours of sorting
          </p>
        </h2>
        <h2 className={diamondListClass}>
          <strong>recently, i&#39;ve...</strong>
          <p className={arrowListClass}>
            organized an overnight hackathon at{' '}
            <Link
              className="hover-highlight-red"
              content="🟨 YCombinator HQ"
              href="https://events.ycombinator.com/metorial-yc25"
              target="_blank"
            >
              🟧 YCombinator HQ
            </Link>{' '}
            in collaboration with Metorial (YC F25)
          </p>
          <p className={arrowListClass}>
            designed an animal{' '}
            <Link
              className="hover-highlight-red"
              content="🐼️ classification pipeline"
              href="/projects/#faunadex"
            >
              🐻 classification pipeline
            </Link>{' '}
            using semantic search; classifies without species-specific photo training
          </p>
          <p className={arrowListClass}>
            made an agentic tool to visually build{' '}
            <Link
              className="hover-highlight-red"
              content="⚙️ API workflows"
              href="/projects/#workflow"
            >
              ⚙️ API workflows
            </Link>
            {''}, powered by Gemini agents and a high-speed RAG system
          </p>
          <p className={arrowListClass}>
            replicated the same{' '}
            <Link
              className="hover-highlight-red"
              content="🔑 quantum encryption method"
              href="/projects/#quantum"
            >
              🔑 quantum encryption method
            </Link>
            {''} that governments use for national security, just for fun
          </p>
        </h2>
        <h2 className={diamondListClass}>
          <strong>stats breakdown:</strong>
          <p className={arrowListClass}>10x (consecutive) hackathon wins out of 18 attended</p>
          <p className={arrowListClass}>AIME &#39;25 qualifier, top 0.8% CEMC Cayley, COMC 54/80</p>
          <p className={arrowListClass}>3 yrs of experience w/ Python and ML/AI libraries</p>
          <p className={arrowListClass}>6 yrs w/ object-oriented-programming, C#, &amp; Unity</p>
        </h2>
      </ul>
    </div>
  );
}
