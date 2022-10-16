import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';

import { ProductReviewCard } from '@/features/newbie';

const ProductCardPage: NextPage = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] flex flex-col items-center dark:text-offwhite">
        <ProductReviewCard />
      </div>
    </MainLayout>
  );
};

export default ProductCardPage;
