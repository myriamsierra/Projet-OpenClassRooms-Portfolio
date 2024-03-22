import React from 'react';
import './text.scss'

const Text= ({text,text2,text3}) => {
    return (
        <div>
            <p className='text'>{text}</p>
            <p className='text2'>{text2}</p>
            <p className='text3'>{text3}</p>
        </div>
    );
};

export default Text;

