import Image from 'next/image'
import React from 'react'
import screen from '@/assets/screen-selection.png'

export default function Screens() {
  return (
    <Image className="screenshot" src={screen} alt="WashMe screenshot"/>
  )
}
