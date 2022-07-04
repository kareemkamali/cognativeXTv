import React from 'react'
import { Link } from 'react-router-dom'

import './CarouselNavigation.scss';
const CarouselNavigation = () => {
  //Link to go for route of second page (remember react-router-dom work for one single page)
  return (
    <div className="carousel-nav">
      <div className="container">
        <Link to="/second-page" >الرئيسية</Link>
        <Link to='/second-page'>الرئيسية</Link>
        <Link to='/second-page'>الرئيسية</Link>
      </div>
    </div>
  )
}

export default CarouselNavigation