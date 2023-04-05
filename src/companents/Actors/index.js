import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import users from "../../img/user.png"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const Actors = ({movieId}) => {
    const [actors, setActors] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}`)
            .then((res) => {
                setActors(res.data.cast)
            })
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [language])
    console.log(actors)
    return (
        <div id="actors" style={{
            background: dark === true ? "black" : "white",
            borderBottom: dark === true ? "white 4px solid" : "black 4px solid"
        }}>
            <div className="container">
                <h1 style={{
                    color: dark === true ? "white" : "black"
                }}>В главных ролях</h1>
                <div className="actors">
                        {
                            actors.map((el) => (
                                <div className="actors--card">
                                    <Link to={`/person/person_details/${el.id}`}>
                                        {el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt=""/>
                                            :<img src={users} width={150} alt=""/> }
                                        <h4>{el.name}</h4>
                                    </Link>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default Actors;
