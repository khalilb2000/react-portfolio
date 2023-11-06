// Header.js
import React from 'react';

function Header() {
  const headerStyle = {
    background: 'lightblue',
    padding: '1rem',
    textAlign: 'center',
  };

  const navStyle = {
    listStyle: 'none',
    padding: 0,
  };

  return (
    <header style={headerStyle}>
      <h1>Developer's Portfolio</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
