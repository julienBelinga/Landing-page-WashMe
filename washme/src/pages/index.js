import Head from 'next/head'
import { Inter } from 'next/font/google'
import About from '@/components/about'
import Screen from '@/components/multiple-screen'
import { useRef } from 'react'
import Stat from '@/components/statistic'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Newsletter from '@/components/newsletter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const screenRef = useRef(null);

  const handleScroll = () => {
    if (screenRef.current) {
      screenRef.current.scrollTop = 0;
    }
  };

  return (
    <>
      <Head>
        <title>WashMe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="presentation">
          <About/>
        </section>
        <section id="screen">
          <Screen ref={screenRef} />
        </section>
        <section id="statistic">
          <Stat
          stat="10000"
          description="Nombre d'utilisateur moyen par jour"
          /><hr></hr>
          <Stat
          stat="10000"
          description="Nombre d'utilisateur moyen par jour"
          /><hr></hr>
          <Stat
          stat="10000"
          description="Nombre d'utilisateur moyen par jour"
          />
        </section>
        <section id='newsletter'>
          <Newsletter/>
        </section>
      </main>
    </>
  )
}
