import React from 'react'
import Carousel from '../components/HomePage/Carousel/Carousel';
import CarouselNavigation from '../components/HomePage/CarouselNavigation/CarouselNavigation';
import Featured from '../components/HomePage/Featured/Featured'
import Navbar from '../components/shared/Navbar/Navbar';
// import Carousel from '../components/HomePage/BONNUS_CAROUSELPURREACT/Carousel/Carousel'

import './HomePage.scss';
const HomePage = () => {
  // to render carousel components 4 times
  const numberOfCarouselComponents = 4;

  return (

    <div className='home'>
      <Navbar />
      <Featured />
      {/* Navigation  above Carousel */}
      <CarouselNavigation />

      {/* array map function to render components n times*/}
      {[...Array(numberOfCarouselComponents)].map((elementInArray, index) =>
      (
        // A key is a unique identifier. In React, it is used to identify which items have changed
        // title to show carousel title for example(crousel1,carousel2) i add +1 because array start from 0
        <Carousel key={index} title={index + 1} />
      ))}

    </div>

  )
}

export default HomePage