import * as React from 'react';
import { useResponsiveSettings } from '@/hooks';

import styles from './ResponsiveBtns.module.scss';

export function ResponsiveButtons() {
  const { setViewSetting, isMobile, isDesktop, isResponsive } =
    useResponsiveSettings();
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => setViewSetting('responsive')}
        className={`${styles.btnLeft} ${isResponsive && styles.btnActive}`}
      >
        <img
          className={styles.btnIcon}
          src="/icons/responsive-icon.svg"
          alt="Select Responsive View Icon"
        />
        <div className={styles.iconLabel}>Responsive</div>
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('desktop')}
        className={`${styles.btnBase} ${isDesktop && styles.btnActive}`}
      >
        <img
          className={styles.btnIcon}
          src="/icons/desktop-icon.svg"
          alt="Select Desktop View Icon"
        />
        <div className={styles.iconLabel}>Desktop</div>
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('mobile')}
        className={`${styles.btnRight} ${isMobile && styles.btnActive}`}
      >
        <img
          className={styles.btnIcon}
          src="/icons/mobile-icon.svg"
          alt="Select Mobile View Icon"
        />

        <div className={styles.iconLabel}>Mobile</div>
      </button>
    </div>
  );
}
