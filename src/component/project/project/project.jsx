import React, { useState } from 'react';
import Symbols from '../../components-réutilisable/symbols/symbols';
import Title from '../../components-réutilisable/title/title';
import './project.scss';
import Filters from './../project-childs/filter/filter';
import { Link } from 'react-router-dom';
import ProjectCard from '../project-childs/cards/project-cards';
import ProjectData from './../../../database/projet.json';

const Project = () => {
    const symbol1 = "[";
    const symbol2 = "]";
    const title = "Mes projets";

    const filtersData = [
        { tag: "Tous" },
        { tag: "React" },
        { tag: "Backend" },
        { tag: "Seo" },
        { tag: "Landing page" },
        { tag: "Javascript" }
    ];

    const [activeTags, setActiveTags] = useState(["Tous"]);
    const [filteredProjects, setFilteredProjects] = useState(ProjectData);

    const handleTagClick = tag => {
        if (tag === "Tous") {
            setFilteredProjects(ProjectData);
        } else {
            const filtered = ProjectData.filter(project => project.tag.includes(tag));
            setFilteredProjects(filtered);
        }
        setActiveTags([tag]);
    };

    const classes = {
        project: 'project',
        projectBox: "project__box",
        title: "project__title",
        symbol: 'project__symbols',
        link: 'project__link',
        filter: 'project__filter',
        cards: 'project__cards'
    };

    return (
        <div className={classes.project}>
            <div className={classes.projectBox}>
                <div className={classes.title}>
                    <Symbols symbols={symbol1} symbolssize={classes.symbol} />
                    <Title h2={title} />
                    <Symbols symbols={symbol2} symbolssize={classes.symbol} />
                </div>
                <div className={classes.filter}>
                    {filtersData.map((data, index) => (
                        <Filters key={index} tag={data.tag} onClick={handleTagClick} active={activeTags.includes(data.tag)} />
                    ))}
                </div>
                {filteredProjects.map((data, index) => (
                    <Link key={index} to={`/Projet/${data.id}`} className={classes.cards}>
                        <ProjectCard key={index} title={data.title} image={data.image} description={data.description} subtitle={data.subtitle} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Project;



















// import React, { useState, useEffect } from 'react';
// import Symbols from '../../home/home-childs-components/symbols/symbols';
// import Title from '../../home/home-childs-components/title/title';
// import './project.scss';
// import Filters from '../project-childs-components/filter/filter';
// import ProjectCard from '../project-childs-components/cards/project-cards';
// import ImgBooki from './../../../assets/images/2024-03-08_18h18_32.png';
// import ImgKasa from './../../../assets/images/2024-03-08_19h30_50.png';
// import ImgMS from './../../../assets/images/2024-03-08_17h36_47.png';
// import ImgGrimoire from './../../../assets/images/2024-03-08_18h08_05.png';
// import ImgNina from './../../../assets/images/2024-03-08_18h23_09.png';

// const Project = () => {
//     const symbol1 = "[";
//     const symbol2 = "]";
//     const title = "Mes projets";

//     const filtersData = [
//         { tag: "Tous" },
//         { tag: "React" },
//         { tag: "Backend" },
//         { tag: "Seo" },
//         { tag: "Landing page" },
//         { tag: "Javascript" }
//     ];

//     const ProjectData = [
//         {
//             title: "PORTFOLIO",
//             subtitle: "/ Projet OpenClassRooms",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//             image: ImgMS,
//             tag: ["Tous", "React"]
//         },
//         {
//             title: "KASA",
//             subtitle: "/ Projet OpenClassRooms",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//             image: ImgKasa,
//             tag: ["Tous", "React"]
//         },
//         {
//             title: "MON VIEUX GRIMOIRE",
//             subtitle: "/ Projet OpenClassRooms",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//             image: ImgGrimoire,
//             tag: ["Tous", "Backend"]
//         },
//         {
//             title: "BOOKI",
//             subtitle: "/ Projet OpenClassRooms",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//             image: ImgBooki,
//             tag: ["Tous", "Landing page"]
//         },
//         {
//             title: "NINA CARDUCCI",
//             subtitle: "/ Projet OpenClassRooms",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
//             image: ImgNina,
//             tag: ["Tous", "Seo"]
//         },
//     ];

//     const [activeTags, setActiveTags] = useState(["Tous"]);
//     const [visibleProjects, setVisibleProjects] = useState([]);

//     useEffect(() => {
//         filterProjects();
//     }, [activeTags]);

//     const handleTagClick = tag => {
//         let updatedTags = [];
//         if (activeTags.includes(tag)) {
//             updatedTags = activeTags.filter(t => t !== tag);
//         } else {
//             updatedTags = [...activeTags, tag];
//         }
//         setActiveTags(updatedTags);
//     };

//     const filterProjects = () => {
//         const filtered = ProjectData.filter(project => {
//             // Vérifier si tous les tags actifs sont inclus dans les tags du projet
//             return activeTags.every(tag => project.tag.includes(tag));
//         });
//         setVisibleProjects(filtered);
//     };

//     const classes = {
//         project: 'project',
//         projectBox: "project__box",
//         title: "project__title",
//         symbol: 'project__symbols',
//         link: 'project__link',
//         filter: 'project__filter',
//         cards: 'project__cards'
//     };

//     return (
//         <div className={classes.project}>
//             <div className={classes.projectBox}>
//                 <div className={classes.title}>
//                     <Symbols symbols={symbol1} symbolssize={classes.symbol} />
//                     <Title h2={title} />
//                     <Symbols symbols={symbol2} symbolssize={classes.symbol} />
//                 </div>
//                 <div className={classes.filter}>
//                     {filtersData.map((data, index) => (
//                         <Filters key={index} tag={data.tag} onClick={handleTagClick} active={activeTags.includes(data.tag)} />
//                     ))}
//                 </div>
//                 <div className={classes.cards}>
//                     {visibleProjects.map((data, index) => (
//                         <ProjectCard key={index} title={data.title} image={data.image} description={data.description} subtitle={data.subtitle} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Project;
