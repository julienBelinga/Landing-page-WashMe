import Image from 'next/image'
import React from 'react'
import playstore from '@/assets/playstore.png'
import apple from '@/assets/apple.png'

export default function About() {
  return (
    <section id="about">
        <h1>Spare your time<br/> using WashMe</h1>
        <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, vel aliqua<br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, vel aliqua</p>
        <div id="button-download">
            <button>
              <Image src={playstore} alt="Google Play" width={30} height={30}/>
              <p>Get it on<br/><strong>Google Play</strong></p>
            </button>
            <button>
              <Image src={apple} alt="app store" width={30} height={30}/>
              <p>Download on the<br/><strong>App Store</strong></p>
            </button>
        </div>
    </section>    
  )
}
