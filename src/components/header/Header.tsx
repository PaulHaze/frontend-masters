import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from '@/hooks';

import { DarkModeToggle } from './DarkModeToggle';
import { ResponsiveButtons } from './ResponsiveButtons';

import styles from './Header.module.scss';

export function Header() {
  const { isDarkMode } = useTheme();
  const logoSrc = isDarkMode ? '/logo-desktop-dark.svg' : '/logo-desktop.svg';
  return (
    <div className="w-full">
      <div className={styles.headerWrapper}>
        <Link href="/">
          <div className="relative mt-1 w-[150px] sm:w-[195px] sm:h-[55px]">
            <Image
              layout="fill"
              className="cursor-pointer"
              src={logoSrc}
              alt="Frontend mentor logo"
            />
          </div>
        </Link>
        <ResponsiveButtons />
        <DarkModeToggle />
      </div>
    </div>
  );
}
