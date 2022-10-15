import * as React from 'react';

import type { ReactNode } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';
import type { Mode } from '@/hooks/useDarkMode';

export type ThemeProviderProps = {
  children: ReactNode;
};
export type ThemeContextType = {
  darkMode: boolean;
  setMode: (mode: Mode) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  darkMode: false,
  setMode: (_mode: Mode) => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { darkMode, setMode } = useDarkMode();
  return (
    <ThemeContext.Provider value={{ darkMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const { darkMode, setMode } = React.useContext(ThemeContext);
  return { darkMode, setMode };
};
