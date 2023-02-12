import data from "./Components/projectList"
import Experience from "./Components/Experience"
import React from "react"
import Container from '@mui/material/Container';
export default function ExperienceSec() {


    return (

        <div className="experienceSection">
            <Container>
                <h1 className="Skills--tittle">Experience</h1>
                <div className="exp-padding">

                    <Experience />
                </div>
            </Container>
        </div>
    )
}