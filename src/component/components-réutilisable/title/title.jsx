import React from 'react';
import { useTheme } from './../../../utils/theme-provider/dark-mode';
import './title.scss'

const Title = ({h2,h3}) => {

    //DARKMODE CONFIG ==>
    const { darkMode } = useTheme();
    const title = darkMode ? 'title title__darkmode': 'title' 
    const subtitle = darkMode ? 'subtitle  subtitle__darkmode':'subtitle'
    

    return (
        <div className="titleBox">
            <h2 className={title}>{h2}</h2>
            <h3 className={subtitle}>{h3}</h3>
        </div>
    );
};

export default Title;
