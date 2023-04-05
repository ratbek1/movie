import React, {useContext} from 'react';
import {LanguageContext} from "../../context";

const Footer = () => {
    const {dark} = useContext(LanguageContext)
    return (
        <div id="footer" style={{
            background: dark === true ? "white" : "black"
        }}>
            <div className="container">
                <div className="footer">
                    <h3 style={{
                        color: dark === true ? "black" : "white"
                    }}>Front end Developer...Chegebaev Raatbek</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;