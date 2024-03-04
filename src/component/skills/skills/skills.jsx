import React from 'react';
import Cards from './../skills-childs-components/cards-skills/cards-skills';
import Symbols from '../../home/home-childs-components/symbols/symbols';
import Title from '../../home/home-childs-components/title/title';
import SocialLink from './../../home/home-childs-components/social-links/social-links';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import buttonSound from './../../../assets/sound/click-21156.mp3';
import { soundEffect } from './../../../utils/function/sound-effect';
import './skills.scss';

const Skills = () => {

    //data modulable (a mettre en format json+tard)
    const symbol1 = "{";
    const symbol2 = "}";
    const title = "Mes compétences";

    const socialLinksData = [
        { text: "cv", icon: faFile, link: "https://www.linkedin.com/in/myriam-sierra-507436264/" },
        { text: "cv", icon: faFileArrowDown, link: "https://github.com/myriamsierra" },
    ];

    const cardsData = [
        {
            titleRecto: "FRONT-END",
            textRecto: faCode,
            textVerso: ["HTML", "CSS/SCSS", "JavaScript", "React", "SEO"] 
        },
        {
            titleRecto: "DESIGN",
            textRecto: faBrush,
            textVerso: ["Photoshop", "Figma", "UX/UI Design", "Illustration", "Photographie"]
        },
        {
            titleRecto: "SOFT-SKILLS",
            textRecto: faMugHot,
            textVerso: ["Patience", "Curiosité", "Autonomie"]
        },
    ];

    //classes scss modulable 
    const classes = {
        skills:'skills',
        skillsBox :'skills__box',
        title : 'skills__title',
        cards :'skills__cards',
        symbol: 'skills__symbols',
        link: 'skills__link'
    };

    return (
        <div>
            <div className={classes.skills}>
                <div className={classes.skillsBox}>
                    <div className={classes.title}>
                        <Symbols symbols={symbol1} symbolssize={classes.symbol}/>
                        <Title h2={title}/>
                        <Symbols symbols={symbol2} symbolssize={classes.symbol}/>
                    </div>
                    <div className={classes.cards}>
                    {cardsData.map((data, index) => (
                        <Cards key={index} 
                            titleRecto={data.titleRecto} titleVerso={data.titleVerso} textVerso={data.textVerso}
                            textRecto={data.textRecto} // Ajoutez cette ligne
                        />
                    ))}
                    </div>
                    <div className= {classes.link}>
                        <SocialLink data={socialLinksData[0]} onClick={() => soundEffect(buttonSound)} target="_blank"/>
                        <SocialLink data={socialLinksData[1]} onClick={() => soundEffect(buttonSound)} target="_blank"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
