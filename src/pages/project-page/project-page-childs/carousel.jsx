import React, { useEffect, useState } from 'react';
import ArrowLeft from './../../../assets/images/arrow-left.png';
import ArrowRight from './../../../assets/images/arrow-right.png';
import './carousel.scss';

//-->Product
const Carousel = ({images}) => {
  
    const [imgIndex, setImgIndex] = useState(0);
    const notHidden = images.length > 1;

    const nextImage = () => {
        setImgIndex((activeImage) => {
            // Si l'image actuelle est la dernière, revient à la première image (boucle).
            if (activeImage === images.length - 1) {
                return 0;
            } else {
                // Sinon, on passe à l'image suivante.
                return activeImage + 1;
            }
        })
    }

    const prevImage = () => {
        setImgIndex((activeImage) => {
            if (activeImage === 0) {
                // Si l'image actuelle est la première, retourne l'index de la dernière image.
                return images.length - 1;
            } else {
                 // Sinon, retourne l'index de l'image précédente.
                return activeImage - 1;
            }
        })
    }

    //on appelle la fonction nextImage avec un intervalle de 5sec
    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    })

    return (
        <div className='carousel'>
            {/* la div apparait uniquement si notHidden = true (si images.length > 1)(si le nombre d'element de la liste est sup a 1) */}
            {notHidden && (
                <div className='carousel__arrows'>
                    <img src={ArrowRight} alt="fleche directionelle droite" onClick={nextImage} />
                    <img src={ArrowLeft} alt="fleche directionnelle gauche" onClick={prevImage} />
                </div>
            )}
            <img className='carousel__img' src={images[imgIndex]} alt="appartement" />
            {notHidden && (
                <p className='carousel__numbers'>{imgIndex + 1}/{images.length}</p>
            )}
        </div>
    )
}

export default Carousel;