import React from 'react';

import img1 from '../../assets/images/carousal-img1.jpg';
import img2 from '../../assets/images/carousal-img2.jpg';
import img3 from '../../assets/images/carousal-img3.jpg';
import img4 from '../../assets/images/carousal-img4.jpg';

import './carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import { Autoplay } from 'swiper/modules';



const Carousel = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,     
    autoplaySpeed: 3000,
  };


  return (
    <div className='carousel'>

      <Slider className='cards' {...settings}>
        <div className='img-container'>
          <img src={img1} alt="image" />
        </div>
        <div className='img-container'>
          <img src={img2} alt="image" />
        </div>
        <div className='img-container'>
          <img src={img3} alt="image" />
        </div>
        <div className='img-container'>
          <img src={img4} alt="image" />
        </div>

      </Slider>


    </div>
  )
}

export default Carousel;