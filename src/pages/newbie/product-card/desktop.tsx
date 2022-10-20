import type { NextPage } from 'next';

import { ReviewCardDesktop } from '@/features/newbie';

const DesktopCardPage: NextPage = () => (
  <div className="h-[100vh] flex-center bg-[#f2ebe3] dark:text-offwhite dark:bg-[#6c7289]">
    <ReviewCardDesktop />
  </div>
);

export default DesktopCardPage;
