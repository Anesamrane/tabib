"use client"

import React from 'react'
import './navbar.css'
import Link from 'next/link'
import { VscListFlat } from "react-icons/vsc";
function Navbar() {


let hide = true;

const menu = () => {
  const button = document.getElementById('button');
  const menu = document.getElementById('header');

  if (hide) {
    if (menu) {
      menu.style.display = 'block';
      hide = false;
    }
  } else {
    if (menu) {
      menu.style.display = 'none';
      hide = true;
    }
  }
};

// This assumes you have a button with the id 'button'




  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>Tbib</h2>
            
        </div>
        <nav>
          <div>
            <Link href="">Home</Link>
            <Link href="">services</Link>
            <Link href="">About</Link>
            <button>Login</button>
            </div>
            <span className='menu'>
            <button onClick={menu} id='button'><VscListFlat /></button>
            </span>
        </nav>
        <header id='header'>
          <div>
        <Link href="">Home</Link>
        </div>
        <div>
            <Link href="">services</Link>
            </div>
            <div>
            <Link href="">About</Link>
            </div>
            <div>
            <button>Login</button>
            </div>
        </header>
    </div>
  )
}

export default Navbar