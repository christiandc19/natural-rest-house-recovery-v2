import React from 'react'
import Fade from 'react-reveal/Fade';
import './Treatment.css'


import ContactForm from '../contact/ContactForm';

import Wave from '../../assets/waves.svg'

import TreatmentSection from './TreatmentSection';

const Treatment = () => {
    return (
        <>

{/* -------------------------------- HERO -------------------------------------- */}

        <div className='treatment main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt='colum divider' repeat-x />
            </div>
            <div className="treatment-content">
                <Fade right>
                    <h1>TREATMENT</h1>
                </Fade>
            </div>
        </div>

{/* -------------------------------- SECTION -------------------------------------- */}

        <TreatmentSection />
        <ContactForm />
        </>
    )
}

export default Treatment
