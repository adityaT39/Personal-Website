import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Connect from './components/Connect';
import Certification from './components/certification';
import Experience from './components/Experience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Project />
      <Certification />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;