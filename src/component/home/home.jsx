import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import Symbols from './../components-réutilisable/symbols/symbols';
import Title from './../components-réutilisable/title/title';
import Text from './../components-réutilisable/text/text';
import SocialLink from './../components-réutilisable/social-links/social-links';
import Data from './../../database/data.json';
import './home.scss';

const Home = () => {

    //DARKMODE CONFIG ==>
    const { darkMode } = useTheme();
    const colorBox = darkMode ? 'colorBox colorBox__darkmode' : 'colorBox';
    const homeCards = darkMode ? 'home__cards home__cards__darkmode' :'home__cards'
    

    return (
        <div className="home">
            <div className={homeCards}>
                <div className="home__cards__box">
                    <div>
                        <div className="home__cards__box__title">
                            <Symbols symbols={Data[1].symbol1} symbolssize="symbol"/>
                            <Title className="title" h2={Data[1].title} h3={Data[1].subtitle}/>
                            <Symbols symbols={Data[1].symbol2} symbolssize="symbol"/>
                        </div>
                        <Text text={Data[1].text} text2={Data[1].text2} text3={Data[1].text3} text4={Data[1].text4}/>
                    </div>
                    <div className={colorBox}>
                        <img src={Data[1].image} className="colorBox__image" alt="ordinateur"/>
                    </div>  
                </div>
                <div className="home__cards__link">
                    <Link smooth to='#contact'> 
                        <SocialLink data={Data[1].links[0]}/>
                    </Link>
                    <SocialLink data={Data[1].links[1]} />
                </div>
            </div>   
        </div>
    );
};

export default Home;



