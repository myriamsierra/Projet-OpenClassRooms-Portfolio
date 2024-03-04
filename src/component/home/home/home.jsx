//CLEAN CODE OK

import React from 'react';
import Symbols from '../home-childs-components/symbols/symbols';
import Title from '../home-childs-components/title/title';
import Text from '../home-childs-components/text/text';
import SocialLink from '../home-childs-components/social-links/social-links';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import buttonSound from './../../../assets/sound/click-21156.mp3';
import { soundEffect } from '../../../utils/function/sound-effect';
import './home.scss';

const Home = () => {
   
    //classe scss modulable
    const classes = {
        home :'home',
        cards :'home__cards',
        titleBox : 'home__title--contenair',
        title : 'title',
        link : 'home__link',
        symbol :'home__symbol'
    }

    //data modulable(a mettre en json + tard)
    const symbol1 = "<";
    const symbol2 = ">";
    const title = "Myriam Sierra";
    const subtitle = "Développeuse frontend junior"
    const text = "Bonjour et bienvenue sur mon site !  Je suis passionnée par la création d'expériences utilisateur exceptionnelles, je m'efforce de donner vie à des designs élégants et fonctionnels.Explorez mon portfolio pour découvrir mes projets et n'hésitez pas à me contacter pour discuter de vos idées ."
    const socialLinksData = [
        { text: "Contact", icon: faPlus, link: "#contact"},
        { text: "Email", icon: faPaperPlane, link: "mailto:myriamsierra84@gmail.com"}
    ];

    return (
        <div className={classes.home}>
            <div className={classes.cards}>
                <div>
                    <div className={classes.titleBox}>
                        <Symbols symbols={symbol1} symbolssize={classes.symbol}/>
                        <Title className={classes.title} h2={title} h3={subtitle}/>
                        <Symbols symbols={symbol2} symbolssize={classes.symbol}/>
                    </div>
                    <Text text={text}/>
                </div>
                <div className= {classes.link}>
                    <SocialLink data={socialLinksData[0]} onClick={() => soundEffect(buttonSound)}/>
                    <SocialLink data={socialLinksData[1]} onClick={() => soundEffect(buttonSound)}/>
                </div> 
            </div>
        </div>
    );
};

export default Home;



