import React from 'react'
import './TestimonialsSection.css'
import Fade from 'react-reveal/Fade';

import Testimonials1 from '../../assets/testimonials1.jpg'


const TestimonialsSection = () => {
    return (
        <>
        <div className='testimonials-section container'>
    

        <div className='testimonial-wrap'>
                <Fade right>
                    <div className="testimonial-right">
                        <img src={Testimonials1} width="550px" height="470px" alt="Conselling Session with a patient" loading="lazy" />
                    </div>
                </Fade>

                <Fade left>
                    <div className="testimonial-left">
                        <h1>HEAR WHAT OUR CLIENTS SAY</h1>
                        <br/>
                        <p><i>“…I am thankful for all the love and support of others who are on the same path as me… I have a tribe today that makes a movement toward a better life… I wake up with a purpose in life, instead of feeling hopeless… Today, I am able to be an example of what recovery can do for others. I love my life today because of [the] recovery and support of this program.”</i></p>
                        <br />
                        <h1>GREG L.</h1>
                    </div>
                </Fade>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
        </>
    )
}

export default TestimonialsSection
