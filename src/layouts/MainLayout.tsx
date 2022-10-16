import * as React from 'react';
import type { ReactNode } from 'react';

import { Header } from '@Components';
import { Meta } from './Meta';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full antialiased">
      <Meta
        title="FrontEnd Masters Projects"
        description="A home for all the challenges provided by FrontEnd Masters"
      />
      <div className="w-full">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
