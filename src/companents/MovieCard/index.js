import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";


const MoveCard = ({el, id}) => {
    const {dark} = useContext(LanguageContext)
    return (
        <div key={id} className="popular--card" style={{
            background: dark === true ? "radial-gradient(circle, rgb(239, 238, 238) 27%, rgba(0, 141, 255, 0.97) 51%, rgb(255, 255, 255) 82%)" : "radial-gradient(circle, rgb(3, 3, 3) 27%, rgba(0, 141, 255, 0.97) 51%, rgb(0, 0, 0) 82%)"
        }}>
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img"/>
            </Link>
            <h3 style={{
                color: dark === true ? "black" : "white"
            }}>{el.title}</h3>
        </div>
    );
};

export default MoveCard;