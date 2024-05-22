// App.js or any other component
import React from 'react';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/navbar';
import Searchbar from './components/searchbar/Searchbar';
import Footer from './components/footer/footer';
import Eventlist from './components/eventcard/Eventlist';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <Logo />
      <Navbar/>
      </div>
      <Searchbar/>
      <Footer/>
      <div>
        <h1>Upcoming Events</h1>
        <Eventlist events={events} />
      </div>
      
        {/* Other components */}
      </header>
    </div>
  );
}

export default App;
