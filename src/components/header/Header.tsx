import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from '@/hooks';

import { ResponsiveButtons } from './ResponsiveButtons';
import { DarkModeSwitch } from './DarkModeSwitch';

export function Header() {
  const { isDarkMode } = useTheme();
  const logoSrc = isDarkMode ? '/logo-desktop-dark.svg' : '/logo-desktop.svg';
  return (
    <header className="w-full px-">
      <div className="max-w-lg mx-auto flex justify-between px-2 sm:px-4 md:px-8 py-5">
        <Link href="/">
          <div className="relative mt-1 w-[150px] sm:w-[180px] sm:h-[55px]">
            <Image
              fill
              className="cursor-pointer"
              src={logoSrc}
              alt="Frontend mentor logo"
            />
          </div>
        </Link>
        <div className="flex flex-grow justify-center relative right-10 sm:right-20">
          <ResponsiveButtons />
        </div>
        <DarkModeSwitch />
      </div>
    </header>
  );
}
