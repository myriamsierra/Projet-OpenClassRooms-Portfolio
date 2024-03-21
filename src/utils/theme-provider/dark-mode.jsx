import React, { createContext, useState, useContext } from 'react';
import HomePage from '../../pages/home-page/home-page';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
    return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {HomePage}
      {children}
    </ThemeContext.Provider>
  );
};