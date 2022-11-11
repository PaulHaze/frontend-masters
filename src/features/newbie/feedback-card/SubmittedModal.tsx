import Image from 'next/image';
import ModalImg from '@/assets/img/feedback/thankyou-modal.svg';

import { overpass } from './Font';

import styles from './Feedback.module.scss';

type SubmittedModalProps = {
  rating: string;
};

export function SubmittedModal({ rating = '4' }: SubmittedModalProps) {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-black/50 backdrop-blur-sm flex-center px-4">
      <div className={`${overpass.className} ${styles.container} `}>
        {/* IMAGE */}
        <div className="flex justify-center mt-7">
          <Image src={ModalImg} alt="Thank you image" />
        </div>

        {/* RATING */}
        <div className="bg-[#262F38] rounded-[18px] text-[#FC7613] px-6 py-2 text-[15px] mt-8 font-[500]">
          You selected {rating} out of 5
        </div>
        {/* THANK YOU */}
        <h1 className="text-white mt-4">Thank You</h1>
        {/* OTHER TEXT */}
        <p className="text-white text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
