import * as React from 'react';

import Image from 'next/future/image';

import CardImgMobile from './assets/image-product-mobile.jpg';

export function ReviewCardMobile() {
  return (
    <div className="rounded-[9px] shadow overflow-hidden bg-white max-w-[360px] h-[610px] dark:bg-[#1c232b]">
      {/* IMAGE COMPONENT */}
      <div className="relative w-full h-[240px] rounded-t-[9px] overflow-hidden object-cover">
        <Image
          src={CardImgMobile}
          alt="Image of Chanel perfume"
          className="block overflow-hidden"
          fill
        />
      </div>
      {/* CARD TEXT CONTENT */}
      <div className="px-6">
        <div className="mt-6 mb-3 font-montserrat text-[#b5b8c4] font-semibold text-[12px] tracking-[0.45em] leading-[15px] dark:text-[#afa8a8]">
          <p>PERFUME</p>
        </div>
        <div className="mb-3 text-[#1c232b] text-[32px] font-fraunces font-bold leading-[101%] dark:text-[#ffffff]">
          <p>Gabrielle Essence Eau De Parfum</p>
        </div>
        <div>
          <p className="font-montserrat text-[#6c7289] text-[14px] tracking-[0.012em] leading-[161%] font-medium opacity-[0.9] dark:text-[#acbec7]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex items-center">
          <h5 className="mt-5 mb-3 text-[#3c8067] font-fraunces font-bold text-[36px] dark:text-[#9cd3be] ">
            $149.99
          </h5>
          <p className="ml-5 mt-3 font-semibold opacity-[0.7] text-[#787884] text-[0.9rem] strike-through-2 dark:text-[#7f93a8]">
            $169.99
          </p>
        </div>
        <div className="">
          <button
            type="button"
            className="w-full rounded-lg flex-center py-3 text-white gap-2 duration-300 bg-[#3c8067] hover:bg-[#2a604c] active:bg-[#1a3e31]"
          >
            <img
              src="/icons/review-card/CartBtnIcon.svg"
              alt="Shopping Cart Icon"
            />
            <h5 className="font-montserrat font-extrabold text-[0.9rem]">
              Add to Cart
            </h5>
          </button>
        </div>
      </div>
    </div>
  );
}
