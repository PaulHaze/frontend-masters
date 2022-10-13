import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

export type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const logoSrc = darkMode ? '/logo-desktop-dark.svg' : '/logo-desktop.svg';
  return (
    <div className="w-ful bg-white">
      <div className={styles.headerWrapper}>
        <Link href="/">
          <div className="relative w-[195px] h-[55px]">
            <Image
              layout="fill"
              className="cursor-pointer"
              src={logoSrc}
              alt="Frontend mentor logo"
            />
          </div>
        </Link>
        <button
          type="button"
          className="px-2 py-2 bg-white"
          onClick={toggleDarkMode}
        >
          SWITCH
        </button>
      </div>
    </div>
  );
}
