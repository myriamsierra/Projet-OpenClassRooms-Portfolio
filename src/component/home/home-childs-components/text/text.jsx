import React from 'react';
import './text.scss'

const Text= ({text}) => {
    return (
        <div>
            <p className='text'>{text}</p>
        </div>
    );
};

export default Text;

