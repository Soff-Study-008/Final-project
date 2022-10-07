import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';
import All from '../../components/All'
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

// import Slider from "react-slick";
// import { AiFillPlayCircle } from "react-icons/ai";

const SPOTIFY_CLIENT_ID = '65472f85eb614e56b8c4832c244913b6'
const SPOTIFY_CLIENT_SECRET = 'e2088199bb15436fa847cbf17a96447d'
const Home = () => {

    const [token, setToken] = useState("")
    const [inputWord, setInputWord] = useState("")
    const [data, setData] = useState([])



    useEffect(() => {
        let authoToken = {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=client_credentials&client_id=" + SPOTIFY_CLIENT_ID + "&client_secret=" + SPOTIFY_CLIENT_SECRET
        }
        fetch("https://accounts.spotify.com/api/token", authoToken)
            .then(data => data.json())
            .then(data => {
                setToken(data.access_token)
            })
    }, [])


    async function Searching() {
        var artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        var aristID = await fetch("https://api.spotify.com/v1/search?q=" + inputWord + "&type=artist", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.artists.items)
            })


    }

    const navigate = useNavigate()
    const Going = async (ID) => {
        console.log(ID);
        var artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        var albums = await fetch("https://api.spotify.com/v1/artists/" + ID + "/albums" + "?include_groups=album&market=US&limit=50", artistParametres)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                navigate("/infomusic", {
                    state: data
                })
            })
    }


    // var settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 6,
    //     slidesToScroll: 3,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    return (
        <All>
            <section className='fon_home'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 soz_for">
                            <div className="row">
                                <div className="col-6">
                                    <h1 className='gl_title'>MUsic</h1>
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
                                    <div className="search_box">
                                        <input className='input-search' type="input" placeholder='search' onChange={(v) => setInputWord(v.target.value)} onKeyPress={event => {
                                            if (event.key == "Enter") {
                                                Searching()
                                            }
                                        }} />
                                        <button className='bt_seacrh' onClick={Searching}><FaSearch /></button>
                                    </div>
                                       
                                </div>
                                
                                    {
                                        (data.length > 0) ? (
                                            data.map((v, i) => {
                                                return <div key={i} className="about_section">
                                                    <div className="card_section">
                                                        <img className='section_img' src={v.images[0].url} alt="" />
                                                        <h4 className='section_title'>{v.name}</h4>
                                                        <div className="section_info">
                                                            <p className="info_text">{v.genres[0]}</p>
                                                            <p className="section_popularty">popularity : <span> {v.popularity}</span></p>
                                                        </div>
                                                        <p className="section_play"><AiFillPlayCircle/></p>
                                                        <button onClick={() => Going(v.id)} className="btn btn-warning">Play</button>
                                                    </div>

                                                </div>
                                            })
                                        ) : (
                                            <h1>error</h1>
                                        )
                                    }
                                
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </All>
    )
}

export default Home
