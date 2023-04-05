import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import Slider from "react-slick";


const Home = () => {
    const [home,setHome] = useState([])

    const getHome = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=ru-RU&page=1`)
            .then((res) => {
                setHome(res.data.results)
            })
    }
    useEffect(() => {
        getHome(API_KEY)
    }, [])
    console.log(home)
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };

    return (
        <div id="home">
                <div className="home">
                    <Slider {...settings}>
                        {
                            home.map((el) => (
                                <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${el.backdrop_path}`} alt="img"/>
                            ))
                        }
                    </Slider>
                </div>
        </div>
    );
};

export default Home;