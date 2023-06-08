import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import ContactForm from '../contact/ContactForm';
import Team5 from '../../components/team/Team5'
import C1 from '../homeComponent1/C1';
import ServicesMH from '../servicesMH/ServicesMH';
import ServicesSA from '../servicesSA/ServicesSA';



const home = () => {
  return (
    <>
    <C1 />
    <ServicesMH />
    <ServicesSA />
    <Team5 />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
