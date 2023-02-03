import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    
    <section id="footer">
    <p style={{textAlign: 'center'}}>123 abc street,<br /> 
      Dallas Tx <br />
      76049</p>
    <h4>Follow Us
      <a href="https://github.com/capriciouscalzone/TeachUhow2Code"><i className="fa-brands fa-github" /></a>
    </h4>
    <span style={{color: 'wheat'}}>© 2023 Get up Fitness</span>
  </section>
    
  );
};

export default Footer;
