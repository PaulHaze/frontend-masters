import * as React from 'react';

import { useResponsiveStore } from '@/store';

export function ResponsiveButtons() {
  const setViewSetting = useResponsiveStore((state) => state.setViewSetting);
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => setViewSetting('responsive')}
        className="px-2 rounded border text-xs"
      >
        Responsive
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('desktop')}
        className="px-2 rounded border text-xs"
      >
        desktop
      </button>
      <button
        type="button"
        onClick={() => setViewSetting('mobile')}
        className="px-2 rounded border text-xs"
      >
        mobile
      </button>
    </div>
  );
}
