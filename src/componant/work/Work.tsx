/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './work.css'
import Image from 'next/image'
import prodoctor from '../../../public/undraw_doctors_p6aq.svg'
import shedule from '../../../public/undraw_time_management_re_tk5w.svg'
import wait from '../../../public/undraw_in_no_time_-6-igu.svg'
import advice from '../../../public/undraw_medicine_b-1-ol.svg'
function Work() {
  return (
    <div className='workpage'>
        <h1>How it's work</h1>
        <div className='slide' id='slide'>
        <div className='slidedescription'>
                <h3>Browse Experts</h3>
                <p>Explore our directory of experts and read their profiles to find the 
                    right professional for your needs.</p>
            </div>
            <div className='slideimg'>
                <Image src={prodoctor} alt="" />
            </div>
        </div>


        <div className='slide2' id='slide'>
        <div className='slidedescription'>
                <h3>Book a Consultation</h3>
                <p>Schedule a consultation at a time that suits you. 
                    Choose between video, phone, or chat consultations.</p>
            </div>
            <div className='slideimg'>
                <Image src={shedule} alt="" />
            </div>
        </div>


        <div className='slide3' id='slide'>
        <div className='slidedescription'>
                <h3>Connect with Expert</h3>
                <p>Attend your consultation from the comfort of your own space. 
                    Our secure platform ensures a smooth and confidential interaction.</p>
            </div>
            <div className='slideimg'>
                <Image src={wait} alt="" />
            </div>
        </div>


        <div className='slide4' id='slide'>
        <div className='slidedescription'>
                <h3>Get Expert Advice:</h3>
                <p>Receive valuable insights, advice, 
                    and solutions from experienced professionals in your chosen field.</p>
            </div>
            <div className='slideimg'>
                <Image src={advice} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Work