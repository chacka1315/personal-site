import { useContext } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {
    console.warn('Not wrapped in provider!');
  },
});

export const SetThemeContext = createContext({
  updateTheme: () => {
    console.warn('Not wrapped in provider!');
  },
});

export const useTheme = () => useContext(ThemeContext);
export const useSetTheme = () => useContext(SetThemeContext);
