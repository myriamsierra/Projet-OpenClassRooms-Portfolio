import React from 'react';
import { useTheme } from '../../../../utils/dark-mode/dark-mode';
import './project-cards.scss'

const ProjectCard = ({ image, title,subtitle, description }) => {

    //darkmode theme
    const { darkMode } = useTheme();

    const classes = {
        card:darkMode ? 'project-cards project-cards__darkmode' : 'project-cards',
        title:darkMode ? 'project-cards__title project-cards__title__darkmode' : 'project-cards__title',
        imageContainer: "project-cards__image-container",
        description: "project-cards__description",
        overlay:darkMode ? 'project-cards__overlay project-cards__overlay__darkmode' : 'project-cards__overlay',
        button:darkMode ? 'project-cards__button project-cards__button__darkmode' : 'project-cards__button',
        image: darkMode ? 'project-cards__image project-cards__image__darkmode' : 'project-cards__image',
        titleBox:"project-cards__title-box",
        subtitle:darkMode ? 'project-cards__subtitle project-cards__subtitle__darkmode' : 'project-cards__subtitle',
        imageBox:darkMode ? 'project-cards__imagebox project-cards__imagebox__darkmode' : 'project-cards__imagebox',
    }

    return (
        <div className={classes.card}>
            <div>
                <div className={classes.titleBox}>
                    <h3 className={classes.title}>{title}</h3>
                    <h4 className={classes.subtitle}>{subtitle}</h4>
                </div>
                <p className={classes.description}>{description}</p>
            </div>
            <div className={classes.imageBox}><img className={classes.image} src={image} alt="logo du projet" /></div>
            <div className={classes.overlay}></div>
            <button className={classes.button}>En savoir plus</button>
        </div>
    );
};

export default ProjectCard;
