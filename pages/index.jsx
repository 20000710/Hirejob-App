import Head from 'next/head'
import Script from 'next/script'
import Footer from '../components/footer/footer'
import MainContent from '../components/main-content/mainContent'
import Navbar from '../components/navbar/navbar'

export default function LandingPage() {
  
  return (
    <div className="landing-page">
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" 
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" 
        crossorigin="anonymous" 
      />
      <Head>
        <title>Peworld App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Navbar/>
      <MainContent/>
      <Footer/>
    </div>
  )
}
