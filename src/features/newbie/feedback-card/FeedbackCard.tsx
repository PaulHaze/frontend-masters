/* eslint-disable import/order */
import Image from 'next/image';
import { Overpass } from '@next/font/google';

import { Rating } from './Rating';

import Star from '@/assets/img/feedback/star.svg';

const overpass = Overpass({
  weight: 'variable',
  subsets: ['latin'],
});

export function FeedbackCard() {
  return (
    <div
      className={`${overpass.className} flex flex-col text-white h-[414px] max-w-[412px]  mx-auto rounded-[30px] pt-8 px-8 feedback-card-bg`}
    >
      {/* STAR */}
      <div className="w-12 h-12 bg-[#262F38] rounded-full flex-center">
        <Image src={Star} alt="review star" width="16" height="16" />
      </div>

      {/* TITLE TEXT */}
      <h1 className="font-[600] mt-7 text-[28px]">How did we do?</h1>

      {/* MAIN TEXT */}
      <p className="text-[15px] leading-6 mt-3">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      {/* RATING */}
      <div className="flex mt-8">
        <Rating rating="1" />
      </div>
    </div>
  );
}
