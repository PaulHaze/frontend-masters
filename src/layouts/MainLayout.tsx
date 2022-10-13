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
    <div className={`w-full antialiased ${darkMode && 'dark'}`}>
      {meta}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div>{children}</div>
    </div>
  );
}
