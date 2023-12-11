import React from 'react'
import './main.css'
import doctorimg from '../../../public/undraw_doctor_kw-5-l.svg'
import Image from 'next/image'

function Main() {
  return (
    <div className='mainpage'>
         <div className='maindescription'>
            <h1>hello in Tbib</h1>
            <p>we believe in making professional advice and consultation accessible to everyone, 
                anytime, anywhere. Our platform connects you with experienced professionals across various industries,
                 ensuring that expert guidance is just a click away.</p>
                 <button>Book a Consultation</button>
        </div>
        <div className='img'>
            <Image src={doctorimg} alt="" />
        </div>
    </div>
  )
}

export default Main