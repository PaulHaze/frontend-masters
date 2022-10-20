import type { NextPage } from 'next';
import { GoBackBtn } from '@/components';
import { ReviewCard } from '@/features/newbie';

const ResponsiveCardPage: NextPage = () => (
  <div className="h-[100vh] flex-center bg-[#f2ebe3] dark:text-offwhite dark:bg-[#6c7289]">
    <div className="fixed top-10 left-10">
      <GoBackBtn />
    </div>
    <ReviewCard />
  </div>
);

export default ResponsiveCardPage;
