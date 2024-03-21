import React, { useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import SocialLink from '../../component/components-réutilisable/social-links/social-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'; // Import des icônes d'angle
import './project-page.scss';
import Carousel from './project-page-childs/carousel';
import ProjectData from './../../database/projet.json';

const ProjectPage = () => {
    const {id} = useParams();
    const projet = ProjectData.find((projet) => projet.id === id);
    const projetIndex = ProjectData.findIndex((projet) => projet.id === id);
    const { darkMode } = useTheme();

    useEffect(() => {
        document.body.classList.toggle('body-dark-mode', darkMode);
    }, [darkMode]);

    const getNextProjectId = () => {
        if (projetIndex < ProjectData.length - 1) {
            return ProjectData[projetIndex + 1].id;
        } else {
            return ProjectData[0].id; // Retour au premier projet si c'est le dernier
        }
    };

    const getPreviousProjectId = () => {
        if (projetIndex > 0) {
            return ProjectData[projetIndex - 1].id;
        } else {
            return ProjectData[ProjectData.length - 1].id; // Retour au dernier projet si c'est le premier
        }
    };

    // Classes scss modulables
    const classes = {
        project: "project-page",
        projectBox:"project-page__box",
        title: "project-page__title",
        subtitle: darkMode ? 'project-page__subtitle project-page__subtitle__darkmode':'project-page__subtitle',
        textBox: "project-page__text-box",
        techno: darkMode ? 'project-page__techno project-page__techno__darkmode' : 'project-page__techno',
        link:"project-page__link",
        form: darkMode ? 'project-page__form project-page__form__darkmode' : 'project-page__form',
        backlink: darkMode ? 'project-page__backlink project-page__backlink__darkmode' : 'project-page__backlink',
        directionlink:"project-page__directionlink"
    };

    return (
        <main className={classes.project}>
            <div className={classes.projectBox}>
                <div>
                    <h2 className={classes.title}>{projet.title}</h2>
                    <h3 className={classes.subtitle}>{projet.subtext}</h3>
                </div>
                <div className={classes.textBox}>
                    {projet.text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className={classes.techno}>
                    {projet.techno.map((techno, index) => (
                        <span key={index}>{techno}</span>
                    ))}
                </div>
                <div className={classes.form}>
                   <Carousel images={projet.pictures}/>
                </div>
                <div className={classes.link}>
                    {projet.links.map((link, index) => (
                        <SocialLink key={index} data={link}/>
                    ))}
                </div>
            </div>
            <div className={classes.backlink}>
            <Link smooth to='/#projects' className={classes.backlink}> <FontAwesomeIcon icon={faAngleLeft}/>Retour</Link>
                <div className={classes.directionlink}>
                    <Link to={`/Projet/${getPreviousProjectId()}`}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Projet Précédent
                    </Link>
                    <Link to={`/Projet/${getNextProjectId()}`} >
                        Projet Suivant <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default ProjectPage;
