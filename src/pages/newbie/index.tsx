import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';

const Newbie: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <h1>Newbie section</h1>
      </div>
    </MainLayout>
  );
};

export default Newbie;
