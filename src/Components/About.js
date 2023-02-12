import React from "react";
import photo from "../images/Me.jpg"

export default function About() {
   return (
      <div className="About" id="AboutMe">
         <p className="About--Header">About me</p>
         <div className="row About--padding ">
            <div className="col-lg-2 "></div>
            <div className="col-sm-12 col-lg-3 About--align">
               <img src={photo} className="About--Image" />
            </div>
            <div className="col-sm-12 col-lg-5  About--text">
               <p >
                <li> My Name is Nourhan Mohamed Ismail.</li> 
                  <li>Student at Alexandria University, Faculty of Engineering, Computer and communication, SSP department.</li>
                  <li>Term 8 GPA: 3.9</li>
                  
                  <li>Graduated from EGC High school.</li> 
                  <li> I am eager to learn more about computer science especially web development.</li> 
                  <li> I have experience with FrontEnd languages and frameworks.</li> 
                  <li>  I love problem solving and got high ranks in ICPC competition 2021 and 2022.</li> 
                  <li> Fluent in writing and speaking English.</li> 

               </p>
            </div>
         </div>
      </div>
   )
}

