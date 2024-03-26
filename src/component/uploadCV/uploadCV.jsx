import React from 'react';
import './uploadCV.scss';
import { useTheme } from '../../utils/theme-provider/dark-mode';
import Arrows from './../../assets/images/580b57fcd9996e24bc43c44a.png';
import CV from './../../assets/SIERRA-Myriam-CV.pdf'

const UploadCV = () => {

    //DARKMODE CONFIG ==>
    const { darkMode } = useTheme();
    const uploadBox = darkMode ? 'upload__contenair upload__contenair__darkmode':'upload__contenair';
    const uploadButton = darkMode ? 'upload__button upload__button__darkmode':"upload__button";

    return (
        <div className='upload'>
            <div className={uploadBox}>
                <a  className={uploadButton} href={CV} download="SIERRA-myriam-CV">
                    <i className="fa-solid fa-upload"></i>Télécharger mon CV
                </a>
                <img src={Arrows} alt="flèche" />
            </div>
        </div>
    );
}

export default UploadCV;
