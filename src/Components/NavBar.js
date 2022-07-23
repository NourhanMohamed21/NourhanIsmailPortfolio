import React from "react";
import  { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar()
{const [navSize, setnavSize] = useState("5rem");
const [navColor, setnavColor] = useState("transparent");
const listenScrollEvent = () => {
  window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
  window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
};
useEffect(() => {
  window.addEventListener("scroll", listenScrollEvent);
  return () => {
    window.removeEventListener("scroll", listenScrollEvent);
  };
}, []);

return(
        
        <div id="banner_cont" className="container-fluid ">
            
            {/* <!-- starting the nav bar and toggle for mobile screen to sidebar --> */}
            <nav id="menu" className="navbar whiteNav fixed-top navbar-expand-xl" style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}>
                <div className="container-fluid ">

                    <a className="navbar-brand offset-1 col-2" href="#">
                        <h2 className=" Header ">Nourhan Ismail</h2>
                    </a>
                    <button className="navbar-toggler" type="button" id="ToggleButton" data-bs-toggle="offcanvas"
                         data-bs-target="#offcanvasNavbar" >
                         <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" 
                        aria-labelledby="offcanvasNavbarLabel">
                        
                        <div className="offcanvas-header text-right">
                            <h2 className=" Header ">Nourhan Ismail</h2>
                            <button type="button" className="btn-close text-right text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-around flex-grow-1 pe-3 offset-2">
                                <li className=" nav-item ">
                                    <a className="nav-linkk NavHome Turquise" href="#">Home</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-linkk NavAbout"  href="#AboutMe">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-linkk NavSymp" href="#ProjectsSec">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-linkk NavPrev"  href="#SkillsSec">Skills</a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="nav-linkk NavFQ"  href="#Contacts">Contacts</a>
                                </li>
                                
                                <li className="col-1"></li>
                            </ul>

                        </div>
                        
                    </div>
                 
                </div>
            </nav>
        </div> 
   )


}