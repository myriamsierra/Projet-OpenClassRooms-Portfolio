import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import NotFound from './../../assets/images/error-404.png'
import './error-page.scss'



const ErrorPage = () => {
    const { darkMode } = useTheme();

    useEffect(() => {
        document.body.classList.toggle('body-dark-mode', darkMode);
    }, [darkMode]);

    return(
        <div className='error'>
            <section className='error__box'>
                <img src={NotFound} alt='not found'/>
                <Link smooth to='/#projects' className="error__backlink">RETOUR</Link>
            </section>
        </div>
    )
}
 
export default ErrorPage