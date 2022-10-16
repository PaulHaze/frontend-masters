import * as React from 'react';

import { useTheme } from '@/hooks';

import styles from './DarkModeToggle.module.scss';

export function DarkModeToggle() {
  const { theme, setTheme, isDarkMode } = useTheme();

  return (
    <div className={styles.toggle}>
      {
        <span
          className={
            isDarkMode
              ? 'text-offwhite cursor-default'
              : 'text-gray-500 cursor-pointer hover:text-gray-900'
          }
          onClick={() => setTheme('dark')}
          aria-hidden="true"
        >
          Dark
        </span>
      }

      <input
        type="checkbox"
        role="switch"
        checked={theme === 'light'}
        aria-label="dark light theme switch"
        onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
      />
      {
        <span
          className={
            isDarkMode
              ? 'text-gray-500 hover:text-gray-100 cursor-pointer'
              : 'text-gray-900 cursor-default'
          }
          onClick={() => setTheme('light')}
          aria-hidden="true"
        >
          Light
        </span>
      }
    </div>
  );
}
