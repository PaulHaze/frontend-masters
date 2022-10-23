import type { NextPage } from 'next';
import { MainLayout } from '@Layouts';

import Link from 'next/link';

import { CardThumbLink } from '@/features/newbie';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center">
        <Link href="/newbie" className="cursor-pointer">
          <a className="font-bold text-xl text-slate-400 self-start pl-10 mb-5">
            Newbie Challenges:
          </a>
        </Link>
        <CardThumbLink />
      </div>
    </MainLayout>
  );
};

export default Home;
