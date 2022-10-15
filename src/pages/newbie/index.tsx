import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';
import Link from 'next/link';

import { useThemeContext } from '@/context/ThemeContext';

import CardThumbLight from '@/assets/img/review-card/reivew-card-light.jpg';
import CardThumbDark from '@/assets/img/review-card/reivew-card-dark.jpg';

const Newbie: NextPage = () => {
  const { darkMode } = useThemeContext();
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <h1>Newbie Projects</h1>
        <Link href="newbie/product-card">
          <div className="w-40 flex-center text-gray-900 aspect-[3/5] bg-gray-400 dark:bg-gray-50 dark:textgray-900">
            Card
          </div>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Newbie;
