import type { NextPage } from 'next';
import { MainLayout } from '@Layouts';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <Link href="/newbie">
          <a className="w-40 aspect-[3/5] rounded flex-center bg-slate-200 dark:bg-slate-600">
            Newbie Thumbnail
          </a>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
