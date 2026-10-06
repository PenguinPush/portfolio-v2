import React, { useState, useRef } from 'react';
import posthog from 'posthog-js';
import posthogLogger from '@/lib/posthogLogger';

const defaultLinkMessage = 'or check out my links !';
const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

export default function About() {
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

  const captureContactLink = (channel) => {
    if (isPostHogConfigured) {
      posthog.capture('contact_link_clicked', { channel });
      posthogLogger.info('portfolio contact link clicked', { channel });
    }
  };

  return (
    <>
      <div className="flex w-full justify-center md:pt-8 items-center">
        <p
          className={`underline inline-block pt-2 text-xs italic md:pt-0 md:text-sm`}
          content="or check out my links!"
        >
          {linkBoxText}
        </p>
      </div>
      <div className="flex justify-center gap-4 text-xs md:items-end md:text-lg">
        <a
          className="hover-highlight-red"
          content="💌 email"
          href="mailto:andrewdai.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('andrewdai.dev@gmail.com')}
          onMouseLeave={() => resetLinkMessage()}
          onClick={() => captureContactLink('email')}
        >
          📧 email
        </a>
        <a
          className="hover-highlight-red"
          content="🦑 github"
          href="https://github.com/PenguinPush"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('github.com/PenguinPush')}
          onMouseLeave={() => resetLinkMessage()}
          onClick={() => captureContactLink('github')}
        >
          🐙 github
        </a>
        <a
          className="hover-highlight-red"
          content="⛓️‍💥 linkedin"
          href="https://www.linkedin.com/in/andrew-dai-dev/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('linkedin.com/in/andrew-dai-dev')}
          onMouseLeave={() => resetLinkMessage()}
          onClick={() => captureContactLink('linkedin')}
        >
          🔗 linkedin
        </a>{' '}
        <a
          className="hover-highlight-red"
          content="📜 resume"
          href="https://andrewd.ai/Andrew_Dai_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkMessage('andrewd.ai/Andrew_Dai_Resume.pdf')}
          onMouseLeave={() => resetLinkMessage()}
          onClick={() => captureContactLink('resume')}
        >
          📃 resume
        </a>
      </div>
    </>
  );
}
