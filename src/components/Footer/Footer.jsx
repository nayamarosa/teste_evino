import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        <p>Nayama Rosa Pereira</p>
        <div className="footer__links">
          <Link to="https://www.github.com/nayamarosa/desafio_evino">Github</Link> | 
          <Link to="https://www.linkedin.com/in/nayamarosa">Linkedin</Link>
        </div>
    </footer>
  )
}

export default Footer;