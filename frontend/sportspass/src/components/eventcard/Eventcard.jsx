// eventCard.jsx

import React from 'react';
import './eventcard.css';

//destructuring of all properties below by props

const Eventcard = (props) => {
  return(
    <div className={ 'event-card'}>
      <div>
        <img src={props.thumbnail} alt={props.title} width="200" height="200" />        
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <p>{props.location}</p>
  
      </div>
    </div>

  );
}


export default Eventcard;
