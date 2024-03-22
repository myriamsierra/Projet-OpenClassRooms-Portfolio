import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import SocialLink from './../components-réutilisable/social-links/social-links';
import Title from './../components-réutilisable/title/title';
import Text from './../components-réutilisable/text/text';
import Symbols from '../components-réutilisable/symbols/symbols';
import Data from './../../database/data.json';
import './about.scss';

const About = () => {
    // DARKMODE CONFIG
    const { darkMode } = useTheme();
    const picture = darkMode ? 'about__picture about__picture__darkmode' : 'about__picture';
    
    return (  
        <div className="about">
            <div className="about__cards">
                <div className="about__link">
                    {Data[0].links.map((link, index) => (
                        <SocialLink key={index} data={link} />
                    ))}
                </div>
                <div className="about__content">
                    <div className="about__title--contenair">
                        <Symbols symbols={Data[0].symbol} symbolssize="about__symbol"/>
                        <Title className="about__title" h2={Data[0].title}/>    
                    </div>
                    <div className="about__text">
                        <Text text={Data[0].text} text2={Data[0].text2} text3={Data[0].text3}/>
                    </div>
                </div>
                <div className={picture}><img src={Data[0].image} alt="livrer" className="about__illustration"/></div>  
            </div>
        </div>
    );
};

export default About;



