import React from "react";
import { NavLink } from "react-router-dom";
import chowcan from './assets/Bachelor Chow can.png'
import chowflavor from './assets/Bachelor Chow now with flavor.png'
import './BachelorChow.css'


const BachelorChow = () => {
    return(
        <div className="chowpage">
            <h1>Enjoy Bachelor Chow! Now with Flavor!</h1>
            <div id="chowcontainer">
                <div className="img-wrapper"><img className="chowcan" src={chowcan} alt="can of chow!"></img></div>
                <div className="img-wrapper"><img className="chowgif" src="https://media1.tenor.com/m/7JUzYMFJsrwAAAAd/futurama-bachelor-chow.gif"></img></div>
                <div className="img-wrapper"><img className="chowflavor" src={chowflavor}></img></div>
                <div className="img-wrapper"><img className="chowcan" src={chowcan}></img></div>
            </div>
            <NavLink  to={"/"}>go back</NavLink>
        </div>
    )
}


export default BachelorChow