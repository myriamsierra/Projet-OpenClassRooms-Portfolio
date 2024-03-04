import React from 'react';
import './cards-skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = ({titleRecto,textRecto,textVerso}) => {

  //classes scss modulable
  const classes = {
    cards : "skill-cards",
    contenair : "skill-cards__contenair",
    card : "skill-cards__card",
    recto : "skill-cards__recto",
    frontheading :"skill-cards__recto--title",
    verso : "skill-cards__verso",
    backheading :"skill-cards__verso--title",
    icon :"skill-cards__recto--icons",
    liste : "skill-cards__verso--liste",
  }



  return (
    <div className={classes.cards}>
      <div className={ classes.contenair}>
        <div className={classes.card}>
          <div className={classes.recto}>
            <p className={classes.frontheading}>{titleRecto}</p>
            <FontAwesomeIcon icon={textRecto} className={classes.icon} />
          </div>
          <div className={classes.verso}>
            <ul>
              {textVerso.map((skill, index) => (
                <li key={index} className={classes.liste}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Cards



