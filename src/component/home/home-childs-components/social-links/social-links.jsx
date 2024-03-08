//CLEAN CODE OK

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social-links.scss';

const SocialLink = ({ data, onClick}) => {

    //darkmode theme
    const { darkMode } = useTheme();

    // Data modulables
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
                    <FontAwesomeIcon icon={icon} className={classes.icon}/>
                    <p className={classes.text}>{text}</p>
                </Link>
            </div>
        </div>
    );
};

export default SocialLink;