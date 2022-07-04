import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import CarouselItems from '../CarouselItems/CarouselItems';
// in first test i am using real data from api so here i create a dummy array of json data to show you....
import { DUMMY_API_Images } from '../../ImagesJson/Images';

import { Link } from 'react-router-dom';

import './Carousel.scss'

const Carousel = ({ title }) => {


  const settings = {
    dots: false,// remove dot on the bottom
    infinite: false, // to scroll 6 without reply
    speed: 2000,
    slidesToShow: 6,//number of item want to show on each slide
    slidesToScroll: 6, // 12/6 so just 2 click on arrow next icon
    // responsive on small device 
    responsive: [
      {

        breakpoint: 700,//700px like tablet
        settings: {
          //change the number of item
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 501,//501px like phone mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 6
        }
      }
    ]




  };
  return (

    <div className="list">
      {/* title prop get from array in homePage (number of carousel) */}
      <span className="listTitle">watch Carousel {title}</span>

      <Slider {...settings}>
        {/* slice . get only first 12 item from Dummy array */}
        {DUMMY_API_Images.slice(0, 12).map((data, index) => (

          <Link to='/second-page' key={index}>
            <CarouselItems data={data} />
          </Link>


        ))}


      </Slider>


    </div>

  )
}

export default Carousel