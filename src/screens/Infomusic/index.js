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
        <div className="container">
          <div className="row">
            {
              comingData.map((v,i)=>{
                return <div className="col-3" key={i}>
                  <div className="card">
                    <img src="" alt=""  />
                    <h1>{v.name}</h1>
                    <audio src={v.preview_url} controls></audio>
                  </div>
                </div>
              })
            }
          </div>
          <div className="col-8">
            <div className="player">
              <img src="https://i.ytimg.com/vi/PUFsWOKb5h0/maxresdefault.jpg" className='rasm_100' alt="" />
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
              <ul>
                <li>Music Video</li>
              </ul>
              <ul>
                <li><GrFormView /></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
    </All>
  )
}
