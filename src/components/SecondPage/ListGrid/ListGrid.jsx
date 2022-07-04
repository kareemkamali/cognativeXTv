import React from 'react'
import { Link } from 'react-router-dom'

import { DUMMY_API_Images } from '../../ImagesJson/Images'
import GridItems from './GridItems'



import './ListGrid.scss'
const ListGrid = () => {
  return (
// grid container has array of grid items
    <div className="grid-container">
      {DUMMY_API_Images.slice(0, 20).map((data, index) => (
        //go to video page
        <Link to='/video-page' key={index}>
            {/* GridItem components have informations of each movie */}
          <GridItems data={data} />
        </Link>
      ))
      }
    </div>

  )
}

export default ListGrid