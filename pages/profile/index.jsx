import React from 'react'
import Footer from '../../components/footer/footer'
import MainProfile from '../../components/main-profile/mainProfile'
import NavbarProfile from '../../components/navbar/navbarProfile'

const Profile = () => {
  return (
    <div>
        <NavbarProfile/>
        <MainProfile/>
        <Footer/>
    </div>
  )
}

export default Profile