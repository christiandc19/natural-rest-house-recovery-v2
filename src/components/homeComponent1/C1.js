import React from 'react'
import './C1.css'
import Fade from 'react-reveal/Fade';


import Component1 from '../../assets/c1.jpg'


const C1 = () => {
  return (
<>
    <div className='c1'>
        <div className='c1-flex container'>

        <Fade left>
            <div className="c1-left">
                <h2>WHO WE ARE</h2><br/>
                <h1>Healthy Mind, Healthy Life.</h1>
                <br/>
                <p>At Natural Rest House Treatment Center, we provide safe and comfortable medical detox services for those struggling with addiction.</p> <br />
                <p>To ensure that those who attend our rehab facility receive tailored care to meet their individual needs, we conduct a series of evaluations before you begin treatment at our drug and alcohol detox center. <br/> <br/> These evaluations allow us to understand your active addictions, history of substance abuse, mental health disorders, co-occurring disorders, prior drug and alcohol treatment, and how our detox center can help you overcome your substance use disorder.</p>
                <br />
            </div>
        </Fade>

        <Fade right>
            <div className="c1-right">
                <img src={Component1} alt="Psychologogist" loading="lazy" />
            </div>
        </Fade>
    </div>

    </div>

</>
  )
}

export default C1