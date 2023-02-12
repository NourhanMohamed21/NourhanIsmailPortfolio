import data from "./Components/projectList"
import Projects from "./Components/Projects"
import React from "react"
export default function ProjectsSec(){
const project = data.map(item => {
    return (
        <Projects
            key={item.id}
            {...item}   
        />
    )
})  
    
    return(
        <div id="ProjectsSec">
<h1 className="Skills--tittle">Some of my Projects</h1>
{project}
        </div>
    )
}