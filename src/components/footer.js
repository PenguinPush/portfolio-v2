import React, { useState } from 'react';

export default function About({ isMobile, setEvilMode }) {
  const [linkBoxText, setLinkBoxText] = useState('or check out my links !');

  return (
    <>
      <p
        className={`${isMobile ? '' : 'hover-underline-evil'} inline-block pt-2 text-xs italic md:pt-0 md:text-sm`}
        content="or check out my links!"
        onMouseEnter={() => {
          if (!isMobile) {
            setEvilMode(true);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            setEvilMode(false);
          }
        }}
      >
        {linkBoxText}
      </p>
      <div className="flex justify-center gap-4 text-xs md:items-end md:text-lg">
        <a
          className="hover-highlight"
          content="💌 email"
          href="mailto:andrewdai.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkBoxText('andrewdai.dev@gmail.com')}
          onMouseLeave={() => setLinkBoxText('or check out my links !')}
        >
          📧 email
        </a>
        <a
          className="hover-highlight"
          content="🦑 github"
          href="https://github.com/PenguinPush"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkBoxText('github.com/PenguinPush')}
          onMouseLeave={() => setLinkBoxText('or check out my links !')}
        >
          🐙 github
        </a>
        <a
          className="hover-highlight"
          content="⛓️‍💥 linkedin"
          href="https://www.linkedin.com/in/andrewdai-dev"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkBoxText('linkedin.com/in/andrewdai-dev')}
          onMouseLeave={() => setLinkBoxText('or check out my links !')}
        >
          🔗 linkedin
        </a>{' '}
        <a
          className="hover-highlight"
          content="📜 resume"
          href="https://penguinpush.github.io/PenguinPush/Andrew_Dai_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkBoxText('penguinpush.github.io/PenguinPush/Andrew_Dai_Resume.pdf')}
          onMouseLeave={() => setLinkBoxText('or check out my links !')}
        >
          📃 resume
        </a>{' '}
        <a
          className="hover-highlight"
          content="📂 repo"
          href="https://github.com/PenguinPush/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkBoxText('github.com/PenguinPush/portfolio-v2')}
          onMouseLeave={() => setLinkBoxText('or check out my links !')}
        >
          📁 repo
        </a>
      </div>
    </>
  );
}
