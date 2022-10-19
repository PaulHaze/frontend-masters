import * as React from 'react';

import { useResponsiveSettings } from '@/hooks';

export function ResponsiveButtons() {
  const { setViewSetting, isMobile, isDesktop, isResponsive } =
    useResponsiveSettings();
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => setViewSetting('responsive')}
        className={`px-2 rounded border text-xs ${
          isResponsive && 'bg-gray-800 text-white'
        }`}
      >
        Responsive
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('desktop')}
        className={`px-2 rounded border text-xs ${
          isDesktop && 'bg-gray-800 text-white'
        }`}
      >
        desktop
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('mobile')}
        className={`px-2 rounded border text-xs ${
          isMobile && 'bg-gray-800 text-white'
        }`}
      >
        mobile
      </button>
    </div>
  );
}
