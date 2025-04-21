import React from 'react';
import Menu from './components/Menu'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkOrLight from './components/DarkOrLight';
import ScrollButton from './components/ScrollButton';


function App() {
  return (
    <div className="App">
      <Menu/>
      <DarkOrLight />
      <Home />      
      <About />
      <Projects />
      <Contact />
      <ScrollButton/>
      <Footer />
    </div>
  );
}

export default App;
