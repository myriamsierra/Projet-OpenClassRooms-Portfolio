import React,{useEffect} from 'react';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import About from '../../component/about/about';
import Skills from '../../component/skills/skills/skills';
import Project from '../../component/project/project/project';
import Contact from '../../component/contact/contact';
import Home from '../../component/home/home';
import UploadCV from '../../component/uploadCV/uploadCV';
import './home-page.scss';

const MainHomePage = () => {

    //DARKMODE CONFIG ==>
    const {darkMode} = useTheme();
    useEffect(() => {
        document.body.classList.toggle('body-dark-mode', darkMode);
    }, [darkMode]);
    
    return (
            <main >
                <section id="home"><Home/></section>
                <section id="about"><About/></section>
                <section id="skills"><Skills/></section>
                <section><UploadCV/></section>
                <section id="projects"><Project/></section>
                <section id="contact"><Contact/></section>
            </main>
    );
}

export default MainHomePage;
