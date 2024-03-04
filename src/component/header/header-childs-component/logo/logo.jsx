//CLEAN CODE OK 

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import './logo.scss'; 

const Logo = ({onClick}) => {
    //darkmode theme
    const { darkMode } = useTheme();
    
    //classe scss modulable
    const logoClass = darkMode ? 'logo logo__darkmode' : 'logo';

    return (
        <div>
            <Link to='#home'>
                <h1 className={logoClass} onClick={onClick}>MS</h1>
            </Link>
        </div>
    );
};

export default Logo;



