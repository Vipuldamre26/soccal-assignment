import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Category from '../category/Category'
import Carousel from '../carousel/Carousel'
import CardSection from '../cardSection/CardSection'
import Footer from '../footer/Footer'
import { useSelector } from 'react-redux'

const Homepage = () => {

  // hooks
  const [category, setCategory] = useState('movies');

  const moviesData = useSelector(state => state.movieData.movies);
  // console.log(moviesData);




  // ***********************************************************************


  useEffect(() => {

    setCategory(moviesData);

  }, [moviesData]);


  // ***********************************************************************


  return (
    <div className='homepage'>
      <Navbar />
      <Category setCategory={setCategory} />
      <Carousel />
      <CardSection category={category} />
      <CardSection category={'series'} />
      <CardSection category={'shows'} />
      <Footer />
    </div>
  )
}

export default Homepage;