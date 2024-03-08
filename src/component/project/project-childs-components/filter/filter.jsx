import React from 'react';
import './filter.scss'

const Filters = ({tags}) => {

    //classes scss modulable
    const classes = {
        filter:"filter",
        tags:"filter__tags"
    }

    return (
        <div className={classes.filter}>
            <p className={classes.tags}>[ {tags} ]</p>    
        </div>
    );
};

export default Filters;
