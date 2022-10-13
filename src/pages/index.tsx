import type { NextPage } from 'next';
import { Meta, MainLayout } from '@/layouts';

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
      <div className="h-[100vh] flex justify-center dark:bg-slate-800 dark:text-white">
        <h1>FrontEnd Masters Project</h1>
      </div>
    </MainLayout>
  );
};

export default Home;
