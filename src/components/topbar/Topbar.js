import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content '>
                <div className='address bar-box1'>
                    <p><span><MdLocationPin />&nbsp;</span>79100 Ocotillo Dr La Quinta, CA 92253</p>
                </div>

                <div className='email bar-box2'>
                    <p><span><FiMail />&nbsp;</span>  info@naturalresthouse.com</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone />&nbsp;</span> <a href="tel:3237920399"> +1 (323) 792-0399 </a></p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
