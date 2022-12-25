import React from 'react';
import './home.css';

const MultiCard = (props) => {
  return (
    <div className='cards-card'>
      <h5>{props.name}</h5>
      <div className="row">
      
        <div className="col-6">
          <div className='multi-img-container'  >
            <a >
              <img style={{height:"116px"}} src={ "images/" + props.img + "-e.jpg"} alt={props.img}></img>
            </a>
          </div>
          <span>{props.e}</span>
        </div>
        <div className="col-6">
          <div className='multi-img-container'>
            <a href="" >
              <img style={{height:"116px"}} src={"images/" + props.img + "-h.jpg"} alt={props.img}></img>
            </a>
          </div>
          <span>{props.h}</span>
        </div>
        <div className="col-6">
          <div className='multi-img-container'>
            <a href="" >
              <img style={{height:"116px"}} src={"images/" + props.img + "-g.jpg"} alt={props.img}></img>
            </a>
          </div>
          <span>{props.g}</span>
        </div>
        <div className="col-6">
          <div className='multi-img-container'>
            <a href="" >
              <img style={{height:"116px"}} src={"images/" + props.img + "-f.jpg"} alt={props.img}></img>
            </a>
          </div>
          <span>{props.f}</span>
        </div>
      </div>
      <a href="" className='bottom-link'>
        {props.bottom}
      </a>
      
    </div>
    
  )
}

export default MultiCard;