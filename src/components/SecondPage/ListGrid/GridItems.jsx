import React from 'react';

import Card from '../../shared/UIElements/Card'

import {
    PlayArrow,
    Add,
    ThumbUpAltOutlined,
    ThumbDownOutlined,
  } from "@material-ui/icons";//icons from material library


  import './GridItems.scss';
  // data it is prop get from listGrid components
const GridItems = ({data}) => {
  return (
    // divide the column in row 
    //Card Ui element component inside shared folder for more reasublity showing for you
    <Card className="grid-item">
      <img src={data.url} style={{position:'relative'}} alt='movie'/>
            <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>{data.duration}</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>

            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            
            <div className="genre">{data.type}</div>
          </div>
       </Card>
  )
}

export default GridItems