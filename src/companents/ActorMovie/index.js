import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import movie from "../../img/movie.png"
import {LanguageContext} from "../../context";

const ActorMovie = ({personId}) => {
    const [actorMovie, setActorMovie] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getActorMovie = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=${language}`)
            .then((res) => {
                setActorMovie(res.data.cast)
            })
    }
useEffect(() => {
    getActorMovie(API_KEY)
}, [language])
    console.log(actorMovie)

    return (
        <div id="actorMovie" style={{
            background: dark === true ? "darkgrey" : "",
            border: dark === true ? "3px solid white" : "3px solid black",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "50px"
        }}>
                <div className="actorMovie">
                    {
                        actorMovie.map((el) => (
                            <div className="actorMovie--card">
                                <Link to={`/movie/movie_details/${el.id}`}>
                                    {el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                          width={140} alt=""/>
                                        : <img src={movie} style={{
                                            padding: "30px 0",
                                            border: "2px solid black"
                                        }} width={150}  alt=""/>}
                                </Link>
                                <h4>{el.title}</h4>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export default ActorMovie;