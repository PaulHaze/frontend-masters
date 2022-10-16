import * as React from 'react';

import styles from './Card.module.scss';

// import Image from 'next/future/image';

export function ProductReviewCard() {
  return (
    <div className="w-full min-h-screen bg-[#f2ebe3] flex-center px-6">
      <div className="w-full h-[610px] shadow rounded-[9px] overflow-hidden bg-white">
        <div className="image-container relative w-full h-[240px] bg-slate-600 rounded-[9px]">
          IMAGE
        </div>
        <h4 className={styles.cardTitle}>ProductReviewCard</h4>
      </div>
    </div>
  );
}
