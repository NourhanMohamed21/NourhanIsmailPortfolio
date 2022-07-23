import React from "react";
import photo from "../images/Me.jpg"

export default function About(){
    return(
        <div className="About" id="AboutMe">
            <p className="About--Header">About me</p>
 <div className="row About--padding ">
    <div  className="col-lg-2 "></div>
 <div className="col-sm-12 col-lg-3 About--align">
    <img src={photo} className="About--Image"/> 
 </div>
 <div className="col-sm-12 col-lg-5  About--text">
    <p>
        My Name is Nourhan Mohamed Ismail.
        <br/>Student at Alexandria University Faculty of Engineering Computer and communication SSP department.
        <br/>Term 7 GPA:3.9
        <br/>Graduated from EGC High school
        <br/>I am eager in learning more and more about computer science espically web development.
        <br/>I have experience with FrontEnd languges and frameworks.
        <br /> I love problem solving and got rank 35 in ICPC competition 2021.
        <br/>Fluency in writing and speaking English.

    </p>
 </div>
 </div>
 </div>
    )
}

