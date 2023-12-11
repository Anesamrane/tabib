import React from 'react'
import './Footer.css'
import Link from 'next/link'
import { RiExternalLinkFill } from "react-icons/ri";

function Footer() {
  return (
    <div className='footer'>
      <div className='contact'>
        <h4>Contact</h4>
        <ul>
          <li> <Link href=""> Facebook  <RiExternalLinkFill />  </Link>   </li> 
          <li> <Link href=""> Instagram  <RiExternalLinkFill />  </Link>   </li> 
          <li> <Link href=""> Twitter  <RiExternalLinkFill />  </Link>   </li>
          <li> <Link href=""> Youtube  <RiExternalLinkFill />  </Link>   </li>  
          <li> <Link href=""> Email  <RiExternalLinkFill />  </Link>  </li> 
        </ul>
      </div>
      <div className='specialties'>
      <h4>specialties</h4>
      <div>
        <ul>
          <li> <Link href=""> Cardiology  <RiExternalLinkFill />  </Link> </li>  
          <li> <Link href=""> Dermatology  <RiExternalLinkFill />  </Link> </li>  
          <li> <Link href=""> Orthopedics  <RiExternalLinkFill />  </Link> </li>  
          <li> <Link href=""> Gastroenterology  <RiExternalLinkFill />  </Link> </li>  
          <li> <Link href=""> Neurology  <RiExternalLinkFill />  </Link> </li> 
        </ul>
        <ul>
          <li> <Link href=""> Ophthalmology  <RiExternalLinkFill />  </Link> </li> 
          <li> <Link href=""> Obstetrics and Gynecology  <RiExternalLinkFill />  </Link> </li>  
          <li> <Link href=""> Pediatrics  <RiExternalLinkFill />  </Link> </li>  
          <li> <Link href=""> Psychiatry  <RiExternalLinkFill />  </Link> </li> 
          <li> <Link href=""> Oncology  <RiExternalLinkFill />  </Link> </li> 
        </ul>
        </div>
      </div>
      <div className='faq'>
      <h4>Faq</h4>
        <ul>
          <li> <Link href=""> Tbib premium  <RiExternalLinkFill />  </Link> </li> 
          <li> <Link href=""> Faq  <RiExternalLinkFill />  </Link> </li> 
          <li> <Link href=""> Help  <RiExternalLinkFill />  </Link> </li> 
        </ul>
      </div>
    </div>
  )
}

export default Footer