import Link from 'next/link';

const diamondListClass =
  'group ease-out-back diamond-list-decoration relative pr-2 transition duration-300 hover:translate-x-1 active:translate-x-1 md:pr-4';

const arrowListClass =
  'group ease-out-back arrow-list-decoration relative translate-x-4 m-1 transition duration-300 hover:translate-x-5 active:translate-x-5';

export default function AboutPage({}) {
  return (
    <div className="p-2">
      <ul className="list-none space-y-4 px-4 leading-relaxed md:pr-0 md:pl-8">
        <h2 className={diamondListClass}>
          CS student @ UWaterloo who builds to impact lots of people: interested in{' '}
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
            organizing Canada&#39;s largest AI hackathon with{' '}
            <Link
              className="hover-highlight-red"
              content="📊 UW DSC"
              href="/projects/#cullergrader"
            >
              📈 UW DSC
            </Link>{' '}
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
            to group photos by visual similarity, saving photographers hours of sorting
          </p>
        </h2>
        <h2 className={diamondListClass}>
          <strong>recently, i&#39;ve...</strong>
          <p className={arrowListClass}>
            scaled{' '}
            <Link className="hover-highlight-red" content="🍇 JAMHacks" href="/projects/#jamhacks">
              🍇 JAMHacks
            </Link>
            {''}, Canada&#39;s largest high school hackathon, by +42% hackers as it&#39;s head
            organizer & lead software engineer
          </p>
          <p className={arrowListClass}>
            built a semantic animal{' '}
            <Link
              className="hover-highlight-red"
              content="🐼️ identification pipeline"
              href="/projects/#faunadex"
            >
              🐻 identification pipeline
            </Link>{' '}
            using vector searches; classifying 9,000+ species without per-animal training
          </p>
          <p className={arrowListClass}>
            made a blender-inspired{' '}
            <Link
              className="hover-highlight-red"
              content="⚙️ agentic workflow builder"
              href="/projects/#workflow"
            >
              ⚙️ agentic workflow builder
            </Link>
            {''} for prototyping
          </p>
          <p className={arrowListClass}>
            automated{' '}
            <Link
              className="hover-highlight-red"
              content="🏸 badminton scoring"
              href="/projects/#badminton"
            >
              🏸 badminton scoring
            </Link>
            {''} using a physics-informed CV model
          </p>
          <p className={arrowListClass}>
            replicated{' '}
            <Link
              className="hover-highlight-red"
              content="🔑 quantum key distribution"
              href="/projects/#quantum"
            >
              🔑 quantum key distribution
            </Link>
            {''}, an unbreakable cryptography method, in my bedroom
          </p>
        </h2>
        <h2 className={diamondListClass}>
          <strong>stats breakdown:</strong>
          <p className={arrowListClass}>10x hackathons won (in a row), 4 organized, 3 judged</p>
          <p className={arrowListClass}>AIME &#39;25 qualifier, Ivy League Model UN champion, 1560 SAT</p>
          <p className={arrowListClass}>programming since age 9, shipping games on the Google Play Store</p>
        </h2>
      </ul>
    </div>
  );
}
