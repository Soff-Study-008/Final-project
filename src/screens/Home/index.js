import axios from 'axios'
import React, { useEffect, useState } from 'react'
import All from '../../components/All'
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Home = () => {

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
    params: { id: '40008598', locale: 'en-US' },
    headers: {
      'X-RapidAPI-Key': '66daaa95d1msh69724235f5aed20p1771b4jsn8eacfbbc9333',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  const [data, setData] = useState([])
  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.tracks);
      setData(response.data.tracks)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
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

  let navigate = useNavigate()

  function  NextMusic (v) {

    navigate(
      "/infomusic",
      {
        state: "dfghj"
      }

    )
  }

  return (
    <All>
      <section className='fon_home'>
        <div className="container">
          <div className="row">
            <div className="col-12 soz_for">
              <div className="row">
                <div className="col-6">
                  <p className='gl_title'>MUsic</p>
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
                  <select name="music" id="music" className='filters_map'>
                    <option value="">Filters</option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>

                <Slider {...settings}>

                  {
                    (data.length > 0)
                      ? (
                        data.map((v, i) => {
                          return <div>
                            <div className="rel">

                              <img src={v.images.coverart} alt="" className='rasm_1' />
                              <div className='hover_boganda'>
                                <p className='Play' onClick={()=>NextMusic(v)}><AiFillPlayCircle /></p>
                              </div>
                            </div>
                            <p className='text-light f-1'>{v.title}</p>

                          </div>
                        })
                      )
                      : (<h1>drxfgchvjbuknil</h1>)
                  }

                </Slider>
              </div>
            </div>
          </div>
        </div>

      </section>
    </All>
  )
}

export default Home
