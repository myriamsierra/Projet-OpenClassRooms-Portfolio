import React from 'react';
import './modale-contact.scss'
import { useTheme } from './../../../utils/dark-mode/dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModaleContact = ({closeModal}) => {
    const { darkMode } = useTheme();
    const darkModaleContact = darkMode ? 'dark-mode-modale-contact' : '';
    const darkButtonContact = darkMode ? 'dark-mode-button-contact' : '';

    return(
        <div className={`modale ${darkModaleContact}`}>
            <button className='modale__close-icon' onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></button>
            <p className='modale__text'>Merci pour votre message !</p>
            <button className={`modale__button ${darkButtonContact}`} onClick={closeModal}>retour</button>
        </div>
    )
}
 
export default ModaleContact