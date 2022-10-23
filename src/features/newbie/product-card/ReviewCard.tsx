import * as React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import styles from './Card.module.scss';

import CardImgDesktop from './assets/image-product-desktop.jpg';
import CardImgMobile from './assets/image-product-mobile.jpg';

export function ReviewCard() {
  return (
    <Link href="/newbie/product-card/responsive" className="cursor-pointer">
      <div className={styles.cardContainer}>
        {/* IMAGE COMPONENT */}
        <div className={styles.imageContainer}>
          <Image
            placeholder="blur"
            src={CardImgMobile}
            alt="Image of Chanel perfume"
            className="overflow-hidden md:hidden object-cover"
            fill
          />

          <Image
            placeholder="blur"
            src={CardImgDesktop}
            alt="Image of Chanel perfume"
            className="hidden md:block overflow-hidden"
            fill
          />
        </div>
        {/* CARD TEXT CONTENT */}
        <div className={styles.contentContainer}>
          <div className={styles.cardCategory}>
            <p>PERFUME</p>
          </div>
          <div className={styles.cardTitle}>
            <p>Gabrielle Essence Eau De Parfum</p>
          </div>
          <div className={styles.cardBody}>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className={styles.price}>
            <div className={styles.priceMain}>$149.99</div>
            <p>$169.99</p>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button">
              <img
                src="/icons/review-card/CartBtnIcon.svg"
                alt="Shopping Cart Icon"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
