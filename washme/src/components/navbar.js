import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav>
        <div id="logo-container">
            <Image src={logo} alt="logo" width={50}/>
            <h1>WashMe</h1>
        </div>
        <button>GET THE APP</button>
    </nav>
  )
}
