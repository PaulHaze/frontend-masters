import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from '@/hooks';

import { DarkModeToggle } from './DarkModeToggle';
import { ResponsiveButtons } from './ResponsiveButtons';

export function Header() {
  const { isDarkMode } = useTheme();
  const logoSrc = isDarkMode ? '/logo-desktop-dark.svg' : '/logo-desktop.svg';
  return (
    <header className="w-full px-1">
      <div className="max-w-lg mx-auto flex justify-between px-2 sm:px-4 md:px-8 py-5">
        <Link href="/">
          <div className="relative mt-1 w-[150px] sm:w-[195px] sm:h-[55px] mr-2">
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
    </header>
  );
}
