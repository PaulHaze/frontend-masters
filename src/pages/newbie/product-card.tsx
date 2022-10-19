import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';

import { ReviewCard } from '@/features/newbie';

const ProductCardPage: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <ReviewCard />
      </div>
    </MainLayout>
  );
};

export default ProductCardPage;
