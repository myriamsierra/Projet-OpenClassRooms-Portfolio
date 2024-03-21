import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './../../../utils/theme-provider/dark-mode';
import './social-links.scss';

const SocialLink = ({ data, onClick}) => {
    const { darkMode } = useTheme();
    const { text, icon, link } = data;

    // Classes scss modulables
    const classes = {
        button: darkMode ? 'social-link__button social-link__button__darkmode' : 'social-link__button',
        icon: "social-link__icon",
        text:"social-link__text",
        icons: darkMode ? 'social-link__icons social-link__icons__darkmode' : 'social-link__icons',
    };

    return (
        <div>
            <div className={classes.button}>
                <Link to={link} className={classes.icons} onClick={onClick} target="_blank">
                    <div className={classes.icon}>
                        <i className={icon} /> 
                    </div>
                    
                    <p className={classes.text}>{text}</p>
                </Link>
            </div>
        </div>
    );
};

export default SocialLink;