import axios from 'axios'
import React, { useEffect } from 'react'
import All from '../../components/All'
import "./home.css"
const Home = () => {
    useEffect(() => {
        axios.get("https://api.spotify.com/v1/me/player/currently-playing")
            .then((v) => {
                console.log(v);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
                </div>
            </section>
        </All>
    )
}

export default Home
