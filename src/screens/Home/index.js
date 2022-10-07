import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { FaSearch } from 'react-icons/fa';
import All from '../../components/All'
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

// import Slider from "react-slick";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { AiFillPlayCircle } from 'react-icons/ai';


const SPOTIFY_CLIENT_ID = '65472f85eb614e56b8c4832c244913b6'
const SPOTIFY_CLIENT_SECRET = 'e2088199bb15436fa847cbf17a96447d'
const Home = () => {

    const [token, setToken] = useState("")
    const [inputWord, setInputWord] = useState("")
    const [data, setData] = useState([])
    const [miksFilter, setMiksFilter] = useState([
        { img: "https://i1.sndcdn.com/artworks-ENo3zBIbo3nWCzLf-6bod5g-t500x500.jpg", name: "Rap music", value: "rap" },
        { img: "https://www.bulletproof.com/wp-content/uploads/2020/05/writing-down-his-plan-of-action-picture-id874872024.jpg", name: "Work music", value: "work" },
        { img: "https://phantom-marca.unidadeditorial.es/746e69f29df0fa7da1f9df1cffc2af10/crop/0x20/1499x861/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419960151339.jpg", name: "Workout music", value: "w" },
        { img: "https://www.history.ac.uk/sites/default/files/styles/small/public/2019-07/mc_ihr_119_1.JPG?h=9eb0d413&itok=K9ma34SU", name: "Study music", value: "s" },
        { img: "https://static01.nyt.com/images/2018/12/30/arts/30yearend-pop2/merlin_147857643_8e0c5c65-4549-4946-b51d-49425b9dcf24-articleLarge.jpg?quality=75&auto=webp&disable=upscale", name: "Pop music", value: "p" },
    ])



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

    const navigate = useNavigate();

    const Going = async (name) => {
        console.log(name);

        let artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        let aristID = await fetch("https://api.spotify.com/v1/search?q=" + name + "&type=track", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate("/infomusic", {
                    state: data.tracks.items
                })
            })
    }


    const TakeCategory = async (name_category) => {
        let artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }

        let aristID = await fetch("https://api.spotify.com/v1/search?q=" + name_category + "&type=track", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate("/infomusic", {
                    state: data.tracks.items
                })
            })
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
    };


    return (
        <All>
            <section className='fon_home'>
                <div className="container">
                    <div className="razn">
                        <div className="search_box">
                            <input className='input-search' type="input" placeholder='Search Albom' onChange={(v) => setInputWord(v.target.value)} onKeyPress={event => {
                                if (event.key == "Enter") {
                                    Searching()
                                }
                            }} />
                            <button className='bt_seacrh' onClick={Searching}><FaSearch /></button>
                        </div>
                    </div>

                    <div className="section_top">
                        <div className="soz_for">
                            {/* <h1 className='gl_title'>MUsic</h1> */}
                            <img src="https://media.graphassets.com/4L03glPTAe3c3Ongtpzh" alt="" className="top_img" />
                            <p className='music_avtor'>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit voluptates tempora reiciendis animi quae repellendus, vero maiores fugit officiis quis nisi assumenda dolor incidunt est optio, porro debitis ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aliquid, veritatis culpa dolores eos tempora modi accusamus necessitatibus veniam voluptate quas sequi cum aperiam recusandae quaerat nihil ex dolor cumque consequuntur corrupti minus placeat earum? Nam quas earum doloribus tempore!</p>
                            <p className='text_red'>GENRES</p>
                            <p className='text_wight'>Senior Veteran</p>
                            <button className='bt_watch'>
                                WATCH
                                <img src="bt_fr.png" alt="" className='bt_img' />
                            </button>
                            <button className='bt_mylist'>MY LIST <span>+</span> </button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            miksFilter.map((v, i) => {
                                return <div className="col-lg-2 col-md-4 col-sm-12" key={i}>
                                    <div className="categoryCard" onClick={() => TakeCategory(v.value)}>
                                        <img src={v.img} alt="Music pictures" className='cImg' />
                                        <p className='cWord'>{v.name}</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                    <div>
                        <div className="slider_map">
                            <div>
                                <Slider {...settings}>
                                    {
                                        (data.length > 0) ? (
                                            data.map((v, i) => {
                                                return <div className="card_section" onClick={() => Going(v.name)} >
                                                    <img className='section_img' src={v.images[0].url} alt="" />
                                                    <p className='section_title'>{v.name}</p>
                                                </div>
                                                {/* <div className="section_info">
                                                        <p className="info_text">{v.genres[0]}</p>
                                                        <p className="section_popularty">popularity : <span> {v.popularity}</span></p>
                                                    </div>
                                                    <p className="section_play"><AiFillPlayCircle /></p> */}
                                            })
                                        ) : (
                                            <h1>error</h1>
                                        )
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
