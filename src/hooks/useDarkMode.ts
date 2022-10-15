import * as React from 'react';

export type Mode = 'dark' | 'light' | 'toggle';

export function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState(false);

  const setMode = (mode: Mode) => {
    switch (mode) {
      case 'dark':
        setDarkMode(true);
        break;
      case 'light':
        setDarkMode(false);
        break;
      case 'toggle':
        setDarkMode((prevMode) => !prevMode);
        break;
      default:
        throw new Error('incorrect arugment passed to setMode');
    }
  };

  return { darkMode, setMode };
}
