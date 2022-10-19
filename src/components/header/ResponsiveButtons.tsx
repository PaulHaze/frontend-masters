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
        R
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('desktop')}
        className={`${styles.btnBase}  ${isDesktop && styles.btnActive}`}
      >
        d
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('mobile')}
        className={`${styles.btnRight}  ${isMobile && styles.btnActive}`}
      >
        m
      </button>
    </div>
  );
}
