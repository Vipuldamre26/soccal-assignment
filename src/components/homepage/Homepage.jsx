import React from 'react'
import Navbar from '../navbar/Navbar'
import Category from '../category/Category'
import Carousel from '../carousel/Carousel'
import CardSection from '../cardSection/CardSection'
import Footer from '../footer/Footer'

const Homepage = () => {
  return (
    <div className='homepage'>
        <Navbar />
        <Category />
        <Carousel />
        <CardSection />
        <Footer />
    </div>
  )
}

export default Homepage