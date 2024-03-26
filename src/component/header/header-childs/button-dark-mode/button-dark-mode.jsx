import React from 'react';
import { useTheme } from '../../../../utils/theme-provider/dark-mode';
import './button-dark-mode.scss';

const DarkModeButton = () => {
    //SET-UNSET DARKMODE==>
    const { darkMode, setDarkMode } = useTheme();
    const ChangeDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <div className="button">
            <input
                type="checkbox" 
                id="input" 
                className="button__toggle"
                onChange= {ChangeDarkMode}
                checked={darkMode}
            />
            <label htmlFor="input" className="button__label">
                <div className="button__label__switch"></div>
                <span className="button__label__icons"><i className="fa-solid fa-moon"></i> </span>
                <span className="button__label__icons"><i className="fa-solid fa-sun"></i></span>
            </label>
        </div>
    );
};

export default DarkModeButton;

