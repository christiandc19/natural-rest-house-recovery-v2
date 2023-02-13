import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
import Team5 from '../../components/team/Team5'
import Services from "../../components/servicesCards/Cards"



const home = () => {
  return (
    <>
    {/* <WhatWeDo /> */}
    <Services />
    <Whoweare />
    <Team5 />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
