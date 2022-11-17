import axios from 'axios'
import React from 'react'
import Footer from '../../components/footer/footer'
import MainProfile from '../../components/main-profile/mainProfile'
import NavbarProfile from '../../components/navbar/navbarProfile'
import ProfilerRecruiter from '../../components/profile-recruiter/profilerRecruiter'

export async function getServerSideProps(ctx) {
  const { cookies } = ctx.req
  const user_id = cookies.user_id
  const token = cookies.token
  const role = cookies.role
  console.log('cookies: ', cookies);
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

  const resWorker = role === "worker" ? await axios.get(process.env.API_BACKEND + "workers/" + user_id, {
    headers: {
      token: token
    }
  }) : ""
  
  return {
    props: {
      worker: role === "worker" ? resWorker.data.data : "",
      portfolio: role === "worker" ? resWorker.data.portfolio : "",
      experiences: role === "worker" ? resWorker.data.experience : "",
      allExp: resAllExp.data.data,
      allPorto: resAllPorto.data.data,
      token: token,
      user_id: user_id,
      role: role,
    }
  }
}

const Profile = ({
  allExp, 
  allPorto, 
  worker, 
  portfolio, 
  experiences,
  token, 
  user_id,
  role}) => {
  console.log('role: ', role);
  const photo = worker?.photo
  return (
    <div>
        <NavbarProfile photo={photo}/>
        {role === "worker" ? 
        <MainProfile
          allExp={allExp}
          allPorto={allPorto}
          worker={worker} 
          photo={photo} 
          token={token} 
          user_id={user_id}
          portfolio={portfolio}
          experiences={experiences}
        />  :
        <ProfilerRecruiter/>
        }
        <Footer/> 
    </div>
  )
}

export default Profile