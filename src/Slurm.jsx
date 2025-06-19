import React from "react";
import { NavLink } from "react-router-dom";
import slurmcan from './assets/slurm.png'
import slurmNeon from './assets/Slurm neon.png'
import './Slurm.css'



const Slurm = () => {
    return(
    <div className="slurm-page">
        <h1>Enjoy Slurm! It's highly addictive</h1>
        <div id="slurmcontainer">
            <div className="img-wrapper"><img className="slurmcan" src={slurmcan} alt="Slurm can" /></div>
            <div className="img-wrapper"><img className="slurmslug" src="https://comb.io/yE8vYB.gif" alt="Slurm slug" /></div>
            <div className="img-wrapper"><img className="slurmneon" src={slurmNeon} alt="Slurm neon" /></div>
            <div className="img-wrapper"><img className="slurmcan" src={slurmcan} alt="Slurm can" /></div>
        </div>
          <NavLink to={"/"}>go back</NavLink>
    </div>
    )
}

export default Slurm