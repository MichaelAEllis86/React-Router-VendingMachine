import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Bev from './assets/Bev.png'
import './VendingMachine.css'
// import Slurm from "./Slurm"
// import BachelorChow from "/.BachelorChow"
// import Popplers from "/.Popplers"


// Design
// use react router links to render 3 different components via different links

const VendingMachine = () => {
    return(
        <div className="vending-container">
            <div className="main-content">
                <img className="tenor-gif-embed" src="https://media1.tenor.com/m/hyVt5PDLlzcAAAAd/futurama-good-news-everyone.gif" alt="goodnews!" />
                <h1>Good News Everyone! Bev is here to take your order!</h1>
                <img src={Bev}></img>
            </div>
            <div className="menu">
                <h2>Bev's Menu</h2>
                <nav>
                    <NavLink to={"/"}>home</NavLink>
                    <NavLink to={"/slurm"}>slurm</NavLink>
                    <NavLink to={"/popplers"}>popplers</NavLink>
                    <NavLink to={"/bachelorchow"}>bachelorchow</NavLink>
                </nav>
            </div>
            
        </div>
        
    )
}




export default VendingMachine