import * as React from 'react';
import type { ReactNode } from 'react';

import { Header } from '@Components';

import { ThemeContext } from '@/context/ThemeContext';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ meta, children }: MainLayoutProps) {
  const { darkMode } = React.useContext(ThemeContext);
  return (
    <div className={`w-full antialiased ${darkMode ? 'dark' : ''}`}>
      {meta}
      <div className="bg-white w-full dark:bg-slate-800 dark:text-offwhite ">
        <Header darkMode={darkMode} />
        <div>{children}</div>
      </div>
    </div>
  );
}
