import { useState } from 'react';
import { ThemeContext, SetThemeContext } from './ThemeContext';
import { useCallback } from 'react';

function ThemProvider({ children }) {
  const getInitialTheme = () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const updateTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);

    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  }, [theme]);

  return (
    <SetThemeContext.Provider value={updateTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </SetThemeContext.Provider>
  );
}

export default ThemProvider;
