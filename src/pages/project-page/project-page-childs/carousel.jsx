import React, { useEffect, useState } from 'react';
import ArrowLeft from './../../../assets/images/arrow-left.png';
import ArrowRight from './../../../assets/images/arrow-right.png';
import './carousel.scss';

//-->Product
const Carousel = ({images}) => {
  
    const [imgIndex, setImgIndex] = useState(0);
   
    const nextImage = () => {
        setImgIndex((activeImage) => {
            if (activeImage === images.length - 1) {
                return 0;
            } else {
                return activeImage + 1;
            }
        })
    }

    const prevImage = () => {
        setImgIndex((activeImage) => {
            if (activeImage === 0) {
                return images.length - 1;
            } else {
                return activeImage - 1;
            }
        })
    }

    useEffect(() => {
        const interval = setInterval(nextImage, 2000);
        return () => clearInterval(interval);
    })

    return (
        <div className='carousel'>
            <div className='carousel__arrows'>
                <img  className='carousel__arrows__icon'src={ArrowRight} alt="fleche directionelle droite" onClick={nextImage} />
                <img className='carousel__arrows__icon'src={ArrowLeft} alt="fleche directionnelle gauche" onClick={prevImage} />
            </div>
            <img className='carousel__img' src={images[imgIndex]} alt="appartement" />
        </div>
    )
}

export default Carousel;