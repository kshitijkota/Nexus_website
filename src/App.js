import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UpcomingEvents from './components/UpcomingEvents';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <UpcomingEvents />
      <Projects />
    </div>
  );
}

export default App;
