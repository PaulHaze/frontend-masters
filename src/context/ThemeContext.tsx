import * as React from 'react';

import type { ReactNode } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = React.createContext({
  darkMode: false,
  setMode: () => {},
});

export const useThemeContext = () => {
  const { darkMode, setMode } = React.useContext(ThemeContext);
  return { darkMode, setMode };
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setMode] = useDarkMode();
  return (
    <ThemeContext.Provider value={{ darkMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
