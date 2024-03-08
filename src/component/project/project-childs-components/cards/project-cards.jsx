import React from 'react';
import './project-cards.scss'

const ProjectCard = ({ image,title,description }) => {

    //classes scss modulable
    const classes = {
        card:"project-cards",
        title:"project-cards__title",
        image:"project-cards__image",
        description:"project-cards__description",
        overlay:"project-cards__overlay",
        button:"project-cards__button"
    }

    return (
        <div className={classes.card}>
            <img className={classes.image} src={image} alt="logo du projet"/>
            <h3 className={classes.title}>{title}</h3>  
            <h4 className={classes.description}>{description}</h4>
            <div class={classes.overlay}></div>
            <button class={classes.button}>En savoir plus</button>  
        </div>
    );
};

export default ProjectCard;
