import * as React from 'react';

import styles from './DarkModeToggle.module.scss';

export type Mode = 'dark' | 'light' | 'toggle';

export type DarkModeToggleProps = {
  mode?: Mode;
  dark?: string;
  light?: string;
  darkMode: boolean;

  setMode: (mode: Mode) => void;
};

export function DarkModeToggle({ darkMode, setMode }: DarkModeToggleProps) {
  return (
    <div className={styles.toggle}>
      {
        <span
          className={
            darkMode
              ? 'text-offwhite cursor-default'
              : 'text-gray-500 cursor-pointer hover:text-gray-900'
          }
          onClick={() => setMode('dark')}
          aria-hidden="true"
        >
          Dark
        </span>
      }

      <input
        type="checkbox"
        role="switch"
        checked={!darkMode}
        aria-label="dark light theme switch"
        onChange={() => setMode('toggle')}
      />
      {
        <span
          className={
            darkMode
              ? 'text-gray-500 hover:text-gray-100 cursor-pointer'
              : 'text-gray-900 cursor-default'
          }
          onClick={() => setMode('light')}
          aria-hidden="true"
        >
          Light
        </span>
      }
    </div>
  );
}
