//CLEAN CODE OK

import React from 'react';
import './title.scss'

const Title = ({h2,h3}) => {

    //classes scss modulable
    const classes = {
        titleBox:'title',
        title :'title__h2',
        subtitle : 'title__h3'
    }

    return (
        <div className={classes.titleBox}>
            <h2 className={classes.title}>{h2}</h2>
            <h3 className={classes.subtitle}>{h3}</h3>
        </div>
    );
};

export default Title;
