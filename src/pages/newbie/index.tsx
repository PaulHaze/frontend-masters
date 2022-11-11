import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';

import { CardThumbLink, FeedbackContainer } from '@/features/newbie';

const Newbie: NextPage = () => {
  return (
    <MainLayout>
      <div className="min-h-[100vh]  pt-10">
        <div className="flex max-w-lg mx-auto justify-center flex-wrap gap-2">
          <CardThumbLink />
          <FeedbackContainer />
        </div>
      </div>
    </MainLayout>
  );
};

export default Newbie;
