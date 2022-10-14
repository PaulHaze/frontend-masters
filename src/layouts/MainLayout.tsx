import * as React from 'react';
import type { ReactNode } from 'react';

import { Header } from '@Components';

import { useDarkMode } from '@/hooks/useDarkMode';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ meta, children }: MainLayoutProps) {
  const [darkMode, setMode] = useDarkMode();

  return (
    <div className={`w-full antialiased ${darkMode ? 'dark' : ''}`}>
      {meta}
      <div className="bg-white w-full dark:bg-slate-800 dark:text-offwhite ">
        <Header darkMode={darkMode} setMode={setMode} />
        <div>{children}</div>
      </div>
    </div>
  );
}
