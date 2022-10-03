import React from 'react';
import "./All.css";
import { FaSearch } from 'react-icons/fa';
import { FiBell, FiGift } from 'react-icons/fi';
// import { AiFillSetting } from "react-icons/ai";
// import { AiOutlineBell } from "react-icons/ai";


const Header = () => {

  return (
    <div className="navbar_header">
      <div className="navbar_left">
        <img src="DRAMATIC.png" alt="" className="navbar_logo" />
        <ul className="nav_item">
          <li className="nav_list">
            <a href="#!" className="nav_link">HOME</a>wdwda
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link">TV SHOW</a>
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link">MOVIES</a>
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link">NEW</a>
          </li>
        </ul>
      </div>
      <div className="navbar_right">
        <div class="search-box">
          <input type="text" className='input-search' placeholder="Type to Search..." />
          <button className="btn-search"><a className="right-icons2"><FaSearch /></a></button>
        </div>
      </div>
      <div className="headr-icons">
        <p className="nav_icons"><FiGift /></p>
        <p className="nav_icons"><FiBell /></p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcTAwJbcx3ZFn9tZbJQ6C_w0HN4l3p-tsngefWD9F&s" alt="" className="nav_right" />
      </div>
    </div>
  )
}

export default Header
