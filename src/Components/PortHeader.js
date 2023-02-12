import React from "react";
import Headerimg from "../images/laptop.png";
import "animate.css/source/animate.css"
import Typed from "react-typed";

export default function PortHeader() {
    return (
        <div className="containerHeader">
            <img src={Headerimg} className="HeaderImg" alt="computer"></img> 
            <div className="centeredHeader "> 
            <p className="Header--Name"> 
                Nourhan Mohamed Ismail<br></br>
            </p>
            <h2 className="Header--tittle">
                Software Developer<br></br>
            </h2>
        <Typed
        className="typed-text"
        strings={["HTML","CSS","JavaScript","Bootstrap","VUE.js","React.js","PHP","Java","Python","C","Linux"]}
        typeSpeed={30}
        backSpeed={50}
        loop
        />
        <br/>

            <button className="btn btn-outline-dark Header--button"><a className="Projects--buttonText" href="#Contacts">
        Contact Me</a>
    </button>
            
        </div>
         </div>
    )
}