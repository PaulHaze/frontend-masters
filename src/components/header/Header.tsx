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
    <div className="w-full">
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
          className="px-2 py-2 bg-white dark:bg-gray-500 dark:text-offwhite transition-colors duration-1000"
          onClick={toggleDarkMode}
        >
          SWITCH
        </button>
      </div>
    </div>
  );
}
