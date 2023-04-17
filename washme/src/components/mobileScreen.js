import Image from 'next/image'
import React from 'react'
import TextBlock from "@/components/text-block"
import img1 from '@/assets/mockuuups-female-hand-holding-iphone-14-pro-mockup.png'
import img2 from '@/assets/mockuuups-mockup-of-rotated-google-pixel-held-by-man-in-light-shirt.png'

export default function MobileScreen() {
  return (
    <section>
        <TextBlock
          title="Gagnez de l'argent en faisant une bonne action"
          description="Vous possédez une machine à laver et vous cherchez un moyen de générer un revenu supplémentaire ? Washme est l'application qu'il vous faut !"
        />
        <Image className='screen-mobile' src={img1} width={300} alt="mobile screen" />
        <TextBlock
          title="La solution innovante  pour laver votre linge"
          description="Vous avez du linge sale à laver et vous manquez de temps pour vous en occuper ? Washme est l'application qu'il vous faut !"
        />
        <Image className='screen-mobile' src={img2} width={300} alt="mobile screen" />
        <TextBlock
          title="Une communauté au profit de l'écologie et du partage"
          description="Réduisez votre empreinte écologique en lavant du linge. Notre application est facile à utiliser et vous permettra de trouver rapidement un prestataire ou un client près de chez vous. Rejoignez Washme dès maintenant et faites partie de notre communauté !"
        />
    </section>
  )
}
