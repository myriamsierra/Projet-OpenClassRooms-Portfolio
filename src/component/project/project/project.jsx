
import React from 'react';
import Symbols from '../../home/home-childs-components/symbols/symbols';
import Title from '../../home/home-childs-components/title/title';
import './project.scss';
import Filters from '../project-childs-components/filter/filter';
import ProjectCard from '../project-childs-components/cards/project-cards';
import imgBooki from './../../../assets/images/2024-03-07_20h44_30.png';
import imgKasa from './../../../assets/images/kasa-logo-color.png'

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
            description:"blablabla",
            image: window.location.origin + "/assets/images/herobanner.png",
            tags: ["Tous", "React"]
        },
        {
            title: "KASA",
            description:"blablabla",
            image:imgKasa,
            tags: ["Tous", "React"]
        },
        {
            title: "MON VIEUX GRIMOIRE",
            description:"blablabla",
            image:"./../../../assets/images/5fe801e7425d875ca49397b9b3613520.jpg",
            tags: ["Tous", "Backend"]
        },
        {
            title: "BOOKI",
            description:"blablabla",
            image: imgBooki,
            tags: ["Tous", "Landing page"]
        },
        {
            title: "NINA CARDUCCI",
            description:"blablabla",
            image:"./../../../assets/images/Booki.png",
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
                            <ProjectCard key={index} title={data.title} image={data.image} description={data.description} />
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