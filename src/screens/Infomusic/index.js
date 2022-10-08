import React, { useState } from 'react'
import All from '../../components/All'
import "./infomusic.css"
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useLocation } from 'react-router-dom';


export const Infomusic = () => {
  const location = useLocation();
  console.log(location);
  const [comingData, setComingData] = useState(location.state)
  return (
    <All>
      <div className="fon p-3">
        <div className="container p-4">
          <div className="row">
            <div className="col-7">
              <div className="player">
                <img src="https://music.apple.com/assets/meta/apple-music-4d84eb1deedb9217bf940603688603b0.png" className='rasm_100' alt="" />
                <div className="absol">
                  <div className='flex_togasi'>
                    <div className='black_fon'>
                      <p><FiSettings /></p>
                    </div>

                    <div className='black_fon'>
                      <p><AiOutlineMenu /></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom_player">

              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="row ovr">
                {
                  comingData.map((v, i) => {
                    return <div className="col-6 m-2">

                      <div className='d-flex orap_map'>
                        <img src="https://music.apple.com/assets/meta/apple-music-4d84eb1deedb9217bf940603688603b0.png" alt="" className='img_nav' />
                        <div>
                          <p className='map_name'>{v.name}</p>
                          <audio className='audio_map' src={v.preview_url} controls></audio>
                        </div>
                      </div>
                    </div>
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </All>
  )
}
