import * as React from 'react';

export function useDarkMode() {
  const [darkMode, setDarkMode] = React.useState(false);

  const setMode = (mode: string) => {
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
        break;
    }
  };

  return [darkMode, setMode];
}
