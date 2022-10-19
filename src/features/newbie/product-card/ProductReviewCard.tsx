import * as React from 'react';
import Image from 'next/future/image';
import styles from './Card.module.scss';

import CardImgDesktop from './assets/image-product-desktop.jpg';
import CardImgMobile from './assets/image-product-mobile.jpg';

export function ProductReviewCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        {/* IMAGE COMPONENT */}
        <div className={styles.imageContainer}>
          <Image
            src={CardImgMobile}
            alt="Image of Chanel perfume"
            className="overflow-hidden md:hidden"
          />
          <Image
            src={CardImgDesktop}
            alt="Image of Chanel perfume"
            className="hidden md:block object-cover"
            fill
          />
        </div>
        {/* CARD TEXT CONTENT */}
        <div className={styles.contentContainer}>
          <div className={styles.cardCategory}>
            <p>PERFUME</p>
          </div>
          <div className={styles.cardTitle}>
            <h4>Gabrielle Essence Eau De Parfum</h4>
          </div>
          <div className={styles.cardBody}>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className={styles.price}>
            <h5>$149.99</h5>
            <p>$169.99</p>
          </div>
          <div className={styles.buttonContainer}>
            <button type="button">
              <img
                src="/icons/review-card/CartBtnIcon.svg"
                alt="Shopping Cart Icon"
              />
              <h5> Add to Cart</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
