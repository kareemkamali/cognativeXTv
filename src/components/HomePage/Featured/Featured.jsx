import React from 'react';
import { images } from '../../shared/constants';

import './Featured.scss'

const Featured = () => {
  return (
    // we can add container absolute on this image has small tex and button for example
    <div className="featured">
      <img src={images.featured} alt='featured'></img>
    </div>
  )
}

export default Featured