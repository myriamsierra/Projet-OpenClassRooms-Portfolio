import React from 'react';
import './scroll.scss';
// import { useTheme } from './../../pages/dark-mode/dark-mode';

const Scroll = () => {
    // const { darkMode } = useTheme();
    // const linkDarkMode = darkMode ? 'dark-mode' : '';

    return (
        <div>
           <div class="container_mouse">
                <span class="mouse-btn">
                    <span class="mouse-scroll"></span>
                </span>
                <span>Scroll Down</span>
            </div>
        </div>
    );
};

export default Scroll;
