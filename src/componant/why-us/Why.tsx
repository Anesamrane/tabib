import React from 'react'
import './why.css'
import { FaCarSide } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";



function Why() {
  return (
    <div className='whypage'>
      <h1>Why you have to try our app</h1>
      <div className='whypagecard'>
        <div className='card'>
          <center>
        <FaCarSide />
        <h4>No need to travel or wait in queues</h4>
        <p>With our online platform, you can schedule consultations at your convenience,
           from the comfort of your home or office.</p>
           </center>
        </div>
        <div className='card'>
        <center>
        <GrSecure />
        <h4>Secure and Confidential:</h4>
        <p>Your privacy is our priority. Our secure platform ensures that your 
          consultations are confidential and 
          conducted in a safe and professional environment.</p>
           </center>
        </div>
        <div className='card'>
        <center>
        <FaCalendarAlt />
        <h4>Flexible Scheduling:</h4>
        <p>Easily schedule consultations that fit your schedule. 
          Our platform offers flexible time slots, 
          making it easy to find a time that works for you and the expert.</p>
           </center>
        </div>
      </div>
    </div>
  )
}

export default Why