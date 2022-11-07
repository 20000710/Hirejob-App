import Head from 'next/head'
import Script from 'next/script'
import Footer from '../components/footer/footer'
import MainContent from '../components/main-content/mainContent'
import Navbar from '../components/navbar/navbar'

export default function LandingPage() {
  
  return (
    <div className="landing-page">
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" 
        crossorigin="anonymous"
      />
      <Head>
        <title>Peworld App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <MainContent/>
      <Footer/>
    </div>
  )
}
