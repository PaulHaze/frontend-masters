import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';
import Image from 'next/future/image';
import Link from 'next/link';

import { useThemeContext } from '@/context/ThemeContext';

import CardThumbLight from '@/assets/img/review-card/review-card-light.jpg';
import CardThumbDark from '@/assets/img/review-card/review-card-dark.jpg';

const Newbie: NextPage = () => {
  const { darkMode } = useThemeContext();
  return (
    <MainLayout>
      <div className="flex max-w-lg mx-auto justify-center flex-wrap gap-2 min-h-[100vh] pt-10">
        <Link href="newbie/product-card">
          <div className=" w-48 bb overflow-hidden cursor-pointer">
            <div className=" hover:scale-[1.2] transition-all duration-500">
              <Image
                src={darkMode ? CardThumbDark : CardThumbLight}
                alt="Thumbnail link to Review Card Component"
                layout="fill"
              />
            </div>
          </div>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Newbie;
