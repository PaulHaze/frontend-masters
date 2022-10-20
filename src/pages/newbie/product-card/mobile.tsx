import type { NextPage } from 'next';

import { ReviewCardMobile } from '@/features/newbie';

const MobileCardPage: NextPage = () => (
  <div className="h-[100vh] flex-center bg-[#f2ebe3] dark:text-offwhite dark:bg-[#6c7289]">
    <ReviewCardMobile />
  </div>
);

export default MobileCardPage;
