import React,{useEffect} from 'react';
import About from '../../component/about/about';
import Skills from '../../component/skills/skills/skills';
import Project from '../../component/project/project/project';
import Contact from '../../component/contact/contact/contact';
import Home from './../../component/home/home/home';
import { useTheme } from '../../utils/dark-mode/dark-mode';
import './main-home-page.scss';

const MainHomePage = () => {

    const {darkMode} = useTheme();

    // body dark mode
    useEffect(() => {
        document.body.classList.toggle('body-dark-mode', darkMode);
    }, [darkMode]);
    
    return (
            <main >
                <section id="home"><Home/></section>
                <section id="about"><About/></section>
                <section id="skills"><Skills/></section>
                <section id="projects"><Project/></section>
                <section id="contact"><Contact/></section>
            </main>
    );
}

export default MainHomePage;
