import React, { useState } from 'react'

import './CarouselItems.scss';
//exported because i want to use in another component
export const trailer ="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const CarouselItems = ({data}) => {
  // useState hook 
    const [isHovered, setIsHovered] = useState(false);


  return (
    // if hover item change variable using useState 
    <div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* if true show video else show movie image */}
     {!isHovered&&
      <img
        src={data.url}
      />}
      {isHovered && (
        <>
        <video src={trailer} autoPlay={true} loop />
        </>
      )}
    </div>
  );
}

export default CarouselItems