import * as React from 'react';
import type { ReactNode } from 'react';

import { Header } from '@Components';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ meta, children }: MainLayoutProps) {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);
  return (
    <div className={`w-full antialiased transition-all ${darkMode && 'dark'}`}>
      {meta}
      <div className="bg-white w-full dark:bg-slate-800 dark:text-offwhite ">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div>{children}</div>
      </div>
    </div>
  );
}
