import type { NextPage } from 'next';
import { MainLayout } from '@Layouts';

import Link from 'next/link';

import { useThemeContext } from '@/context/ThemeContext';

const Home: NextPage = () => {
  const { darkMode } = useThemeContext();
  const themeBg = darkMode ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white';

  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <Link href="/newbie">
          <a className={`w-40 aspect-[3/5] rounded flex-center ${themeBg}`}>
            Newbie Thumbnail
          </a>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
