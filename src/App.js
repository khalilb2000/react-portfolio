import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';  // Import your About component
import Portfolio from './Portfolio';  // Import your Portfolio component
import Contact from './Contact';  // Import your Contact component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
