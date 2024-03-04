//CLEAN CODE OK

import React from 'react';
import Title from './../home/home-childs-components/title/title';
import Text from './../home/home-childs-components/text/text';
import SocialLink from './../home/home-childs-components/social-links/social-links';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import buttonSound from './../../assets/sound/click-21156.mp3';
import { soundEffect } from './../../utils/function/sound-effect';
import Symbols from '../home/home-childs-components/symbols/symbols';
import './about.scss';

const About = () => {
   
    //classe scss modulable
    const classes = {
        about :'about',
        cards :'about__cards',
        content :'about__content',
        titleBox : 'about__title--contenair',
        title : 'about-title',
        link : 'about__link',
        symbol :'about__symbol'
    }

    //data modulable(a mettre en json + tard)
    const title = "A propos de moi";
    const text = "Je suis une développeuse web résidant à Marseille, passionnée par le développement web depuis deux ans. Avec une formation débutée sur OpenClassrooms en août 2023, je m'inspire de l'univers des jeux vidéo et du cinéma pour créer des expériences web uniques. Découvrez mes projets sur GitHub et n'hésitez pas à consulter mon profil LinkedIn pour en savoir plus sur mon parcours professionnel."
    const symbol ="/"
    const socialLinksData = [
        { text: "linkedin", icon: faLinkedin, link: "https://www.linkedin.com/in/myriam-sierra-507436264/"},
        { text: "github", icon: faGithub, link: "https://github.com/myriamsierra"}, 
    ];
    

    return (  
        <div className={classes.about}>
            <div className={classes.cards}>
                <div className= {classes.link}>
                    <SocialLink data={socialLinksData[0]} onClick={() => soundEffect(buttonSound)} target="_blank"/>
                    <SocialLink data={socialLinksData[1]} onClick={() => soundEffect(buttonSound)} target="_blank"/>
                </div>
                <div className={classes.content}>
                    <div className={classes.titleBox}>
                    <Symbols symbols={symbol} symbolssize={classes.symbol}/>
                        <Title className={classes.title} h2={title}/>    
                    </div>
                    <Text text={text}/>
                </div>
                
            </div>
        </div>
    );
};

export default About;


























// import React from 'react';
// import './about.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
// import hoverSound from './../../assets/sound/ui-click-43196.mp3';

// const About = () => {

//     const playHoverSound = () => {
//         const audio = new Audio(hoverSound);
//         audio.play();
//     };

//     return (
//         <div>
//             <div className='about #about' >
//                 <h2 className='about__title'><span className='about__design'>/</span>A propos de moi</h2>
//                 <p className='about__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, itaque! Dolor quaerat amet mollitia a ea nemo earum nesciunt iste rerum id neque inventore quam eius, odit ipsam praesentium tempore.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, itaque! Dolor quaerat amet mollitia a ea nemo earum nesciunt iste rerum id neque inventore quam eius, odit ipsam praesentium tempore.</p>
//                 <div className="social-links">
//                     <a href="URL_DE_VOTRE_PROFIL_TWITTER" onClick={playHoverSound} className="social-btn flex-center"><FontAwesomeIcon icon={faTwitter} />
//                         <span>twitter</span></a>
//                     <a href="https://www.linkedin.com/in/myriam-sierra-507436264/" onClick={playHoverSound} target='blank' className="social-btn flex-center"><FontAwesomeIcon icon={faLinkedin} />
//                         <span>linkedin</span></a>
//                     <a href="https://github.com/myriamsierra" onClick={playHoverSound} className="social-btn flex-center" target='blank'><FontAwesomeIcon icon={faGithub} />
//                         <span>github</span></a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default About;
