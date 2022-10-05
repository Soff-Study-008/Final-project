import React from 'react';
import "./All.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsGlobe2, BsFacebook, BsTelegram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='row'>
          <div className="col-2 offset-1">
            <Dropdown className='dr-footer'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="d-inline-block">
                  <p className="footer-icon"><BsGlobe2 />language</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Uzb</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-2">
            <h2 className="footer-title">Navigation</h2>
            <div className="footer-info">
              <p className="footer-text">Home</p>
              <p className="footer-text">FAQ</p>
              <p className="footer-text">Investor Relations</p>
              <p className="footer-text">Jobs</p>
              <p className="footer-text">About Us</p>
              <p className="footer-text">Help Centre </p>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-title">LEGAL</h2>
            <div className="footer-info">
              <p className="footer-text">Privacy Policy</p>
              <p className="footer-text">Terms of Service</p>
              <p className="footer-text">Cookie Preferences</p>
              <p className="footer-text">Corporate Information</p>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-title">TALK TO US</h2>
            <div className="footer-info">
              <p className="footer-text">seniorsunnat@gmail.com</p>
              <p className="footer-text">mustafapolatov18@gmail.com</p>
              <p className="footer-text">bekmahnudov@gmail.com</p>
              <p className="footer-text">+990809165556</p>
              <p className="footer-text">+998909200203</p>
              <p className="footer-text">+998943662002</p>
            </div>
          </div>
          <div className="col-2">
            <h2 className="footer-title">Follow us</h2>
            <div className="footer-info2">
              <p className="footer_text2"><BsFacebook /></p>
              <p className="footer_text2"><AiFillLinkedin /></p>
              <p className="footer_text2"><BsTelegram /></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer




