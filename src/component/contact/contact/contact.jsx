import React, { useState } from 'react';
import Modal from 'react-modal';
import './contact.scss';
import ModaleContact from './../modale-contact/modale-contact';
import { useTheme } from './../../../utils/dark-mode/dark-mode';

const Contact = () => {
    const { darkMode } = useTheme();
    const darkContact = darkMode ? 'dark-mode-contact' : '';

    const [OpenModal, setOpenModel] = useState(false);
    const [formData, setFormData] = useState({nom: '', prenom: '', message: ''});
    
    const openModal = () => {setOpenModel(true)};
    const closeModal = () => {setOpenModel(false)};
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ nom: '', prenom: '', message: ''});
        openModal(); 
    };

    return (
        <div>
            <div className='contact'>
                <h2 className='contact__title'>Contact</h2>
                <form  className={`contact__form ${darkContact}`} onSubmit={handleSubmit}>
                    <div className='contact__name'>
                        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" className='contact__nom'/>
                        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange}  placeholder="Prénom" className='contact__prenom'/>
                    </div>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className='contact__message'/>
                    <button type="submit" className='contact__button'>envoyer</button> {/* Retirer l'appel à openModal d'ici */}
                </form>
            </div>
                    <Modal isOpen={OpenModal} onRequestClose={closeModal} className='react-modal' overlayClassName="overlay-project">
                        <ModaleContact closeModal={closeModal}/>
                    </Modal>
        </div>
    );
}

export default Contact;





   

              
                
                   
                        
                       
                    
                   
                    
       

