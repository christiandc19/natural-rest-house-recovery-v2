import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'

import './Hero.css'



const Hero = () => {
    return (
<>        
<div className='hero'>
<ul class="slideshow">
	<li><span></span></li>
    <li><span>2</span></li>
	<li><span></span></li>
	<li><span></span></li>
	<li><span></span></li>
</ul>


<div className="hero-container container">
                <div className="content">
                        <h1 className='subtitle'><span className="fade-in one">NATURAL </span>  
                        <br/>
                        <span className="fade-in two">REST HOUSE</span><br/> </h1>
                        <br/><h2> <span className='fade-in three'>SUBSTANCE ABUSE AND MENTAL HEALTH TREATMENT FACILITY
                            </span></h2>
                        <br />
                        <div className='hero-btn fade-in four'>
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to="/contact">
                        <button>CALL US</button>
                        </Link>
                        </LinkRoll>
                        </div>
                    <br />
                    <div className='fade-in four'>
                    <p><i>"Walk the road of recovery with us"</i></p>
                    </div>
                </div>
            </div>


</div>




        {/* <div className='hero'>
            <div className="hero-container container">
                <div className="content">
                    <Fade left>
                        <h1 className='subtitle'><span className="fade-in one">NATURAL </span>  
                        
                        <span className="fade-in two">REST</span><br/> <span class="fade-in three">HOUSE</span> </h1>
                        <br/><h2> <span className='fade-in four'>SUBSTANCE ABUSE AND MENTAL HEALTH TREATMENT FACILITY
                            </span></h2>
                    </Fade>
                        <br />
                        <div className='hero-btn fade-in five'>
                        <Link to="/contact">
                        <button>CALL US</button>
                    </Link>
                    </div>
                    <br />
                    <div className='fade-in six'>
                    <p><i>"Walk the road of recovery with us"</i></p>
                    </div>
                </div>
            </div>
        </div> */}
</>

    )
}

export default Hero