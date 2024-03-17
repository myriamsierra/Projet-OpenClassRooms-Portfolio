import React from 'react';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import './filter.scss';

// Composant Filters

// ...importations et code existant

const Filters = ({ tag, onClick, active }) => {
    //darkmode theme
    const { darkMode } = useTheme();

    //classes scss modulable
    const classes = {
        filter: 'filter',
        tags: darkMode ? 'filter__tags filter__tags__darkmode' : 'filter__tags',
        active: 'active' // Add this class for styling active filters
    }

    return (
        <div className={`${classes.filter} ${active ? classes.active : ''}`} onClick={() => onClick(tag)}>
            <p className={classes.tags}>[ {tag} ]</p>
        </div>
    );
};

export default Filters;
