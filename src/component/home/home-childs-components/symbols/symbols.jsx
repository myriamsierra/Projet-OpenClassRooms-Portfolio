// Symbols.js
import React from 'react';
import './symbols.scss'

const Symbols = ({ symbols, symbolssize }) => {
    return (
        <div>
            <span className={`symbols ${symbolssize}`}>{symbols}</span>
        </div>
    );
};

export default Symbols;

