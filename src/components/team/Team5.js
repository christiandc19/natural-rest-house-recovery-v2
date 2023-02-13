import React from 'react'
import './TeamSection.css'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import Fade from 'react-reveal/Fade';


const Team5 = () => {
    return (
        <>
        <div className='team-section container'>
        <h1>MEET THE CORE</h1>
        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
            <div>
                <div className="content">

                    <div className='flex-right'>
                    <Fade top>
                    <div className='thumbnail'>
                        <img src="https://natural-rest-house.s3.us-west-1.amazonaws.com/team_1.jpg" width="300" height="250" alt="Team 1" loading="lazy"/>
                        <div>                   
                        <p><b>Ashley Shelton</b><br/><i>Clinical Director</i></p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src="https://natural-rest-house.s3.us-west-1.amazonaws.com/team_2.jpg" width="300" height="250" alt="Clinic Staff" loading="lazy"/>
                    <p><b>Robert Masonis</b><br/><i>Executive Director</i></p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src="https://natural-rest-house.s3.us-west-1.amazonaws.com/team_3.jpg" width="300" height="250" alt="Bluecross  Logo" loading="lazy"/>
                    <p><b>Kamau Shabazz</b><br/><i>Lead Case Manager</i></p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src="https://natural-rest-house.s3.us-west-1.amazonaws.com/team_4.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/>
                        <p><b>Michael Garrett</b><br/><i>Case Manager</i></p>  
                    </div>
                    </Fade>                 

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src="https://natural-rest-house.s3.us-west-1.amazonaws.com/team_5.jpg" width="300" height="250" alt="People in Working Uniform" loading="lazy"/>
                        <p><b>Nicole Shaver</b><br/><i>Case Manager</i></p>  
                    </div>
                    </Fade>
                    </div>

                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/team">
                        <button>Learn More</button>
                    </Link>
                    </LinkRoll>

                </div>
            </div>
        </div>


</>
    )
}

export default Team5
