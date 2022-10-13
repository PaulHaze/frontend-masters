import type { ReactNode } from 'react';

import { Header } from '@Components';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ meta, children }: MainLayoutProps) {
  return (
    <div className="w-full antialiased text-gray-700">
      {meta}
      <Header />
      <div>{children}</div>
    </div>
  );
}
