import React from 'react'
import './ServicesSA.css'
import Fade from 'react-reveal/Fade';
import { BiBeer } from 'react-icons/bi';
import { FaSyringe } from 'react-icons/fa';
import { CiPillsBottle1 } from 'react-icons/ci';
import { TbPills } from 'react-icons/tb';

import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll'

const ServicesSA = () => {
  return (
    <>
      <div className='servicesSA'>
            <div className='servicesSA-content'>
                
                <div className='servicesSA-header'>
                <h1>OUR SERVICES</h1>
                <h2>SUBSTANCE ABUSE TREATMENT</h2>
                <p>At Natural Rest House Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment.</p>
                </div>

                <div className='servicesSA-flex'>
                
                <Fade left>
                    <div className='servicesSA-flexItem'>
                        <div className='servicesSA-icon'><BiBeer/></div>
                        <h1>ALCOHOL ADDICTION</h1>
                        <p>Inability to manage one’s drinking habits. It is the most acute form of alcohol abuse.</p>
                    </div>
                </Fade>


                <Fade right>
                    <div className='servicesSA-flexItem'>
                        <div className='servicesSA-icon'><FaSyringe/></div>
                        <h1>HEROIN ADDICTION</h1>
                        <p>Heroin is an opioid stimulant created from morphine and the seed of the poppy plant. It usually appears in either powder form or as a sticky tar substance</p>
                    </div>
                </Fade>

                <Fade left>                    
                    <div className='servicesSA-flexItem'>
                        <div className='servicesSA-icon'><CiPillsBottle1/></div>
                        <h1>XANAX ADDICTION</h1>
                        <p>When taken in high doses, Xanax can lead to serious side effects, ranging from coma, to respiratory arrest, and even death.</p>
                    </div>
                </Fade>


                <Fade right>                    
                    <div className='servicesSA-flexItem'>
                        <div className='servicesSA-icon'><TbPills/></div>
                        <h1>PRESCRIPTION ADDICTION</h1>
                        <p>Abuse of prescription medications can be recreational, due to addiction, or both, and the consequences can be severe or fatal.</p>
                    </div>
                </Fade>

                </div>

                <div className='servicesSA-btn'>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/mental-health">
                        <button>VIEW ALL</button>
                    </Link>
                    </LinkRoll>
                </div>

            </div>
      </div>
    </>
  )
}

export default ServicesSA
