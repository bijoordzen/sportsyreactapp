// EventList.jsx

import React from 'react';
import Eventcard from './Eventcard.jsx'
import events from './eventsData.js';



const Eventlist = () => {
  return (
    <div>
      {events.map((events, index) => (
        <Eventcard key={index} event={events} />
      ))}
    </div>
  );
};
export default Eventlist;
