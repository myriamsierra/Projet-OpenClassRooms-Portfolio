//CLEAN CODE OK

import React from 'react';
import DarkModeButton from '../header-childs-component/button-dark-mode/button-dark-mode';
import { useTheme } from '../../../utils/dark-mode/dark-mode';
import Logo from '../header-childs-component/logo/logo';
import Navbar from '../header-childs-component/navbar/navbar';
import clickSound from './../../../assets/sound/ui-click-43196.mp3';
import toggleSound from './../../../assets/sound/rclick-13693.mp3';
import { soundEffect } from '../../../utils/function/sound-effect';
import './header.scss';

const Header = () => {
    // Darkmode theme
    const { darkMode, setDarkMode } = useTheme();

    // classe scss modulable 
    const headerClass = darkMode ? 'header header__darkmode' : 'header';

    return (
        <header className={headerClass}>
            <Logo onClick={() => soundEffect(clickSound)}/> 
            <Navbar onClick={() => soundEffect(clickSound)}/> 
            <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} onClick={() => soundEffect(toggleSound)}/> 
        </header>
    );
};

export default Header;





