//CLEAN CODE OK

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import './navbar.scss'; 

const Navbar = ({onClick}) => {

    //darkmode thème
    const { darkMode} = useTheme();

    //classe scss modulable
    const classes = {
        navbar: darkMode ? 'navbar navbar--darkmode' : 'navbar',
        link: darkMode ? 'navbar__link navbar__link--darkmode' : 'navbar__link'
    };
    
    return (
        <div>
            <nav className={classes.navbar}>
                <Link to='#about' className={classes.link}  onClick={onClick}>A propos</Link>
                <Link to='#skills' className={classes.link} onClick={onClick}>Competences</Link>
                <Link to='#projects' className={classes.link} onClick={onClick}>Projets</Link>
                <Link to='#contact' className={classes.link} onClick={onClick}>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;


