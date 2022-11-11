/* eslint-disable import/order */
import * as React from 'react';

import Image from 'next/image';
import { overpass } from './Font';

import { Rating } from './Rating';

import Star from '@/assets/img/feedback/star.svg';

import type { RatingRange } from './FeedbackContainer';

type FeedbackCardProps = {
  selectedRating: RatingRange;
  handleSelectRating: (selection: RatingRange) => void;
  showModal: () => void;
};

const ratings = ['1', '2', '3', '4', '5'];

export function FeedbackCard({
  selectedRating,
  handleSelectRating,
  showModal,
}: FeedbackCardProps) {
  const renderRatings = ratings.map((rating) => (
    <Rating
      key={rating}
      rating={rating}
      selectedRating={selectedRating}
      handleSelectRating={handleSelectRating}
    />
  ));
  return (
    <div
      className={`${overpass.className} flex flex-col text-white h-[414px] max-w-[412px] mx-auto rounded-[30px] pt-8 px-8 feedback-card-bg`}
    >
      {/* STAR */}
      <div className="w-12 h-12 bg-[#262F38] rounded-full flex-center">
        <Image src={Star} alt="review star" width="16" height="16" />
      </div>

      {/* TITLE TEXT */}
      <h1 className="font-[600] mt-7 text-[28px]">How did we do?</h1>

      {/* MAIN TEXT */}
      <p className="text-[15px] leading-6 mt-3 opacity-70">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      {/* RATING */}
      <div className="flex justify-between mt-8">{renderRatings}</div>

      {/* SUBMIT BTN */}
      <div className="w-full flex-center flex-grow">
        <button
          type="button"
          onClick={showModal}
          className="bg-white text-[#EA7B35] rounded-[24px] w-full py-3 flex-center hover:bg-[#EA7B35] hover:text-white cursor-pointer"
        >
          <p className="font-semibold tracking-[2px]">SUBMIT</p>
        </button>
      </div>
    </div>
  );
}
