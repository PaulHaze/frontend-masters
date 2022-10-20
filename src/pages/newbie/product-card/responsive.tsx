import type { NextPage } from 'next';

import { ReviewCard } from '@/features/newbie';

const ResponsiveCardPage: NextPage = () => (
  <div className="h-[100vh] flex-center bg-[#f2ebe3] dark:text-offwhite dark:bg-[#6c7289]">
    <ReviewCard />
  </div>
);

export default ResponsiveCardPage;
