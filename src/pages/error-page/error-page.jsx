import React from 'react';
import './error-page.scss'


const ErrorPage = () => {
    return(
        <div >
            <section className='error'>
                <h2 className='error__title'>404</h2>
                <h3 className='error__subtitle'>page non trouvée</h3>
                <p className='error__button'> retour accueil</p>
            </section>
        </div>
    )
}
 
export default ErrorPage