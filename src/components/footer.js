import React, { useState, useRef } from 'react';

const defaultLinkMessage = 'or check out my links !';

export default function About({ isMobile, setEvilMode }) {
  const [linkBoxText, setLinkBoxText] = useState('or check out my links !');
  const linkTimeout = useRef(null);

  const setLinkMessage = (text) => {
    if (linkTimeout.current) {
      clearTimeout(linkTimeout.current);
      linkTimeout.current = null;
    }
    setLinkBoxText(text);
  };

  const resetLinkMessage = () => {
    linkTimeout.current = setTimeout(() => {
      setLinkBoxText(defaultLinkMessage);
      linkTimeout.current = null;
    }, 70);
  };

  return (
    <>
      <div className="flex w-full justify-center md:pt-8">
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
      </div>
      <div className="flex justify-center gap-4 text-xs md:items-end md:text-lg">
        <a
          className="hover-highlight"
          content="💌 email"
          href="mailto:andrewdai.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('andrewdai.dev@gmail.com')}
          onMouseLeave={() => resetLinkMessage()}
        >
          📧 email
        </a>
        <a
          className="hover-highlight"
          content="🦑 github"
          href="https://github.com/PenguinPush"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('github.com/PenguinPush')}
          onMouseLeave={() => resetLinkMessage()}
        >
          🐙 github
        </a>
        <a
          className="hover-highlight"
          content="⛓️‍💥 linkedin"
          href="https://www.linkedin.com/in/andrew-dai-dev"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('linkedin.com/in/andrew-dai-dev')}
          onMouseLeave={() => resetLinkMessage()}
        >
          🔗 linkedin
        </a>{' '}
        <a
          className="hover-highlight"
          content="📜 resume"
          href="https://penguinpush.github.io/PenguinPush/Andrew_Dai_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() =>
            setLinkMessage('penguinpush.github.io/PenguinPush/Andrew_Dai_Resume.pdf')
          }
          onMouseLeave={() => resetLinkMessage()}
        >
          📃 resume
        </a>{' '}
        <a
          className="hover-highlight"
          content="📂 repo"
          href="https://github.com/PenguinPush/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('github.com/PenguinPush/portfolio-v2')}
          onMouseLeave={() => resetLinkMessage()}
        >
          📁 repo
        </a>
      </div>
    </>
  );
}
