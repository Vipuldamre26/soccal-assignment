import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './navbar.css';
import navLogo from '../../assets/logos/navlogo.svg';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { setData } from '../../redux/slices/dataSlice';
import fetchData from '../../utilities/fetchData';


const Navbar = () => {

  const [data, setMovieData] = useState('');

  const dispatch = useDispatch();

  const onHandleClick = async () => {

    try {
      const res = await fetchData(data);
      if (res && res.data && res.data.Search) {
        // console.log(res.data.Search);

        dispatch(setData(res.data.Search));
      }
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  }




  return (

    // navbar 
    <div className='navbar'>
      <div className="navbar-section">

        {/* section1  */}
        <div className="navbar-section1">

          <img src={navLogo} alt="" />
          <div className="navbar-search">
            <div className="search-icon">
              <IoSearch />
            </div>
            <input onChange={(e) => setMovieData(e.target.value)} type="text" placeholder='Search for Movies, Events, Plays, Sports and Activities' />
          </div>
          <button onClick={onHandleClick}>Search</button>
        </div>

        {/* section2 */}
        <div className="navbar-section2">
          <div className="navbar-city">
            <p>Pune</p>
            <IoIosArrowDown />
          </div>
          <div className="navbar-sign">
            <button>Sign In</button>
            <BsList className='list' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar