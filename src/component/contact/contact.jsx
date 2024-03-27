import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import Title from './../components-réutilisable/title/title';
import Symbols from './../components-réutilisable/symbols/symbols';
import ImgTest from './../../assets/images/contactez-nous.png'
import './contact.scss';

const Contact = () => {
    
    //DARK MODE CONFIG ==>
    const { darkMode } = useTheme();
    const classes = {
        formMess: darkMode ? 'contact__form__message contact__form__message__darkmode' : 'contact__form__message',
        formButton: darkMode ? 'contact__form__button contact__form__button__darkmode' : 'contact__form__button',
        formInfo: darkMode ? 'contact__form__info contact__form__info__darkmode' : 'contact__form__info',
        contactBox: darkMode ? 'contact__box  contact__box__darkmode' : ' contact__box',
        colorBox: darkMode ? 'color-box color-box__darkmode':'color-box',
        thanks:darkMode ? 'thanks thanks__darkmode':'thanks',
    };
  
    return (
        <div className="contact">
            <div className={classes.contactBox}>
                <div className="contact__title-box">
                    <Symbols symbols="<" symbolssize="contact__symbol" />
                    <Title h2="Contact" />
                    <Symbols symbols=">" symbolssize="contact__symbol" />
                </div>
                <form 
                    className="contact__form"
                    method="POST" 
                    name="contact" 
                    data-netlify="true" 
                   >
                    
                    <input 
                        type="hidden" 
                        name="contactgit" 
                        value="contact" 
                    />
    
                    <div className={classes.formInfo}>
                        <input
                            className="contact__form__name" 
                            type="text" 
                            netlify-name="name"  
                            placeholder="Nom ..."
                        />
                        <input 
                            className="contact__form__email" 
                            type="email" 
                            netlify-name="email" 
                            placeholder="Email ..."
                        />
                    </div>
    
                    <textarea 
                        className={classes.formMess} 
                        netlify-name="message" 
                        placeholder="Votre message ici..."
                    />
    
                    <button 
                        className={classes.formButton}  
                        type="submit">
                        <i className="fa-regular fa-paper-plane"></i> Envoyer
                    </button>
                </form>
                <div className={classes.colorBox}><img src={ImgTest} className="contact__illustration" alt="bla"/></div>  
            </div>
            <p className={classes.thanks}>Merci pour ta visite <i class="fa-solid fa-heart"></i></p>
        </div>
    );
    
};

export default Contact;


   

              
                
        