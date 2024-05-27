// App.js or any other component
import React from 'react';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/Searchbar';
import Footer from './components/footer/footer';
import EventList from './components/eventcard/EventList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <Navbar/>
      </div>
      <Searchbar />
      <EventList/>
      <Footer/>

        {/* Other components */}
      </header>
    </div>
  );
}

export default App;
