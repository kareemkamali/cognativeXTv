import React, { useState } from 'react';

import { images } from '../constants';

import './Navbar.scss';
const Navbar = () => {
    //useState boolean to change color the nav when scrolldown
    const [isScrolled, setIsScrolled] = useState(false);

    //javaScript function onScroll
    window.onscroll = () => {
      //check if pageYoffset (scrollDOwn is >0 change value to true)
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };


  return (
    //if isScrolled true add className scrolled
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <img src={images.logo} alt='logo'/>
        </div>
    </div>
  )
}

export default Navbar