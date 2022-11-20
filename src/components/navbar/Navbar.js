import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  } 
  window.addEventListener('scroll',changeColor);

  return (
    <div className={color ? "Navbar Navbar-bg" : "Navbar"}>
      <img src={Logo} className="nav-logo" alt='logo'/>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Events</a>
        <a href="/service">Register</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar