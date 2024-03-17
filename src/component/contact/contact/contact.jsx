import React, { useState } from 'react';
import { useTheme } from './../../../utils/dark-mode/dark-mode';
import Title from './../../home/home-childs-components/title/title';
import Symbols from './../../home/home-childs-components/symbols/symbols';
import './contact.scss';

const Contact = () => {

     //darkmode theme
     const { darkMode } = useTheme();

    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Réinitialisez le formulaire après l'envoi réussi
            setFormData({
                nom: '',
                email: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error( error);
        });
    };

      // Classes CSS modulables
      const classes = {
        contact: 'contact',
        contactBox: 'contact__box',
        titleBox: 'contact__tittle-box',
        symbol: 'contact__symbol',
        form: 'contact__form',
        formName: 'contact__form__name',
        formEmail: 'contact__form__email',
        formMess: darkMode ? 'contact__form__message contact__form__message__darkmode' : 'contact__form__message',
        formButton: darkMode ? 'contact__form__button contact__form__button__darkmode' : 'contact__form__button',
        formInfo: darkMode ? 'contact__form__info contact__form__info__darkmode' : 'contact__form__info',
    };

    return (
        <div className={classes.contact}>
            <div className={classes.contactBox}>
                <div className={classes.titleBox}>
                    <Symbols symbols="<" symbolssize={classes.symbol} />
                    <Title h2="Contact" />
                    <Symbols symbols=">" symbolssize={classes.symbol} />
                </div>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.formInfo}>
                        <input
                            className={classes.formName}
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            placeholder="Votre nom ici..."
                        />
                        <input
                            className={classes.formEmail}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Votre email ici..."
                        />
                    </div>
                    <textarea
                        className={classes.formMess}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Votre message ici..."
                    />
                    <button className={classes.formButton} type="submit">
                        Envoyer
                    </button>
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