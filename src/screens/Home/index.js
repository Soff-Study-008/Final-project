import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import All from '../../components/All'
import "./home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';

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



    const TakeCategory2 = async () => {
        let artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }

        await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMiksFilter(data.playlists.items)
            })
        await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMiksFilter2(data.playlists.items)
            })
        await fetch("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQIL0AXnG5AK/playlists", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMiksFilter3(data.playlists.items)
            })
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

        // TakeCategory2()

    }, [])


    async function Searching() {
        let artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        await fetch("https://api.spotify.com/v1/search?q=" + inputWord + "&type=artist", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data.artists.items);

               if (data.artists.items.length>0){
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    timer: 2000
                  });
               }else{
                swal({
                    title: "Error",
                    text: "You clicked the button!",
                    icon: "error",                    
                    timer: 2000
                  });
               }
            })
            .catch((r) => {
                swal({
                    title: r,
                    text: "You clicked the button!",
                    icon: "error",
                    timer: 2000
                  });
               
            })

    }

    const navigate = useNavigate();

    const Going = async (name) => {
        let artistParametres = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
        await fetch("https://api.spotify.com/v1/search?q=" + name + "&type=track", artistParametres)
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

        await fetch("https://api.spotify.com/v1/search?q=" + name_category + "&type=track", artistParametres)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate("/infomusic", {
                    state: data.tracks.items
                })
            })
    }

    // let i = 1;
    // do {
    //     // TakeCategory2();
    //     console.log(1);
    // } while (i > 4);

    // let a = 0;
    // while (a == 0) {
    //     if (miksFilter.length > 0) {
    //         a = 1
    //         return TakeCategory2();
    //     }
    // }


    if (miksFilter.length <= 0) {
        TakeCategory2();
    }




    // https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists  pop music
    // https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists  yoz
    // https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQIL0AXnG5AK/playlists  popular


    return (
        <All>
            <section className='fon_home'>
                <div className="container">
                    <div className="section_header">
                        <div className="section_top  pt-3">
                            <div className="soz_for">
                            <div>
                                <p>Your like Music</p>
                                <p>Slining and Enjoy</p>
                            </div>
                            </div>
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
                                    <h1 className='spinner'><Spinner animation="grow" size="sm" /> <Spinner animation="grow" /></h1>
                                )
                            }
                        </Slider>
                        <h1 className='sumer_music'>Summer music</h1>
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
                                    <h1 className='spinner'><Spinner animation="grow" size="sm" /> <Spinner animation="grow" /></h1>
                                )
                            }
                        </Slider>
                        <h1 className='sumer_music'>Popular music</h1>
                        <Slider {...settings}>
                            {

                                miksFilter3?.map((v, i) => {
                                    return <div className="col-lg-2 col-md-4 col-sm-12" key={i}>
                                        <div className="categoryCard" onClick={() => TakeCategory(v.name)}>
                                            <img src={v.images[0].url} alt="Music pictures" className='cImg' />
                                            <p className='cWord'>{v.name}</p>
                                        </div>
                                    </div>
                                })

                            }
                        </Slider>
                        <div>
                            <div className="slider_map">
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
                                <div>
                                    <Slider {...settings2}>
                                        {

                                            data?.map((v, i) => {
                                                return <div className="card_section" onClick={() => Going(v.name)} >
                                                    <img className='section_img' src={v.images[0].url} alt="" />
                                                    <p className='section_title'>{v.name}</p>
                                                </div>
                                            })
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