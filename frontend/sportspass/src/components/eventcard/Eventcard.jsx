// eventCard.jsx

import React from 'react';
import events from './eventsData.js';

const Eventcard = ({ events }) => {
  const { title, thumbnail, date, location, description } = events;

  return (
    <div className="event-card">
      <img className="event-thumbnail" src={thumbnail} alt={title} />
      <div className="event-details">
        <h2 className="event-title">{title}</h2>
        <p className="event-date">{date}</p>
        <p className="event-location">{location}</p>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
};

export default Eventcard;
