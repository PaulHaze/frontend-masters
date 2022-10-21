import { useResponsiveSettings } from '@/hooks';

import styles from './ResponsiveBtns.module.scss';

export function ResponsiveButtons() {
  const { setViewSetting, isMobile, isDesktop, isResponsive } =
    useResponsiveSettings();
  return (
    <div className="flex items-center">
      <button
        type="button"
        title="Responsive Mode"
        onClick={() => setViewSetting('responsive')}
        className={`${styles.btnLeft} ${isResponsive && styles.btnActive}`}
      >
        <img
          className={styles.btnIcon}
          src="/icons/responsive-icon.svg"
          alt="Select Responsive View Icon"
        />
        <span className={styles.iconLabel}>Responsive</span>
      </button>
      <button
        type="button"
        title="Desktop Mode"
        onClick={() => setViewSetting('desktop')}
        className={`${styles.btnBase} ${isDesktop && styles.btnActive}`}
      >
        <img
          className={styles.btnIcon}
          src="/icons/desktop-icon.svg"
          alt="Select Desktop View Icon"
        />
        <span className={styles.iconLabel}>Desktop</span>
      </button>
      <button
        type="button"
        title="Mobile Mode"
        onClick={() => setViewSetting('mobile')}
        className={`${styles.btnRight} ${isMobile && styles.btnActive}`}
      >
        <img
          className={styles.btnIcon}
          src="/icons/mobile-icon.svg"
          alt="Select Mobile View Icon"
        />

        <span className={styles.iconLabel}>Mobile</span>
      </button>
    </div>
  );
}
