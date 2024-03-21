import React from 'react';
import { useTheme } from '../../../../utils/theme-provider/dark-mode';
import './button-dark-mode.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeButton = () => {
    const { darkMode, setDarkMode } = useTheme();
    const darkModeFunction = () => {
        setDarkMode(!darkMode);
    };
    
    // classes scss modulable
    const classes = {
        button: 'button',
        toggle: 'button__toggle',
        label: 'button__label',
        switch: 'button__switch',
        icons: 'button__icons',
        moon: 'button__icons--moon',
        sun: 'button__icons--sun'
    };

    return (
        <div className={classes.button}>
            <input
                type="checkbox" id="input" className={classes.toggle}
                onChange= {darkModeFunction}
                checked={darkMode}
            />
            <label htmlFor="input" className={classes.label}>
                <div className={classes.switch}></div>
                <span className={`${classes.icons} ${classes.moon}`}><FontAwesomeIcon icon={faMoon} /></span>
                <span className={`${classes.icons} ${classes.sun}`}><FontAwesomeIcon icon={faSun} /></span>
            </label>
        </div>
    );
};

export default DarkModeButton;

