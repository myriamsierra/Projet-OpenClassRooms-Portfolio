import React from 'react';
import './uploadCV.scss';
import Arrows from './../../assets/images/580b57fcd9996e24bc43c44a.png';
import CV from './../../assets/SIERRA-Myriam-CV.pdf'

const UploadCV = () => {
    return (
        <div className='upload'>
            <div className='upload__contenair'>
                <a  className='upload__button' href={CV} download="SIERRA-myriam-CV">
                    <i className="fa-solid fa-upload"></i>Télécharger mon CV
                </a>
                <img src={Arrows} alt="flèche" />
            </div>
        </div>
    );
}

export default UploadCV;
