import * as React from 'react';

import { BsGithub, BsArrowRightCircleFill } from 'react-icons/bs';

export type ExternalLinkProps = {
  linkUrl: string;
  github?: boolean;
  className?: string;
};

export function ExternalLink({
  linkUrl,
  github,
  className,
}: ExternalLinkProps) {
  return (
    <div className={`external-link  ${className}`}>
      <a
        className="flex items-center justify-between  scale-100"
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {github ? 'github' : 'Challenge'}
        <span className="relative left-5">
          {github ? (
            <BsGithub size={20} />
          ) : (
            <BsArrowRightCircleFill size={20} />
          )}
        </span>
      </a>
    </div>
  );
}
