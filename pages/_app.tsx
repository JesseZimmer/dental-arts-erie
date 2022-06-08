import '../styles/globals.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}

export default MyApp
