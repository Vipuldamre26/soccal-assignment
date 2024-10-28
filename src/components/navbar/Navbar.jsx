import React from 'react';
import './navbar.css';
import navLogo from '../../assets/logos/navlogo.svg';
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { BsList } from "react-icons/bs";


const Navbar = () => {
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
            <input type="text" placeholder='Search for Movies, Events, Plays, Sports and Activities' />
          </div>
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