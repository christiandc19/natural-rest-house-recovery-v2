import React from 'react'
import Fade from 'react-reveal/Fade';

import TreatmentImage1 from '../../assets/treatment-1.jpg'
import TreatmentImage3 from '../../assets/treatment-3.jpg'

import { FaRegStar } from 'react-icons/fa';



import './TreatmentSection.css'


const TreatmentSection = () => {
  return (
    <>
      
      <div className='container treatment-section-overview'>
      <h1>INPATIENT TREATMENT PROGRAMS</h1>
      <p>Our inpatient programs provide a higher level of care, accountability, and structure as you set off on your journey of recovery.</p><br/>
      </div>


    <div className='treatment-section-tile container'>
        <div className='tile-description'>
                <h4>DETOX</h4>
                <ul>
                    <li> <FaRegStar className='star'/> As the first step before the official treatment phase, our detox program offers immediate and intense support to get clean and stay clean</li><br/>
                    <li> <FaRegStar className='star'/> All services, monitoring, and amenities provided for the entirety of your stay: medication, followed by monitored detox care and group sessions. </li> <br/>
                </ul>
            <h4>RESIDENTIAL</h4>
            <ul>
                <li> <FaRegStar className='star'/> Looking for additional structure during detox? Step into a closely monitored healing environment and stay as long as you need.</li> <br/>
                <li> <FaRegStar className='star'/> 24 hour supervision as needed from our staff.</li><br/>
                <li> <FaRegStar className='star'/> Can be the best approach if you are prone to relapse, or your normal life involves the presence of substances that could hinder a successful ongoing recovery. </li>
            </ul><br/>
            <p>
            Our inpatient programs provide a higher level of care, accountability, and structure as you set off on your journey of recovery. </p>
            <h4>PARTIAL HOSPITALIZATION PROGRAM</h4>
                <ul><br/>
                <li> <FaRegStar className='star'/> The step between full-time inpatient and outpatient, our Partial Hospitalization Program (or ‘day rehab’) helps you transition smoothly back into your normal life at your pace.</li><br/>
                <li> <FaRegStar className='star'/> Take part in treatment and therapy during the day and spend your nights in the comfort of your own home. </li>
            </ul>

        </div>

        <Fade right>
        <div className='tile-image'>
            <img src={TreatmentImage1} alt="Rehab Team" loading="lazy" />
        </div>
        </Fade>
    </div>







    <div className='container treatment-section-overview'>
      <h1>OUTPATIENT TREATMENT PROGRAMS</h1>
    <br/>
      </div>


    <div className='treatment-section-tile treatment-section-tile2 container'>

        <Fade right>
        <div className='tile-image'>
            <img src={TreatmentImage3} alt="Rehab Team" loading="lazy" />
        </div>
        </Fade>


        <div className='tile-description'>
  
                <h4>PHP (MENTAL HEALTH AND ADDICTION)</h4>
                <ul><br/>
                    <li> <FaRegStar className='star'/> A more intense, comprehensive treatment approach than IOP, available every day of the week. </li><br />
                    <li> <FaRegStar className='star'/> For those with families and responsibilities at home who seek ongoing treatment. </li><br />
                    <li> <FaRegStar className='star'/> Spend your days in recovery with our team your nights at home. </li><br />
                    <li> <FaRegStar className='star'/> One-on-one support available as needed. </li>
                </ul><br />

                <h4>IOP (MENTAL HEALTH AND ADDICTION)</h4>
                    <ul><br/>
                    <li> <FaRegStar className='star'/> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.</li>
                    <li> <FaRegStar className='star'/> Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job. </li>
                </ul><br/>
                <div className='treatment-title'>
                <h4>OP (MENTAL HEALTH AND ADDICTION)</h4> <br/>
            </div>
                <ul>
                    <li> <FaRegStar className='star'/> Get continued support as needed with our outpatient programs.</li><br />
                    <li> <FaRegStar className='star'/> Attend weekly group and counseling as you move back to your normal life.</li><br/>
                </ul>
        </div>

    </div>


    </>
  )
}

export default TreatmentSection
