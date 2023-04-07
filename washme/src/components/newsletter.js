import Image from 'next/image'
import React from 'react'
import mail from '@/assets/enveloppe.png'

export default function Newsletter() {
  return (
    <div className='newsletter-container'>
        <form>
            <h1>Rejoins <em style={{color: 'rgb(63, 174, 255)'}}>Notre communauté</em></h1>
            <p>Suis notre actualité et bénéficie d&apos;offres exclusives</p>
            <div className='email-box'>
                <Image src={mail} width={35} alt="enveloppe"/>
                <input className='tbox' type="email" name="" value="" placeholder="Enter your email address" />
                <button className='btn' type="button" name='button'>Subscribe</button>
            </div>
        </form>
    </div>
  )
}
