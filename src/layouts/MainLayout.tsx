import * as React from 'react';
import type { ReactNode } from 'react';

import { Meta } from '@Layouts';

import { Header } from '@Components';

import { ThemeContext } from '@/context/ThemeContext';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  const { darkMode } = React.useContext(ThemeContext);
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
