import React from 'react'
import './Workwithus.css'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";



function Workwithus() {
  return (
    <div className='Workwithuspage'>
      <h1>You are doctor who look for extra money ?</h1>
      <div className='Workwithuspagecard'>
        <div className='card'>
          <center>
        <FaRegMoneyBillAlt />
        <h4>Work with us and earn money</h4>
        <p>With our online platform, you can earn money anytime,
           and anywhere.</p>
           </center>
        </div>
        <div className='card'>
        <center>
        <RiUserFollowFill />
        <h4>Follow-up Appointments</h4>
        <p>Online consultations make it easier for doctors to conduct follow-up appointments, 
          ensuring continuity of care for patients.</p>
           </center>
        </div>
        <div className='card'>
        <center>
        <FaCalendarAlt />
        <h4>Flexible Scheduling:</h4>
        <p>Easily schedule consultations that fit your schedule. 
          Our platform offers flexible time slots, 
          making it easy to find a time that works for you and the Appointments.</p>
           </center>
        </div>
      </div>
      <center>
          <button>Join us now</button>
        </center>
    </div>
  )
}

export default Workwithus