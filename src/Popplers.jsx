import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import popplerChild from './assets/poppler.png'
import angry from './assets/angryomnicronian.png'
import './Popplers.css'


// we want to push a button that adds a new image each time a new poppler

const Popplers = () => {
    // const popplerAttributes={src:{popplerChild}, alt:"poppler"}
    // const [count, setCount]=useState(0)
    const [popplerArr, setPopplerArr]=useState([])

    const addPoppler = () =>{
        setPopplerArr([...popplerArr, {popplersrc:popplerChild, poppleralt:"dont eat the babies!", angrysrc:angry, angryalt:"angry omnicronian"}])
    }

    const resetPoppler = () =>{
        setPopplerArr([])
    }

    return(
    <div className="poppler-page">
        <h1> Don't Enjoy Popplers! They are Omicronians! Lrrr the ruler of Omicron Persei 8 will eat you if you do!!! </h1>
        <div id="poppler-container">
            <div className="img-wrapper"><img className="poppler-gif" src="https://i.gifer.com/3FP0.gif" alt="poppler in sauce" /></div>
            <div className="img-wrapper"><img className="free-poppler" src="https://media1.tenor.com/m/vDFE3Bo5wDEAAAAd/stop-eating-popplers-futurama.gif" alt="free popplers?" /></div>
            <div id="popplerAddContainer">
                {popplerArr.map(p => <div className="img-wrapper"><h4>Are you sure???</h4><img className="baby-poppler" src={p.popplersrc} alt={p.poppleralt}></img> <img src={p.angrysrc} className="angry" alt={p.angryalt}></img></div>)}
            </div>
        </div>
        <button id="eatbutton" onClick={addPoppler} >Eat one anyways</button>
        <button id="resetbutton" onClick={resetPoppler} >Put the popplers back!</button>
          <NavLink to={"/"}>go back</NavLink>
    </div>
    )
}

export default Popplers