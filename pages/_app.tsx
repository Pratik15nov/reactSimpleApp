import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Nav from '../src/components/nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <Component { ...pageProps } />
      </div>
    </div>
  )
}

export default MyApp
