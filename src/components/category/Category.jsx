import React from 'react';
import './category.css';

const Category = () => {
  return (
    <div className='category'>
      <div className="category-section">
        <div className="category-section1">
          <div className="category-section1-items">
            <p>Movies</p>
            <p>Stream</p>
            <p>Events</p>
            <p>Plays</p>
            <p>Sports</p>
            <p>Activities</p>
          </div>
        </div>
        <div className="category-section2">
          <div className="category-section2-items">
            <p>ListYourShow</p>
            <p>Corporates</p>
            <p>Offers</p>
            <p>Gift Cards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
