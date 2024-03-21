import React from 'react';
import DarkModeButton from './../header-childs/button-dark-mode/button-dark-mode';
import { useTheme } from './../../../utils/theme-provider/dark-mode';
import Logo from './../header-childs/logo/logo';
import Navbar from './../header-childs/navbar/navbar';
import './header.scss';

const Header = () => {
    const { darkMode, setDarkMode } = useTheme();
    const headerClass = darkMode ? 'header header__darkmode' : 'header';

    return (
        <header className={headerClass}>
            <Logo /> 
            <Navbar /> 
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} /> 
        </header>
    );
};

export default Header;





