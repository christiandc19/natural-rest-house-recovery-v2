import React from 'react'
import {Link} from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/nav-logo.png'
import './FooterStyles.css'

import { Link as LinkRoll } from 'react-scroll'

const Footer = () => {
    return (

<>
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} width="120px" height="80px" alt="Natural Rest House Logo" loading="lazy"/>
                    </div>
                    <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='footer-icon' />
                    </LinkRoll>

                </div>
                <div className="col-container">

                    <div className="col">
                        <h3>COMPANY</h3>

                        <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <Link to='/mission'><p>Our Mission</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <Link to='/team'><p>Our Team</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <Link to='/testimonials'><p>Testimonials</p></Link>
                        </LinkRoll>

                    </div>


                    <div className="col">
                        <h3>Programs</h3>
                        
                        <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <Link to='/mental-health'><p>Mental Health Treatment</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <Link to='/substance-abuse'><p>Substance Abuse Treatment</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                        <Link to='/jobs'><p>Jobs Program</p></Link>
                        </LinkRoll>

                    </div>

                    <div className="col ">
                        <h3>Quick Links</h3>
                        
                            <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                                <Link to='/'><p>Home</p></Link>
                            </LinkRoll>

                            <LinkRoll activeClass="active" to="toTop" spy={true} smooth={true} duration={500} >
                                <Link to='/contact'><p>Contact Us</p></Link>
                            </LinkRoll>

                    </div>
                </div>
                <p className='copyright'><p>&copy; 2023 Natural Rest House Recovery. All rights reserved</p></p>


            </div>

        </div>
</>
    )
}

export default Footer
