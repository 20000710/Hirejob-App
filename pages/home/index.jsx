import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/footer'
import MainHome from '../../components/main-home/mainHome'
import NavbarProfile from '../../components/navbar/navbarProfile'
import jwt_decode from "jwt-decode";
import { getDetailSkill } from '../../config/redux/actions/skillAction'

export async function getServerSideProps(ctx) {
  const { cookies } = ctx.req
  console.log('cookies', cookies);
  const token = cookies.token
  const user_id = cookies.user_id
  const resWorkers = await axios.get(process.env.API_BACKEND + "workers")
  const resSkills = await axios.get(process.env.API_BACKEND + "skills/" + user_id, {
    headers: {
      token: token
    }
  })
  const {skills} = resSkills.data.data
  const substring = skills?.substr(1, skills.length - 2)
  const splitString = substring?.split(',')
  return {
    props: {
      workers: resWorkers.data.data,
      skills: splitString,
    }
  }
}

const Home = ({ workers, skills }) => {
  console.log('workers: ', workers);
  // const dispatch = useDispatch()
  //   const {skills} = useSelector((state) => state.skills)
  //   const [allSkills, setAllSkills] = useState([])
  //   console.log('home-card: ', workers)
  //   console.log('skills: ', skills);
  //   useEffect(() => {
  //       const substring = skills?.skills?.substr(1, skills.skills.length - 2)
  //       const splitString = substring?.split(',')
  //       setAllSkills(splitString)
  //       dispatch(getDetailSkill(user_id, token))
  //   }, [dispatch])
  return (
    <div>
      <NavbarProfile />
      <MainHome workers={workers} allSkills={skills} />
      <Footer />
    </div>
  )
}

export default Home