import React from 'react';

function Footer() {
  const footerStyle = {
    background: 'lightgray',
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <p>Contact info</p>
      <p>123-344-4565 <strong>NOT AVAILABLE AFTER 8PM</strong>.</p>
      <p>4545 Amazon Prime Road</p>
      <h1>Email: Khalilb2000@gmail.com</h1>
    </footer>
  );
}

export default Footer;