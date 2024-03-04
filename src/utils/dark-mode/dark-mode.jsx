import React, { createContext, useState, useContext } from 'react';
// import DarkmodeButton from './../../component/header/header-childs-component/button-dark-mode/button-dark-mode'
// import Header from '../../component/header/header/header';
// import Home from '../../component/home/home';
// import Cards from '../../component/skills/cards-skills/cards-skills';
// import Skills from '../../component/skills/skills/skills';
import MainHomePage from '../../pages/main-home-page/main-home-page';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
    return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* {DarkmodeButton}
      {Header} */}
      {MainHomePage}
      {/* {Home}
      {Cards}
      {Skills} */}
      {children}
    </ThemeContext.Provider>
  );
};