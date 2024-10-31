import React, { useEffect, useState } from 'react';
import fetchData from '../../utilities/fetchData';

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
    slidesToScroll: 1,
  };


  useEffect(() => {

    async function fetchMovies() {
      try {
        const res = await fetchData('movie');
        if (res && res.data && res.data.Search) {
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
                    <p>{card.Title}</p>
                    <img src={card.Poster} alt={card.Title} />
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