import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from 'next-themes';

import { DarkModeToggle } from './DarkModeToggle';

import styles from './Header.module.scss';

// export type Mode = 'dark' | 'light' | 'toggle';

// export type HeaderProps = {
//   darkMode: boolean;
// };

export function Header() {
  const { theme } = useTheme();
  const logoSrc =
    theme === 'dark' ? '/logo-desktop-dark.svg' : '/logo-desktop.svg';
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
        <DarkModeToggle />
      </div>
    </div>
  );
}
