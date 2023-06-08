import React from 'react'
import './ServicesMH.css'

import { BiBrain } from 'react-icons/bi';
import { GiBrain } from 'react-icons/gi';
import { FaTheaterMasks } from 'react-icons/fa';
import { CiFaceFrown } from 'react-icons/ci';
import { FaRegSadTear } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';



import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'




const ServicesMH = () => {
  return (
    <>
      <div className='servicesMH'>
            <div className='servicesMH-content'>

                <div className='servicesMH-header'>
                    <h2>OUR SERVICES</h2>
                    <h1>MENTAL HEALTH TREATMENT</h1>
                    <h3>Recovery begins here.</h3>
                </div>


                <div className='servicesMH-flex container'>

                <Fade left>
                    <div className='servicesMH-flexItem'>
                        <div className='servicesMH-icon'><BiBrain/></div>
                        <h1>ANXIETY</h1>
                        <p>Intense, excessive, and persistent worry and fear about everyday situations. Fast heart rate, rapid breathing, sweating, and feeling tired may occur.</p>
                    </div>
                </Fade>

                <Fade top>
                    <div className='servicesMH-flexItem'>
                        <div className='servicesMH-icon'><GiBrain/></div>
                        <h1>DEPRESSION</h1>
                        <p>A group of conditions associated with the elevation or lowering of a person's mood, such as depression or bipolar disorder.</p>
                    </div>
                </Fade>

                <Fade right>
                    <div className='servicesMH-flexItem'>
                        <div className='servicesMH-icon'><FaTheaterMasks/></div>
                        <h1>BIPOLAR</h1>
                        <p>The exact cause of bipolar disorder isn’t known, but a combination of genetics, environment, and altered brain structure and chemistry may play a role.</p>
                    </div>
                </Fade>

                <Fade left>
                    <div className='servicesMH-flexItem'>
                        <div className='servicesMH-icon'><CiFaceFrown/></div>
                        <h1>STRESS DISORDER</h1>
                        <p>It is a state of worry or mental tension caused by a difficult situation. Stress is a natural human response that prompts us to address challenges and threats in our lives.</p>
                    </div>
                </Fade>


                <Fade bottom>
                    <div className='servicesMH-flexItem'>
                        <div className='servicesMH-icon'><FaRegSadTear/></div>
                        <h1>PANIC DISORDER</h1>
                        <p>It is a recurring and regular panic attacks, often for no apparent reason. Everyone experiences feelings of anxiety and panic at certain times during their lifetime.</p>
                    </div>
                </Fade>

                <Fade right>
                    <div className='servicesMH-flexItem'>
                        <div className='servicesMH-icon'><BiBrain/></div>
                        <h1>SCHIZOPHRENIA</h1>
                        <p>Paranoid delusions, also called delusions of persecution, reflect profound fear and anxiety along with the loss of the ability to tell what's real and what's not real.</p>
                    </div>
                </Fade>
                
                </div>


                <div className='servicesMH-btn'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/substance-abuse">
                        <button>VIEW ALL</button>
                    </Link>
                    </LinkRoll>
                </div>

            </div>
      </div>
    </>
  )
}

export default ServicesMH
