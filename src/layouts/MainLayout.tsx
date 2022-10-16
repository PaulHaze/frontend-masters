import * as React from 'react';
import type { ReactNode } from 'react';

import { Header } from '@Components';
import { useTheme } from 'next-themes';
import { useThemeContext } from '@/context/ThemeContext';
import { Meta } from './Meta';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const { darkMode } = useThemeContext();
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className={`w-full antialiased ${darkMode ? 'dark' : ''}`}>
      <Meta
        title="FrontEnd Masters Projects"
        description="A home for all the challenges provided by FrontEnd Masters"
      />
      <div className="bg-white w-full dark:bg-slate-800 dark:text-offwhite ">
        <Header darkMode={darkMode} />
        <div>{children}</div>
      </div>
    </div>
  );
}
