import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Category from '../category/Category'
import Carousel from '../carousel/Carousel'
import CardSection from '../cardSection/CardSection'
import Footer from '../footer/Footer'

const Homepage = () => {
 
  // const [ query, setQuery ] = useState('');
  const [ category, setCategory ] = useState('movies');

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