// About.js
import React from 'react';
import avatar from './avatar.jpg'; // import your image

function About() {
  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '1rem',
  };

  return (
    <section id="about">
      <div style={profileStyle}>
        <img src={avatar} style={imageStyle} alt="Profile Picture" />
        <ul>
          <li>Trying to get better every day.</li>
          <li>Actively Learning JavaScript.</li>
          <li>Training in NODE.js</li>
          <li>API's for the win!</li>
        </ul>
      </div>
      <a href="https://github.com/khalilb2000">This is a link to my Github!</a>
    </section>
  );
}

export default About;
