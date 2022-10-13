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

  const setMode = (mode: string) => {
    switch (mode) {
      case 'dark':
        setDarkMode(true);
        break;
      case 'light':
        setDarkMode(false);
        break;
      case 'toggle':
        setDarkMode((prevMode) => !prevMode);
        break;
      default:
        break;
    }
  };
  return (
    <div className={`w-full antialiased ${darkMode ? 'dark' : ''}`}>
      {meta}
      <div className="bg-white w-full dark:bg-slate-800 dark:text-offwhite ">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          setMode={setMode}
        />
        <div>{children}</div>
      </div>
    </div>
  );
}
