import React, { useEffect, useState } from 'react';
import fetchData from '../../utilities/fetchData';
import './cardsection.css';

import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";



const CardSection = () => {

  const [data, setData] = useState([]);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024, // Screen width of 1024px or less
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Screen width of 768px or less (Tablet)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Screen width of 480px or less (Mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  useEffect(() => {

    async function fetchMovies() {
      try {
        const res = await fetchData('movie');
        if (res && res.data && res.data.Search) {
          console.log(res.data.Search);
          
          setData(res.data.Search);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);




  return (
    <div className='card-section'>
      <div className="card-main">

        <div className="card-main-upper">
          <h2>Recommended Moives</h2>
          <span>See All <FaAngleRight /> </span>
        </div>

        <div className="card-main-lower">
          <Slider className='cards' {...settings}>
            {
              data.length > 0 ? (
                data.map((card) => (
                  <div className="card" key={card.imdbID}>
                    {/* <p>{card.Title}</p> */}
                    <div className="img">
                    <img src={card.Poster} alt={card.Title} />
                    </div>
                    <h3>{card.Title}</h3>
                    <p>{card.Type}</p>
                  </div>
                ))
              ) : (
                <p>Loading movies...</p>
              )
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default CardSection;