import type { NextPage } from 'next';
import { MainLayout } from '@Layouts';

import Link from 'next/link';

// import { useThemeContext } from '@/context/ThemeContext';

const Home: NextPage = () => {
  /*   const { darkMode } = useThemeContext();
  const theme = darkMode ? 'dark' : 'light';
  console.log(theme);
  const green = 'green';
  const themeBg = darkMode ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white';
  const bgOverRide = `bg-primaryBg-light`; */
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <Link href="/newbie">
          <a className={`w-40 aspect-[3/5] rounded flex-center bg-slate-200`}>
            Newbie Thumbnail
          </a>
        </Link>
        {/* <div className={`w-80 h-80 border bg-primaryBg-${theme}`}>test</div> */}
      </div>
    </MainLayout>
  );
};

export default Home;
