import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import Symbols from './../components-réutilisable/symbols/symbols';
import Title from './../components-réutilisable/title/title';
import Text from './../components-réutilisable/text/text';
import SocialLink from './../components-réutilisable/social-links/social-links';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { HashLink as Link } from 'react-router-hash-link';
import ImgTest from './../../assets/images/10740609.png'
import './home.scss';

const Home = () => {
    const { darkMode } = useTheme();
    const classes = {
        home :'home',
        cards :'home__cards',
        titleBox : 'home__title--contenair',
        title : 'title',
        link : 'home__link',
        symbol :'home__symbol',
        picture: darkMode ? 'home__picture home__picture__darkmode' : 'home__picture',
        box:'home__box',
        illustration:'home__illustration'
    }

    //data modulable(a mettre en json + tard)
    const symbol1 = "<";
    const symbol2 = ">";
    const title = "Myriam Sierra";
    const subtitle = "Développeuse frontend junior"
    const text = "Bonjour et bienvenue sur mon site !  Je suis passionnée par la création d'expériences utilisateur exceptionnelles, je m'efforce de donner vie à des designs élégants et fonctionnels.Explorez mon portfolio pour découvrir mes projets et n'hésitez pas à me contacter pour discuter de vos idées ."
    
    const socialLinksData = [
        { text: "Me contacter ici", icon: faPlus, link: "#contact"},
        { text: " Ou par email", icon: faPaperPlane, link: "mailto:myriamsierra84@gmail.com"}
    ];

    return (
        <div className={classes.home}>
            <div className={classes.cards}>
                <div className={classes.box}>
                    <div>
                        <div className={classes.titleBox}>
                            <Symbols symbols={symbol1} symbolssize={classes.symbol}/>
                            <Title className={classes.title} h2={title} h3={subtitle}/>
                            <Symbols symbols={symbol2} symbolssize={classes.symbol}/>
                        </div>
                        <Text text={text}/>
                    </div>
                    <div className={classes.picture}><img src={ImgTest} className={classes.illustration} alt="bla"/></div>  
                </div>
                <div className= {classes.link}>
                    <Link smooth to='#contact'> <SocialLink data={socialLinksData[0]}/></Link>
                    <SocialLink data={socialLinksData[1]} />
                </div>
            </div>   
        </div>
    );
};

export default Home;



