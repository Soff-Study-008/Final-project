import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsGlobe2 } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
      <div className='row'>   
          <div className="col-2 offsett-1">
            <Dropdown className='dr-footer'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="d-inline-block">
                  <p className="footer-icon"><BsGlobe2 />language</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">UZb</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-2">
            <h2 className="footer-title">Navigation</h2>
            <p className="footer-text">Home</p>
            <p className="footer-text">FAQ</p>
            <p className="footer-text">Investor Relations</p>
            <p className="footer-text">Jobs</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Help Centre </p>
          </div>
          <div className="col-2">   <h2 className="footer-title">Navigation</h2>
            <p className="footer-text">Home</p>
            <p className="footer-text">FAQ</p>
            <p className="footer-text">Investor Relations</p>
            <p className="footer-text">Jobs</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Help Centre </p></div>
          <div className="col-2">   <h2 className="footer-title">Navigation</h2>
            <p className="footer-text">Home</p>
            <p className="footer-text">FAQ</p>
            <p className="footer-text">Investor Relations</p>
            <p className="footer-text">Jobs</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Help Centre </p></div>
          <div className="col-2">   <h2 className="footer-title">Navigation</h2>
            <p className="footer-text">Home</p>
            <p className="footer-text">FAQ</p>
            <p className="footer-text">Investor Relations</p>
            <p className="footer-text">Jobs</p>
            <p className="footer-text">About Us</p>
            <p className="footer-text">Help Centre </p></div>
      </div>
      </div>
    </footer>
  )
}

export default Footer