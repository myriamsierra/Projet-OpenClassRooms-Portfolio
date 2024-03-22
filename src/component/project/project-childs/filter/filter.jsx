import React from 'react';
import { useTheme } from '../../../../utils/theme-provider/dark-mode';
import './filter.scss';

const Filters = ({ tag, onClick, active }) => {
  
    const { darkMode } = useTheme();
    const classes = {
        filter: 'filter',
        tags: darkMode ? 'filter__tags filter__tags__darkmode' : 'filter__tags',
        active: 'active' // Add this class for styling active filters
    }

    return (
        <div className={`${classes.filter} ${active ? classes.active : ''}`} onClick={() => onClick(tag)}>
            <p className={classes.tags}> {tag} </p>
        </div>
    );
};

export default Filters;
