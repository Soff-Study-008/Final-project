import React from 'react';
import "./All.css";
import { FaSearch } from 'react-icons/fa';
import { BsCameraVideo,} from 'react-icons/bs';
import { FiBell,} from 'react-icons/fi';
import {  AiOutlineMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { AiFillSetting } from "react-icons/ai";
// import { AiOutlineBell } from "react-icons/ai";


const Header = () => {

  return (
   <div className="navbar_fon">
     <div className="navbar_header">
      <div className="navbar_left">
        <h2 className="nav_title pt-1">MUsic</h2>
        <ul className="nav_item">
          <li className="nav_list">
            <Link to={"/"} className="nav_link"> HOME</Link>
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link">TV SHOW</a>
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link">SEARCH</a>
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link">NEW</a>
          </li>
        </ul>
      </div>
      <div className="headr-icons">
        <p className="nav_icons"><AiOutlineMessage /></p>
        <p className="nav_icons"><BsCameraVideo /></p>
        <p className="nav_icons"><FiBell /></p>
        <img src="https://img.freepik.com/premium-vector/listening-music-e-sport-mascot-logo_10051-752.jpg?w=2000" alt="" className="nav_right" />
      </div>
    </div>
   </div>
  )
}

export default Header
