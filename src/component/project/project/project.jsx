import React from 'react';
import Symbols from '../../home/home-childs-components/symbols/symbols';
import Title from '../../home/home-childs-components/title/title';
import './project.scss';
// import Carousel from './../project-childs-components/carrousel/carrousel';

const Project = () => {
    const symbol1 = "[";
    const symbol2 = "]";
    const title = "Mes projets";

    const classes = {
        project:'project',
        projectBox:"project__box",
        title:"project__title",
        symbol: 'project__symbols',
        link: 'project__link'
    };

    return (
        <div>
            <div className={classes.project}>
                <div className={classes.projectBox}>
                    <div className={classes.title}>
                        <Symbols symbols={symbol1} symbolssize={classes.symbol}/>
                        <Title h2={title}/>
                        <Symbols symbols={symbol2} symbolssize={classes.symbol}/>
                    </div>
                    {/* <Carousel/> */}
                </div>
            </div>
        </div>
    );
};

export default Project;
