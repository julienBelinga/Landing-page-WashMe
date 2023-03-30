import '@/styles/global.scss'
import '@/styles/navbar.scss'
import '@/styles/about.scss'
import '@/styles/screen.scss'
import '@/styles/textBlock.scss'
import '@/styles/statistic.scss'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
