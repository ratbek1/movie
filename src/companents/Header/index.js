import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../img/header_logo.svg"
import {LanguageContext} from "../../context";
import {CiLight} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";

const Header = () => {
    const [search, setSearch] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    return (
        <div id="header" style={{
            background: dark === true ? "black" : "white",
            borderBottom: dark === true ? "white 4px solid" : "black 4px solid",
            borderTop: dark === true ? "white 4px solid" : "black 4px solid"
        }}>
            <div className="container">
                <div className="header">
                    <img src={logo} alt=""/>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Popular</NavLink>
                        <NavLink to={"/top_rated"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Top Rated</NavLink>
                    </div>
                    <div className="header--btn">
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">English</option>
                            <option value="ru-RU">Русский</option>
                            <option value="fr-FR">France</option>
                        </select>
                        <input type="text" placeholder="поиск" style={{
                            background: dark === true ? "white" : "black",
                            color: dark === true ? "black" : "white"
                        }} onChange={(e) => {
                            setSearch(e.target.value)
                        }} onKeyDown={(e) => {
                            if (e.key === "Enter"){
                                nav(`/search/search_movie/${search}`)
                            }
                        }}/>
                        <button onClick={() => nav(`/search/search_movie/${search}`)} style={{
                            border: dark === true ? "white 2px solid" : "black 2px solid"
                        }}>Search</button>
                    </div>
                    <div className="header--dark">
                        <button onClick={() => setDark(false)}><CiLight/></button>
                        <button onClick={() => setDark(true)}><MdDarkMode/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;