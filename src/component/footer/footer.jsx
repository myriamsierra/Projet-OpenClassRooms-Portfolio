import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {

    //DARKMODE CONFIG ==>
    const { darkMode } = useTheme();
    const classes = {
        footer: darkMode ? 'footer footer__darkmode' : 'footer',
        copyright: darkMode ? 'footer__copyright footer__copyright__darkmode' : 'footer__copyright',
        formfooter : darkMode ? 'formfooter formfooter__darkmode':'formfooter'
    }

    return (
        <div>
            <footer className={classes.footer}> 
                <p className={classes.copyright}>myriamsierra84@gmail.com | 2024.</p> 
                <div className={classes.formfooter}>
                    <Link to="https://github.com/myriamsierra" target="_blank">
                        <i class="fa-brands fa-github-alt"></i> 
                    </Link>
                    <Link to="mailto:myriamsierra84@gmail.com" target="_blank">
                        <i class="fa-solid fa-at"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/myriam-sierra-507436264/" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

