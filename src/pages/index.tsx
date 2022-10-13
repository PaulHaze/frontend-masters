import type { NextPage } from 'next';
import { Meta, MainLayout } from '@/layouts';

import { DarkModeToggle } from '@/components/header/DarkModeToggle';

const Home: NextPage = () => {
  return (
    <MainLayout
      meta={
        <Meta
          title="FrontEnd Masters Projects"
          description="A home for all the challenges provided by FrontEnd Masters"
        />
      }
    >
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <h1>FrontEnd Masters Project</h1>
        <div className="mt-10">
          <DarkModeToggle />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
