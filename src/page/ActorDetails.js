import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../API/api";
import ActorMovie from "../companents/ActorMovie";
import {LanguageContext} from "../context";

const ActorDetails = () => {
    const [actorDetails, setActorDetails] = useState({})
    const [bio, setBio] =useState(300)
    const {personId} = useParams()
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)

    const getActorDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
            .then((res) => {
                setActorDetails(res.data)
            })
    }
    const more = (text) => {
        if (bio === 300) {
            setBio(text.length)
        }else{
            setBio(300)
        }
    }
    useEffect(() => {
        getActorDetails(API_KEY)
    }, [language])
    console.log(actorDetails)

    const {profile_path, name, place_of_birth, biography, birthday, also_known_as} = actorDetails

    return (
        <div id="actorDetails" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="actorDetails">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actorDetails--info" style={{
                        color: dark === true ? "white" : "black"
                    }}>
                        <h1>{name}</h1>
                        <h3>Дата рождения: {birthday}</h3>
                        <h3>Место рождения: {place_of_birth}</h3>
                        <h4>Также известность как:</h4>
                        <div className="actorDetails--info__about">
                            {
                                also_known_as?.map((el) => (
                                    <p style={{
                                        fontSize: "15px",
                                        margin: "5px 20px 30px 0"
                                    }}>{el}</p>
                                ))
                            }
                        </div>
                        <h5>Биография</h5>
                        <p>{biography?.slice(0,bio)}</p>
                        <h6 onClick={() => {
                        more(biography)
                        }
                        }>{bio === 300 ? "Читать ещё" : "Закрыть"}</h6>
                        <ActorMovie personId={personId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;