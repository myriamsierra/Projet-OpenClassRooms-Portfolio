import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './../../component/header/header/header';
import Footer from './../../component/footer/footer';
import MainHomePage from '../main-home-page/main-home-page';
import ErrorPage from './../error-page/error-page';
import About from '../../component/about/about';
import Skills from '../../component/skills/skills/skills';
import Project from '../../component/project/project/project';
import Contact from '../../component/contact/contact/contact';


const RouterConfig = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<MainHomePage/>}/> 
      <Route path="/*" element={<ErrorPage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Project} />
      <Route path="/contact" component={Contact} />
    </Routes>
    <Footer/>
  </Router>
);

export default RouterConfig;
