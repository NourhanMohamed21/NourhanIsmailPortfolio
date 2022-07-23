import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHackerrank } from '@fortawesome/free-brands-svg-icons'
export default function Contacts(){
    return (
        <div className="Contacts footer" id="Contacts">
            <h5 className='phone'> Phone Number: 01126116632 <br /> nourhan.moh.ismail@gmail.com</h5>
            <div className="footer">
                <button className="Info--BMail" ><a href="https://www.linkedin.com/in/nourhanmohamed21/">
                    <FontAwesomeIcon icon={faLinkedin} /></a>
                </button>
                <button className="Info--BMail" ><a href='https://github.com/NourhanMohamed21'>
                    <FontAwesomeIcon icon={faGithub} /></a>
                </button>
               
                <button className="Info--BMail" >< a href="https://www.facebook.com/profile.php?id=100000839928071">
                    <FontAwesomeIcon icon={faFacebook} /></a>
                </button>
                <button className="Info--BMail" ><a href='https://www.hackerrank.com/nourhan_moh_ism1'>
                    <FontAwesomeIcon icon={faHackerrank} /> </a>
                </button>
            </div>

        </div>
    )
}