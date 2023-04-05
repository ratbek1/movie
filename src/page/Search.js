import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../API/api";
import {useParams} from "react-router-dom";
import MovieCard from "../companents/MovieCard";
import {LanguageContext} from "../context";

const Search = () => {
    const [searchMovie, setSearchMovie] = useState([])
    const {movieName} = useParams()
    const {dark} = useContext(LanguageContext)
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                setSearchMovie(res.data.results)
            })
    }
    useEffect(() => {
        getSearch(API_KEY)
    }, [movieName])
    console.log(searchMovie)
    return (
        <div id="popular" style={{
            transition: "800ms",
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        searchMovie.map((el) => (
                            <MovieCard el={el}/>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Search;