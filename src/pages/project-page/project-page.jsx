import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../utils/dark-mode/dark-mode';
import SocialLink from '../../component/home/home-childs-components/social-links/social-links';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import './project-page.scss';
import Carousel from './project-page-childs/carousel';
import ProjectData from './../../projet.json'



const ProjectPage = () => {

    const {id} = useParams()
    const projet = ProjectData.find((projet) => projet.id === id)
   
    const { darkMode } = useTheme();
    useEffect(() => {
        document.body.classList.toggle('body-dark-mode', darkMode);
    }, [darkMode]);

   
    
  
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
        </main>
    );
}

export default ProjectPage;
