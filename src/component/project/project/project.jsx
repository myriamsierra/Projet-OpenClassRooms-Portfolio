
import React from 'react';
import Symbols from '../../home/home-childs-components/symbols/symbols';
import Title from '../../home/home-childs-components/title/title';
import './project.scss';
import Filters from '../project-childs-components/filter/filter';
import ProjectCard from '../project-childs-components/cards/project-cards';
import ImgBooki from './../../../assets/images/2024-03-08_18h18_32.png';
import ImgKasa from './../../../assets/images/2024-03-08_19h30_50.png';
import ImgMS from './../../../assets/images/2024-03-08_17h36_47.png'
import ImgGrimoire from './../../../assets/images/2024-03-08_18h08_05.png'
import ImgNina from './../../../assets/images/2024-03-08_18h23_09.png'

const Project = () => {
    const symbol1 = "[";
    const symbol2 = "]";
    const title = "Mes projets";

    const filtersData = [
        { tags: " Tous " },
        { tags: " React " },
        { tags: " Backend " },
        { tags: " Seo " },
        { tags: " Landing page " },
        { tags: " Javascrip" }
    ];

    const ProjectData = [
        {
            title: "PORTFOLIO",
            subtitle:"/ Projet OpenClassRooms",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            image: ImgMS,
            tags: ["Tous", "React"]
        },
        {
            title: "KASA",
            subtitle:"/ Projet OpenClassRooms",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            image:ImgKasa,
            tags: ["Tous", "React"]
        },
        {
            title: "MON VIEUX GRIMOIRE",
            subtitle:"/ Projet OpenClassRooms",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            image:ImgGrimoire,
            tags: ["Tous", "Backend"]
        },
        {
            title: "BOOKI",
            subtitle:"/ Projet OpenClassRooms",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            image: ImgBooki,
            tags: ["Tous", "Landing page"]
        },
        {
            title: "NINA CARDUCCI",
            subtitle:"/ Projet OpenClassRooms",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            image:ImgNina,
            tags: ["Tous", "Seo"]
        },
    ];

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
        <div>
            <div className={classes.project}>
                <div className={classes.projectBox}>
                    <div className={classes.title}>
                        <Symbols symbols={symbol1} symbolssize={classes.symbol} />
                        <Title h2={title} />
                        <Symbols symbols={symbol2} symbolssize={classes.symbol} />
                    </div>
                    <div className={classes.filter}>
                        {filtersData.map((data, index) => (
                            <Filters key={index} tags={data.tags}/>
                        ))}
                    </div>
                    <div className={classes.cards}>
                        {ProjectData.map((data, index) => (
                            <ProjectCard key={index} title={data.title} image={data.image} description={data.description} subtitle={data.subtitle}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;



// import React, { useState } from 'react';
// import Symbols from '../../home/home-childs-components/symbols/symbols';
// import Title from '../../home/home-childs-components/title/title';
// import './project.scss';
// import Filters from '../project-childs-components/filter/filter';
// import ProjectCard from '../project-childs-components/cards/project-cards';

// const Project = () => {
//     const symbol1 = "[";
//     const symbol2 = "]";
//     const title = "Mes projets";

//     const filtersData = [
//         { tags: "Tous" },
//         { tags: " React " },
//         { tags: " Backend " },
//         { tags: " Seo " },
//         { tags: " Landing page " },
//         { tags: " Javascrip" }
//     ];

//     const projectData = [
//         {
//             title: "PORTFOLIO",
//             description:"blablabla",
//             image: window.location.origin + "/assets/images/herobanner.png",
//             tags: ["Tous", "React"]
//         },
//         {
//             title: "KASA",
//             description:"blablabla",
//             image:"./frontend/src/assets/images/Booki.png",
//             tags: ["Tous", "React"]
//         },
//         {
//             title: "MON VIEUX GRIMOIRE",
//             description:"blablabla",
//             image:"./../../../assets/images/5fe801e7425d875ca49397b9b3613520.jpg",
//             tags: ["Tous", "Backend"]
//         },
//         {
//             title: "BOOKI",
//             description:"blablabla",
//             image:"./../../../assets/images/Booki.png",
//             tags: ["Tous", "Landing page"]
//         },
//         {
//             title: "NINA CARDUCCI",
//             description:"blablabla",
//             image:"./../../../assets/images/Booki.png",
//             tags: ["Tous", "Seo"]
//         },
//     ];

//     const classes = {
//         project: 'project',
//         projectBox: "project__box",
//         title: "project__title",
//         symbol: 'project__symbols',
//         link: 'project__link',
//         filter: 'project__filter',
//         cards: 'project__cards'
//     };

//     // État pour stocker les tags sélectionnés
//     const [selectedTags, setSelectedTags] = useState([]);

//     // Fonction pour gérer le clic sur un tag
//     const handleTagClick = (tag) => {
//         if (selectedTags.includes(tag)) {
//             setSelectedTags(selectedTags.filter(item => item !== tag));
//         } else {
//             setSelectedTags([...selectedTags, tag]);
//         }
//     };

//     // Filtrer les données du projet en fonction des tags sélectionnés
//  // Filtrer les données du projet en fonction des tags sélectionnés
// // Filtrer les données du projet en fonction des tags sélectionnés
// const filteredProjectData = projectData.filter(item => {
//     for (let selectedTag of selectedTags) {
//         if (item.tags.includes(selectedTag)) {
//             return true;
//         }
//     }
//     return false;
// });

// return (
//     <div>
//         <div className={classes.project}>
//             <div className={classes.projectBox}>
//                 <div className={classes.title}>
//                     <Symbols symbols={symbol1} symbolssize={classes.symbol} />
//                     <Title h2={title} />
//                     <Symbols symbols={symbol2} symbolssize={classes.symbol} />
//                 </div>
//                 <div className={classes.filter}>
//                     {filtersData.map((data, index) => (
//                         <Filters key={index} tags={data.tags} onClick={() => handleTagClick(data.tags)}/>
//                     ))}
//                 </div>
//                 <div className={classes.cards}>
//                     {filteredProjectData.map((data, index) => (
//                         <ProjectCard key={index} title={data.title} image={data.image} description={data.description} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
// );
                    
//  };

// export default Project;