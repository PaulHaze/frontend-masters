import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type ResponsiveType = 'responsive' | 'desktop' | 'mobile';
export type ResponsiveState = {
  viewSetting: ResponsiveType;
  setViewSetting: (setting: ResponsiveType) => void;
};

export const useResponsiveStore = create<ResponsiveState>()(
  devtools(
    persist(
      (set) => ({
        viewSetting: 'responsive',
        setViewSetting: (setting) => set({ viewSetting: setting }),
      }),
      {
        name: 'set-view',
      },
    ),
  ),
);
