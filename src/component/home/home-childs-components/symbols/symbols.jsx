import React from 'react';
import './symbols.scss';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';

const Symbols = ({ symbols, symbolssize }) => {
    // Darkmode theme
    const { darkMode } = useTheme();

    // classes scss modulable
    const symbolsClass = `symbols ${darkMode ? 'symbols__darkmode' : ''} ${symbolssize}`;

    return (
        <div>
            <span className={symbolsClass}>{symbols}</span>
        </div>
    );
};

export default Symbols;