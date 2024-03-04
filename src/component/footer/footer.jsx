import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faVolumeXmark , faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='footer__social-icons'>
                    <span className='footer__icon'><FontAwesomeIcon icon={faGithub} /></span>
                    <span className='footer__icon'><FontAwesomeIcon icon={faEnvelopeOpen} /></span>
                    <span className='footer__icon'><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
                <p className='footer__copyright'>© Myriam Sierra | 2024.</p>
                <p className='footer__button'><FontAwesomeIcon icon={faVolumeHigh} /><FontAwesomeIcon icon={faVolumeXmark} /></p>
            </footer>
        </div>
    );
}

export default Footer;
