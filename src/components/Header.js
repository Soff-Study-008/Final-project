import React from 'react';
import "./All.css";
import { FaSearch } from 'react-icons/fa';
import { BsCameraVideo,} from 'react-icons/bs';
import { FiBell,} from 'react-icons/fi';
import {  AiOutlineMessage } from 'react-icons/ai';
// import { AiFillSetting } from "react-icons/ai";
// import { AiOutlineBell } from "react-icons/ai";


const Header = () => {

  return (
   <div className="navbar_fon">
     <div className="navbar_header">
      <div className="navbar_left">
        <h2 className="nav_title">MUsic</h2>
        <ul className="nav_item">
          <li className="nav_list">
            <a href="#!" className="nav_link">HOME</a>
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
        <div class="search_box">
         <input type="text" placeholder='Serach' className='input-search'  />
         <button className='bt_seacrh'><FaSearch /></button>
        </div>
      </div>
      <div className="headr-icons">
        <p className="nav_icons"><AiOutlineMessage /></p>
        <p className="nav_icons"><BsCameraVideo /></p>
        <p className="nav_icons"><FiBell /></p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcTAwJbcx3ZFn9tZbJQ6C_w0HN4l3p-tsngefWD9F&s" alt="" className="nav_right" />
      </div>
    </div>
   </div>
  )
}

export default Header
