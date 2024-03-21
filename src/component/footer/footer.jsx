import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import './footer.scss';

const Footer = () => {
    const { darkMode } = useTheme();
    const classes = {
        footer : darkMode ? 'footer footer__darkmode' : 'footer',
        copyright : darkMode ? 'footer__copyright footer__copyright__darkmode' : 'footer__copyright'
    }

    return (
        <div>
            <footer className={classes.footer}> 
                <p className={classes.copyright}>© Myriam Sierra | 2024.</p> 
            </footer>
        </div>
    );
}

export default Footer;

