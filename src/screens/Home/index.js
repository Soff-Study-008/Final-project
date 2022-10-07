import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import All from '../../components/All'
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

// import Slider from "react-slick";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { AiFillPlayCircle } from 'react-icons/ai';


const SPOTIFY_CLIENT_ID = '65472f85eb614e56b8c4832c244913b6'
const SPOTIFY_CLIENT_SECRET = 'e2088199bb15436fa847cbf17a96447d'
const Home = () => {

    const [token, setToken] = useState("")
    const [inputWord, setInputWord] = useState("")
    const [data, setData] = useState([])
    const [miksFilter, setMiksFilter] = useState([])
    const [miksFilter2, setMiksFilter2] = useState([])
    const [miksFilter3, setMiksFilter3] = useState([])

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
    }


    let settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
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
    }



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

    const TakeCategory2 = async () => {
        let artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }

        let aristID = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMiksFilter(data.playlists.items)
            })
        let aristID1 = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMiksFilter2(data.playlists.items)
            })
        let aristID2 = await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQIL0AXnG5AK/playlists", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMiksFilter3(data.playlists.items)
            })
    }

    // TakeCategory2()

    // https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists  pop music
    // https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists  yoz
    // https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQIL0AXnG5AK/playlists  popular


    return (
        <All>
            <section className='fon_home'>
                <button onClick={() => TakeCategory2()}>get Category</button>
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
                        <Slider {...settings}>
                            {
                                (miksFilter.length > 0) ? (
                                    miksFilter.map((v, i) => {
                                        return <div className="col-lg-2 col-md-4 col-sm-12" key={i}>
                                            <div className="categoryCard" onClick={() => TakeCategory(v.name)}>
                                                <img src={v.images[0].url} alt="Music pictures" className='cImg' />
                                                <p className='cWord'>{v.name}</p>
                                            </div>
                                        </div>
                                    })
                                ) : (
                                    <h1>malumot yoq</h1>
                                )
                            }
                        </Slider>
                        <h1>Summer music</h1>
                        <Slider {...settings}>
                            {
                                (miksFilter2.length > 0) ? (
                                    miksFilter2.map((v, i) => {
                                        return <div className="col-lg-2 col-md-4 col-sm-12" key={i}>
                                            <div className="categoryCard" onClick={() => TakeCategory(v.name)}>
                                                <img src={v.images[0].url} alt="Music pictures" className='cImg' />
                                                <p className='cWord'>{v.name}</p>
                                            </div>
                                        </div>
                                    })
                                ) : (
                                    <h1>malumot yoq</h1>
                                )
                            }
                        </Slider>
                        <h1>Popular music</h1><Slider {...settings}>
                            {
                                (miksFilter3.length > 0) ? (
                                    miksFilter3.map((v, i) => {
                                        return <div className="col-lg-2 col-md-4 col-sm-12" key={i}>
                                            <div className="categoryCard" onClick={() => TakeCategory(v.name)}>
                                                <img src={v.images[0].url} alt="Music pictures" className='cImg' />
                                                <p className='cWord'>{v.name}</p>
                                            </div>
                                        </div>
                                    })
                                ) : (
                                    <h1>malumot yoq</h1>
                                )
                            }
                        </Slider>
                        <div>
                            <div className="slider_map">
                                <div>
                                    <Slider {...settings2}>
                                        {
                                            (data.length > 0) ? (
                                                data.map((v, i) => {
                                                    return <div className="card_section" onClick={() => Going(v.name)} >
                                                        <div className="card_section-flex">
                                                            <img className='section_img' src={v.images[0].url} alt="" />
                                                        </div>
                                                        <p className='section_title'>{v.name}</p>
                                                    </div>
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
                </div>
            </section>
        </All>
    )
}

export default Home