import axios from 'axios'
import React, { useEffect } from 'react'
import All from '../../components/All'
import "./home.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
  useEffect(() => {
    axios.get("https://api.spotify.com/v1/me/player/currently-playing")
    .then((v)=>{
      console.log(v);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <All>
      <section className='fon_home'>
      <div className="container">

        <div className="row">
          <div className="col-12 soz_for">
            <div className="row">
              <div className="col-6">
                <h1><img src="kom.png" alt="" /></h1>
                <p className='music_avtor'>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.</p>
                <p className='text_red'>GENRES</p>
                <p className='text_wight'>Senior Veteran</p>
                <div className="d-flex">
                  <button className='d-flex bt_watch'>
                    WATCH
                    <img src="bt_fr.png" alt="" className='bt_img' />
                  </button>
                  <button className='bt_mylist'>MY LIST <span>+</span> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="abs">
      <div className="slider_map">
        <div>
          <div className="razn">
            <p>Music you must sling</p>
            <select name="music" id="music">
              <option value="">Filters</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
       <div className="row">
       <Slider {...settings}>
         <div className="col-3">
          <div className="map_card">
            <img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" className='img_map' alt="" />
            <p className='p_map'>Stan Eminem</p>
            <button className='play_map'>Play Music</button>
          </div>
         </div>
         </Slider>
       </div>
        </div>
      </div>
      </div>
      </div>
      
      </section>
    </All>
  )
}

export default Home
