import React from 'react';
import './cards-skills.scss'
import { useTheme } from '../../../../utils/theme-provider/dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = ({titleRecto,textRecto,textVerso}) => {

  //darkmode theme
  const { darkMode } = useTheme();

  //classes scss modulable
  const classes = {
    cards : "skill-cards",
    contenair : "skill-cards__contenair",
    card : "skill-cards__card",
    recto  :darkMode ? 'skill-cards__recto skill-cards__recto__darkmode' : 'skill-cards__recto',
    frontheading :darkMode ? 'skill-cards__recto--title skill-cards__recto--title__darkmode' : 'skill-cards__recto--title',
    icon :"skill-cards__recto--icons",
    liste  :darkMode ? 'skill-cards__verso--liste skill-cards__verso--liste__darkmode' : 'skill-cards__verso--liste',
    verso  :darkMode ? 'skill-cards__verso skill-cards__recto__darkmode' : 'skill-cards__verso',
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
                <li key={index} className={classes.liste}><i class="fa-solid fa-check"></i> {skill} </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Cards



