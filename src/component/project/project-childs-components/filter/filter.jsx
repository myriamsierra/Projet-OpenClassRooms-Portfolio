import React from 'react';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import './filter.scss';

const Filters = ({tags}) => {

    //darkmode theme
    const { darkMode } = useTheme();

    //classes scss modulable
    const classes = {
        filter : 'filter',
        tags :darkMode ? 'filter__tags filter__tags__darkmode' : 'filter__tags',
    }
    
    return (
        <div className={classes.filter}>
            <p className={classes.tags}>[ {tags} ]</p>    
        </div>
    );
};

export default Filters;
