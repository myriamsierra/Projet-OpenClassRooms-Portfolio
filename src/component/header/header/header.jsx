//CLEAN CODE OK

import React from 'react';
import DarkModeButton from '../header-childs-component/button-dark-mode/button-dark-mode';
import { useTheme } from '../../../utils/dark-mode/dark-mode';
import Logo from '../header-childs-component/logo/logo';
import Navbar from '../header-childs-component/navbar/navbar';
import './header.scss';

const Header = () => {
    // Darkmode theme
    const { darkMode, setDarkMode } = useTheme();

    // classe scss modulable 
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





