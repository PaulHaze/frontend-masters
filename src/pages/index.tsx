import type { NextPage } from 'next';
import { MainLayout } from '@Layouts';

import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <Link href="/newbie">
          <a className="w-40 aspect-[3/5] bg-gray-300 rounded flex-center">
            Newbie Thumbnail
          </a>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
