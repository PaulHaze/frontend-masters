import type { NextPage } from 'next';
import { MainLayout } from '@/layouts';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <h1>FrontEnd Masters Project</h1>
      </div>
    </MainLayout>
  );
};

export default Home;
