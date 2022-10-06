import React from 'react'
import All from '../../components/All'
import "./infomusic.css"
import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";






export const Infomusic = () => {
  return (
    <All>
       <div className="fon p-3">
       <div className="container">
        <div className="col-8">
            <div className="player">
                <img src="https://i.ytimg.com/vi/PUFsWOKb5h0/maxresdefault.jpg" className='rasm_100' alt="" />
                <div className="absol">
                   <div className='flex_togasi'>
                    <div className='black_fon'>
                    <p><FiSettings/></p>
                    </div>
                    
                    <div className='black_fon'>
                    <p><AiOutlineMenu/></p>
                    </div>
                   </div>
                </div>
            </div>
            <div className="bottom_player">
              <ul>
                <li>Music Video</li>
              </ul>
              <ul>
              <li><GrFormView/></li>
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
