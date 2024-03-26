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
    const colorBox = darkMode ? 'colorBox colorBox__darkmode' : 'colorBox';
    const cards = darkMode ? 'about__cards about__cards__darkmode':'about__cards';

    return (  
        <div className="about">
            <div className={cards}>
                <div className="link">
                    {Data[0].links.map((link, index) => (
                        <SocialLink key={index} data={link} />
                    ))}
                </div>
                <div className="content">
                    <div className="content__titleBox">
                        <Symbols symbols={Data[0].symbol} symbolssize="symbol"/>
                        <Title className="title" h2={Data[0].title}/>    
                    </div>
                    <div className="textAbout">
                        <Text text={Data[0].text} text2={Data[0].text2} text3={Data[0].text3}/>
                    </div>
                </div>
                <div className={colorBox}><img src={Data[0].image} alt="livre" className="colorBox__image"/></div>  
            </div>
        </div>
    );
};

export default About;



