import axios from 'axios'
import React from 'react'
import Footer from '../../components/footer/footer'
import MainHome from '../../components/main-home/mainHome'
import NavbarProfile from '../../components/navbar/navbarProfile'

export async function getServerSideProps(ctx) {
  const { cookies } = ctx.req
  console.log('cookies', cookies);
  const token = cookies.token
  const user_id = cookies.user_id
  const resWorkers = await axios.get(process.env.API_BACKEND + "workers", {
    headers: {
      token: token
    }
  })
  
  // const resWorker = await axios.get(process.env.API_BACKEND + "workers/" + user_id, {
  //   headers: {
  //     token: token
  //   }
  // })

  return {
    props: {
      workers: resWorkers.data.data,
      // worker: resWorker.data.data,
      token
    }
  }
}

const Home = ({ workers, token }) => {
  
  return (
    <div>
      <NavbarProfile />
      <MainHome allWorkers={workers} token={token} />
      <Footer />
    </div>
  )
}

export default Home