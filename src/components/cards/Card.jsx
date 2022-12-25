import React from 'react';
import './home.css';

function Card  (props)  {
  return (
    <div className='cards-card'>
      <h5>{props.name}</h5>
      <div className='img-container'>
        <a  >
          <img  src={"images/" + props.img + ".JPG"} alt={props.img}></img>
        </a>
      </div>
      <a  className='bottom-link'>
        {props.bottom}
      </a>
    </div>
  )
}

export default Card;