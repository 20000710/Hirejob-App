import axios from 'axios'
import React from 'react'
import Footer from '../../components/footer/footer'
import MainProfile from '../../components/main-profile/mainProfile'
import NavbarProfile from '../../components/navbar/navbarProfile'

export async function getServerSideProps(ctx) {
  const { cookies } = ctx.req
  const user_id = cookies.user_id
  const token = cookies.token
  console.log('user_id: ', user_id);
  const resAllExp = await axios.get(process.env.API_BACKEND + "experiences", {
    headers: {
      token: token
    }
  })

  const resAllPorto = await axios.get(process.env.API_BACKEND + "portofolio", {
    headers: {
      token: token
    }
  })

  const resWorker = await axios.get(process.env.API_BACKEND + "workers/" + user_id, {
    headers: {
      token: token
    }
  })
  console.log('dataWoerker', resWorker?.data?.data);
  

  return {
    props: {
      allExp: resAllExp.data.data,
      allPorto: resAllPorto.data.data,
      worker: resWorker.data.data,
      portfolio: resWorker.data.portfolio,
      experiences: resWorker.data.experience,
      token: token,
      user_id: user_id,
    }
  }
}

const Profile = ({allExp, allPorto, worker, portfolio, experiences, token, user_id}) => {
  
  const photo = worker?.photo
  return (
    <div>
        <NavbarProfile photo={photo}/>
        <MainProfile
          allExp={allExp}
          allPorto={allPorto}
          worker={worker} 
          photo={photo} 
          token={token} 
          user_id={user_id}
          portfolio={portfolio}
          experiences={experiences}
        />
        <Footer/>
    </div>
  )
}

export default Profile