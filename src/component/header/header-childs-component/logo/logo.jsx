//CLEAN CODE OK 

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import './logo.scss'; 

const Logo = () => {
    //darkmode theme
    const { darkMode } = useTheme();
    
    //classe scss modulable
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



