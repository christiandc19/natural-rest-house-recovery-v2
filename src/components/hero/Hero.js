import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import Wave from '../../assets/waves.svg'


const Hero = () => {
    return (
<>        
        <div className='hero'>


        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>


            <div className="hero-container container">
                <div className="content">
                    <Fade right>
                        <h1>NATURAL REST HOUSE RECOVERY</h1>
                    </Fade>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and <br/>Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Get an Appointment</button>
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p><i>"Walk the road of recovery with us"</i></p>
                    </Fade>
                </div>
            </div>
        </div>
</>

    )
}

export default Hero