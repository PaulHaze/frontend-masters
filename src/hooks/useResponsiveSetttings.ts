import { useResponsiveStore } from '@/store';

export function useResponsiveSettings() {
  const viewSetting = useResponsiveStore((state) => state.viewSetting);
  const setViewSetting = useResponsiveStore((state) => state.setViewSetting);
  const isMobile = viewSetting === 'mobile';
  const isDesktop = viewSetting === 'desktop';
  const isResponsive = viewSetting === 'responsive';
  return {
    viewSetting,
    setViewSetting,
    isMobile,
    isDesktop,
    isResponsive,
  };
}
