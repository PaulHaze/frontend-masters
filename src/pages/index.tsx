import type { NextPage } from 'next';
import { MainLayout } from '@Layouts';

import Link from 'next/link';

import { CardThumbLink, FeedbackThumbLink } from '@/features';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center">
        <Link
          href="/newbie"
          className="cursor-pointer font-bold text-xl text-slate-400 self-start pl-10 mb-5"
        >
          Newbie Challenges:
        </Link>
        <div className="flex">
          <CardThumbLink />
          <FeedbackThumbLink />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
