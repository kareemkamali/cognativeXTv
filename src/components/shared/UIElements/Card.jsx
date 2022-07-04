import React from 'react'

import './Card.scss'
const Card = (props) => {
  return (
   <div className={`card  ${props.className}`}>
     {/* props. children is a special prop, automatically passed to every component, that can be used to render
      the content included between the opening and closing tags when invoking a component */}
    {props.children} 
   </div>
  )
}

export default Card