import * as React from 'react';

import styles from './Card.module.scss';

// import Image from 'next/future/image';

// import CartBtnIcon from './assets/CartBtnIcon.svg';

export function ProductReviewCard() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>IMAGE</div>
        {/* CARD TEXT CONTENT */}
        <div className="mx-6">
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

          <button className={styles.cartButton} type="button">
            <img
              src="/icons/review-card/CartBtnIcon.svg"
              alt="Shopping Cart Icon"
            />
            <h5> Add to Cart</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
