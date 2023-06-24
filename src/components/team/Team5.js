import React from 'react'
import './Team5.css'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'
import Fade from 'react-reveal/Fade';



const Team5 = () => {
    return (
        <>
        <div className='core'>
        <div className='team-section container'>
        <h1>MEET THE CORE</h1>
        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
            <div>
                <div className="content">

                    <div className='flex-right'>
                    <Fade top>
                    <div className='thumbnail'>
                        <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/nicole.jpg" alt="Nicole Scimone Shaver - Operations Director" loading="lazy"/>
                        <div>                   
                        <p><b></b><br/><i>Operations Director</i></p>
                        </div>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/floricinda.jpg" alt="Florincinda Zapata - Lead Case Manager" loading="lazy"/>
                    <p><b>Floricinda Zapata</b><br/><i>Lead Case Manager</i></p>
                    </div>
                    </Fade>


                    <Fade top>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/robert-masonis-lll.jpg" alt="Robert Masonis lll - BHT" loading="lazy"/>
                        <p><b> Robert Masonis lll </b><br/><i>Behavioral Health Technician / Med Tech</i></p>  
                    </div>
                    </Fade> 


                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/michael.jpg" alt="Michael Marquez - Behavioral Health Technician" loading="lazy"/>
                    <p><b>Michael Marquez</b><br/><i>Behavioral Health Technician</i></p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/steve.jpg" alt="Steven DeLara - BHT" loading="lazy"/>
                        <p><b>Steven DeLara</b><br/><i>Behavioral Health Technician</i></p>  
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
        </div>

</>
    )
}

export default Team5
