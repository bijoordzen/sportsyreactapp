import React from 'react';
import Eventcard from './Eventcard';
import {events} from './eventsData';

const EventList = () => {
    
    return(
        <div>
            <Eventcard title ={events[0].title} thumbnail ={events[0].thumbnail} date ={events[0].date} location ={events[0].location} description = {events[0].description} />
            <Eventcard title ={events[1].title} thumbnail ={events[1].thumbnail} date ={events[1].date} location ={events[1].location} description = {events[1].description} />
            <Eventcard title ={events[2].title} thumbnail ={events[2].thumbnail} date ={events[2].date} location ={events[2].location} description = {events[2].description} />
        </div>
       


    );
  }
export default EventList;
  