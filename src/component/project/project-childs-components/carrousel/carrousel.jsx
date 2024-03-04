import React, { useState } from 'react';
import './carrousel.scss';

const Carousel = () => {
  const [currdeg, setCurrdeg] = useState(0);

  const rotate = (direction) => {
    let newDeg = currdeg;
    if (direction === 'n') {
      newDeg -= 120;
    } else if (direction === 'p') {
      newDeg += 120;
    }
    setCurrdeg(newDeg);
  };

  return (
    <div className="container">
      <div className="carousel" style={{ transform: `rotateY(${currdeg}deg)` }}>
        <div className="a"><div className="item">A</div></div>
        <div className="b"><div className="item">B</div></div>
        <div className="c"><div className="item">C</div></div>
      </div>
      <div className="next" onClick={() => rotate('n')}>Next</div>
      <div className="prev" onClick={() => rotate('p')}>Prev</div>
    </div>
  );
};

export default Carousel;
