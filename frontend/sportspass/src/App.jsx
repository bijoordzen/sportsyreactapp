import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/Searchbar';
import Footer from './components/footer/footer';
import Eventlist from './components/eventcard/Eventlist';
import { events } from './components/eventcard/eventsData';

const App = () => {
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredCards = events.filter(event => {
    return event.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar />
        </div>
        <Searchbar searchChange={onSearchChange} />
        <Eventlist events={filteredCards} />
        <Footer />
        {/* Other components */}
      </header>
    </div>
  );
};

export default App;
