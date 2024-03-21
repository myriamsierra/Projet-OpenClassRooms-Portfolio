import React from 'react';
import './symbols.scss';
import { useTheme } from './../../../utils/theme-provider/dark-mode';

const Symbols = ({ symbols, symbolssize }) => {
    const { darkMode } = useTheme();
    const symbolsClass = `symbols ${darkMode ? 'symbols__darkmode' : ''} ${symbolssize}`;

    return (
        <div>
            <span className={symbolsClass}>{symbols}</span>
        </div>
    );
};

export default Symbols;