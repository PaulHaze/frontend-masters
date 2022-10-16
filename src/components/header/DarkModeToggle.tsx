import * as React from 'react';

import { useTheme } from 'next-themes';
// import { useThemeContext } from '@/context/ThemeContext';

import styles from './DarkModeToggle.module.scss';

export type Mode = 'dark' | 'light' | 'toggle';

export function DarkModeToggle() {
  // const { darkMode, setMode } = useThemeContext();

  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  return (
    <div className={styles.toggle}>
      {
        <span
          className={
            theme === 'dark'
              ? 'text-offwhite cursor-default'
              : 'text-gray-500 cursor-pointer hover:text-gray-900'
          }
          onClick={() => setTheme('dark')}
          // onClick={() => setMode('dark')}
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
        onChange={() => handleToggle()}
        // onChange={() => setMode('toggle')}
      />
      {
        <span
          className={
            theme === 'dark'
              ? 'text-gray-500 hover:text-gray-100 cursor-pointer'
              : 'text-gray-900 cursor-default'
          }
          onClick={() => setTheme('light')}
          // onClick={() => setMode('light')}
          aria-hidden="true"
        >
          Light
        </span>
      }
    </div>
  );
}
