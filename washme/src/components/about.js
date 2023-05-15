import Image from 'next/image'
import React from 'react'
import playstore from '@/assets/playstore.png'
import apple from '@/assets/apple.png'

export default function About(props) {
  return (
    <div id="about">
        <h1>Donnez votre linge,<em style={{color: 'rgb(63, 174, 255)'}}> gagnez du temps</em><br/>Lavez du linge,<em style={{color: 'rgb(63, 174, 255)'}}> gagnez de l&apos;argent</em> !</h1>
        <p id="description" dangerouslySetInnerHTML={{ __html:props.description}}></p>
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
    </div>    
  )
}
