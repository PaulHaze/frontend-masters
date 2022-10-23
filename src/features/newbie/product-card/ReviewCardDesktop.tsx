import * as React from 'react';
import Image from 'next/future/image';

import CardImgDesktop from './assets/image-product-desktop.jpg';

export function ReviewCardDesktop() {
  return (
    <div className="rounded-[9px] shadow overflow-hidden bg-white min-w-[700px] max-w-[700px] h-[522px] flex dark:bg-[#1c232b]">
      {/* IMAGE COMPONENT */}
      <div className="relative w-[50%] rounded-l-[9px] overflow-hidden">
        <Image
          placeholder="blur"
          src={CardImgDesktop}
          alt="Image of Chanel perfume"
          className="block overflow-hidden"
          fill
        />
      </div>
      {/* CARD TEXT CONTENT */}
      <div className="w-[50%] px-10 py-5 flex flex-col">
        <div className="my-6 font-montserrat text-[#b5b8c4] text-[14px] font-semibold tracking-[0.45em] leading-[15px] dark:text-[#afa8a8]">
          <p>PERFUME</p>
        </div>
        <div className="mb-6 text-[#1c232b] text-[36px] font-fraunces font-bold leading-[101%] dark:text-[#ffffff]">
          <p>Gabrielle Essence Eau De Parfum</p>
        </div>
        <div>
          <p className="font-montserrat text-[#6c7289] text-[16px] tracking-[0.012em] leading-[161%] font-medium opacity-[0.9] dark:text-[#acbec7]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex items-center">
          <p className="mt-5 mb-3 text-[#3c8067] font-fraunces font-bold text-[36px] dark:text-[#9cd3be] ">
            $149.99
          </p>
          <p className="ml-5 mt-1 font-semibold opacity-[0.7] text-[#787884] text-[0.9rem] strike-through-2 dark:text-[#7f93a8]">
            $169.99
          </p>
        </div>
        <div className="h-full flex-center">
          <button
            type="button"
            className="w-full rounded-lg flex-center py-3 text-white gap-2 duration-300 font-montserrat font-extrabold text-[0.9rem] bg-[#3c8067] hover:bg-[#2a604c] active:bg-[#1a3e31] "
          >
            <img
              src="/icons/review-card/CartBtnIcon.svg"
              alt="Shopping Cart Icon"
            />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
