import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import MovieCard from "../companents/MovieCard";
import {BsArrowRight,BsArrowLeft} from "react-icons/bs"
import {LanguageContext} from "../context";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [active, setActive] = useState(1)
    const array = [1,2,3,4,5,6,7,8,9,10]
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getTopRated = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }
    useEffect(() => {
        getTopRated(API_KEY)
    }, [active, language])
    return (
        <div id="topRated" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <h1 style={{
                    color: dark === true ? "white" : "black"
                }}>Top Rated</h1>
                <div className="topRated">
                    {
                        topRated.map((el) => {
                            return (
                                <MovieCard el={el} key={el.id}/>
                            )
                        })
                    }
                </div>
                <div className="top--page">
                    {
                        array.map((btn) => (
                            <button onClick={() => {
                                setActive(btn)
                            }}>{btn}</button>
                        ))
                    }
                    <div className="top--page__buttons">
                        <button onClick={() => setActive(active-1)} style={{
                            background: dark === true ? "white" : "black",
                            color: dark === true ? "black" : "white"
                        }}><BsArrowLeft/></button>
                        <button onClick={() => setActive(active+1)} style={{
                            background: dark === true ? "white" : "black",
                            color: dark === true ? "black" : "white"
                        }}><BsArrowRight/></button>
                        <button onClick={() => setActive(1)} style={{
                            background: dark === true ? "white" : "black",
                            color: dark === true ? "black" : "white"
                        }}>Reset</button>
                        <h3 style={{
                            textAlign: "center",
                            color: dark === true ? "white" : "black"
                        }}>Page:{active}{active ? active === -0 : setActive(1)}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRated;