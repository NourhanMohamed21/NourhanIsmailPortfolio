import React from "react";

export default function Projects(props) {
    return (
      
        <div className="Project">
            <div className="row About--padding ">
                <div className="col-lg-2 "></div>
                <div className="col-sm-12 col-lg-4 col-md-12 About--align">
                    <img src={props.img} className="Project--Image" />
                </div>
                <div className="col-sm-12 col-lg-4  col-md-12 About--text">
            <p className="About--Header">{props.Name}</p>
                    <p>
                       {props.About}
                    </p>
                    <button className="Projects--button" ><a href={props.Url} target="_blank" className="Projects--buttonText"> Go to Project repo </a></button>
                   
                </div>
            </div>
        </div>

    )
}