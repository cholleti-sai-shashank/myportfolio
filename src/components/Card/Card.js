
import React from 'react';
import './CardStyles.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.imageSrc} alt={props.title} className='card-image' />
      <div className='card-content'>
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-description'>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
