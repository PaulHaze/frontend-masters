import { MainLayout } from '@Layouts';

import type { NextPage } from 'next';

import { useResponsiveSettings } from '@/hooks';

import {
  ReviewCard,
  ReviewCardDesktop,
  ReviewCardMobile,
} from '@/features/newbie';

const ProductCardPage: NextPage = () => {
  const { isMobile, isDesktop } = useResponsiveSettings();

  // eslint-disable-next-line no-nested-ternary
  const cardToShow = isMobile ? (
    <ReviewCardMobile />
  ) : isDesktop ? (
    <ReviewCardDesktop />
  ) : (
    <ReviewCard />
  );
  return (
    <MainLayout>
      <div className="h-[100vh] flex-center bg-[#f2ebe3] dark:text-offwhite dark:bg-[#6c7289]">
        {cardToShow}
      </div>
    </MainLayout>
  );
};

export default ProductCardPage;
