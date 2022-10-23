import { MainLayout } from '@Layouts';
import type { NextPage } from 'next';
import { ExternalLink } from '@Components';

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
      <div className="min-h-[100vh] pb-10 flex flex-col items-center bg-[#f2ebe3] dark:text-offwhite dark:bg-[#6c7289]">
        <div className="pt-10 mb-10 inline-flex justify-center gap-2 md:flex md:justify-between w-full max-w-[700px] px-2">
          <h1 className="text-lg sm:text-2xl md:text-3xl text-center font-semibold text-stone-700 dark:text-slate-900">
            Newbie Challenge:
          </h1>
          <h1 className="text-lg sm:text-2xl md:text-3xl text-center font-semibold text-stone-700 dark:text-slate-900">
            Product Review Card
          </h1>
        </div>
        <div
          className={`flex justify-between w-[360px] mb-2 space-x-2 ${
            !isMobile && 'md:w-[700px] '
          }`}
        >
          <ExternalLink
            linkUrl="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
            className={isMobile && 'flex-1 after:left-[20px]'}
          />
          <ExternalLink
            linkUrl="https://github.com/PaulHaze/frontend-mentor/tree/main/src/features/newbie/product-card"
            github
            className={isMobile && 'flex-1 after:left-[20px]'}
          />
        </div>
        <div className="px-2">{cardToShow}</div>
      </div>
    </MainLayout>
  );
};

export default ProductCardPage;
