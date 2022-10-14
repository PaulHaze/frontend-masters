import * as React from 'react';

import type { ReactNode } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setMode] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ darkMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
