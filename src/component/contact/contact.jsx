import React from 'react';
import { useTheme } from './../../utils/theme-provider/dark-mode';
import Title from './../components-réutilisable/title/title';
import Symbols from './../components-réutilisable/symbols/symbols';
import './contact.scss';

const Contact = () => {
    
    //DARK MODE CONFIG ==>
    const { darkMode } = useTheme();
    const classes = {
        formMess: darkMode ? 'contact__form__message contact__form__message__darkmode' : 'contact__form__message',
        formButton: darkMode ? 'contact__form__button contact__form__button__darkmode' : 'contact__form__button',
        formInfo: darkMode ? 'contact__form__info contact__form__info__darkmode' : 'contact__form__info',
    };

    return (
        <div className="contact">
            <div className="contact__box">
                <div className="contact__tittle-box">
                    <Symbols symbols="<" symbolssize="contact__symbol" />
                    <Title h2="Contact" />
                    <Symbols symbols=">" symbolssize="contact__symbol" />
                </div>
                <form className="contact__form" method='post' name="contact" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={classes.formInfo}>
                        <input className="contact__form__name" type="text" name="nom" placeholder="Votre nom ici..."/>
                        <input className="contact__form__email" type="email" name="email" placeholder="Votre email ici..."/>
                    </div>
                    <textarea className={classes.formMess} name="message" placeholder="Votre message ici..."/>
                    <button className={classes.formButton} type="submit"><i class="fa-regular fa-paper-plane"></i> Envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;


   

              
                
                   
                        
                       
                    
                   
      // import Modal from 'react-modal';              
   // import ModaleContact from './../modale-contact/modale-contact';
// import { useTheme } from './../../../utils/dark-mode/dark-mode';    

// const { darkMode } = useTheme();
// const darkContact = darkMode ? 'dark-mode-contact' : '';

// const [OpenModal, setOpenModel] = useState(false);
// const [formData, setFormData] = useState({nom: '', prenom: '', message: ''});

// const openModal = () => {setOpenModel(true)};
// const closeModal = () => {setOpenModel(false)};

// const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({ nom: '', prenom: '', message: ''});
//     openModal(); 
// };

// return (
//     <div>
//         <div className='contact'>
//             <h2 className='contact__title'>Contact</h2>
//             <form  className={`contact__form ${darkContact}`} onSubmit={handleSubmit}>
//                 <div className='contact__name'>
//                     <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" className='contact__nom'/>
//                     <input type="text" name="prenom" value={formData.prenom} onChange={handleChange}  placeholder="Prénom" className='contact__prenom'/>
//                 </div>
//                 <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className='contact__message'/>
//                 <button type="submit" className='contact__button'>envoyer</button> {/* Retirer l'appel à openModal d'ici */}
//             </form>
//         </div>
//                 <Modal isOpen={OpenModal} onRequestClose={closeModal} className='react-modal' overlayClassName="overlay-project">
//                     <ModaleContact closeModal={closeModal}/>
//                 </Modal>
//     </div>
// );
// }