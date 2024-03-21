import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from '../../../../utils/theme-provider/dark-mode';
import './logo.scss'; 

const Logo = () => {
    const { darkMode } = useTheme();
    const logoClass = darkMode ? 'logo logo__darkmode' : 'logo';

    return (
        <div>
            <Link smooth to='#home'>
                <h1 className={logoClass}>/MS</h1>
            </Link>
        </div>
    );
};

export default Logo;



