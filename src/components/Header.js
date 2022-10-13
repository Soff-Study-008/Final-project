import React, { useState } from 'react';
import "./All.css";
import { FaSearch } from 'react-icons/fa';
import { BsCameraVideo, } from 'react-icons/bs';
import { FiBell, } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { AiFillSetting } from "react-icons/ai";
// import { AiOutlineBell } from "react-icons/ai";


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (



    <div className="navbar_fon">
      <div className="navbar_header">
        <div className="navbar_left">
          <h2 className="nav_title pt-1">MUsic</h2>
          <div className="hamburger_menu"></div>
          <div className='mini_menu'>
            
          <button className='bt_phon'  onClick={handleShow}>
          <GiHamburgerMenu />
          </button>

      <Offcanvas className="offcanvas_body" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <p className=' menu_phon'  >Menu</p>
        </Offcanvas.Header>
        <div >
          <ul className='ul_phone'>
            <li>Pop Music</li>
            <li>Trend Music</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </Offcanvas>




           
          </div>
          <ul className="nav_item">
            <li className="nav_list">
              <Link to={"/"} className="nav_link" id='nav_none'> HOME</Link>
            </li>
            <li className="nav_list" id='nav_none'>
              <a href="#!" className="nav_link">TV SHOW</a>
            </li>
            <li className="nav_list">
              <a href="#!" className="nav_link" id='nav_none'>SEARCH</a>
            </li>
            <li className="nav_list">
              <a href="#!" className="nav_link" id='nav_none'>NEW</a>
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
