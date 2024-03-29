import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from './../../../../utils/theme-provider/dark-mode';
import './navbar.scss'; 

const Navbar = () => {

    //DARKMODE CONFIG ==>
    const { darkMode} = useTheme();
    const classes = {
        navbar: darkMode ? 'navbar navbar--darkmode' : 'navbar',
        link: darkMode ? 'navbar__link navbar__link__darkmode' : 'navbar__link'
    };
    
    return (
        <div>
            <nav className={classes.navbar}>
                <Link smooth to='/#home' className={classes.link}>Accueil</Link>
                <Link smooth to='/#about' className={classes.link}>A-propos</Link>
                <Link smooth to='/#skills' className={classes.link}>Competences</Link>
                <Link smooth to='/#projects' className={classes.link}>Projets</Link>
                <Link smooth to='/#contact' className={classes.link}>Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;


