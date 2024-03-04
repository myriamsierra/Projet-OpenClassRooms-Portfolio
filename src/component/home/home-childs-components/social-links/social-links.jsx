//CLEAN CODE OK

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social-links.scss';

const SocialLink = ({ data, onClick}) => {
    // Data modulables
    const { text, icon, link } = data;

    // Classes scss modulables
    const classes = {
        button: "social-link__button",
        icons: "social-link__icons",
    };

    return (
        <div>
            <div className={classes.button}>
                <Link to={link} className={classes.icons} onClick={onClick}>
                    <FontAwesomeIcon icon={icon} />
                    <p>{text}</p>
                </Link>
            </div>
        </div>
    );
};

export default SocialLink;
