// App.js or any other component
import React from 'react';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/Searchbar';
import Footer from './components/footer/footer';
import EventList from './components/eventcard/EventList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div>

      <Logo />
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
