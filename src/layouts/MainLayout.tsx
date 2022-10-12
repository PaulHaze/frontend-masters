import type { ReactNode } from 'react';

type MainLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export function MainLayout({ meta, children }: MainLayoutProps) {
  return (
    <div className="w-full px-1 antialiased text-gray-700">
      {meta}
      <div>{children}</div>
    </div>
  );
}
