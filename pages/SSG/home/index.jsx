import axios from 'axios'
import React, { useState } from 'react'
// import Footer from '../../../components/footer/footer';
// import MainHome from '../../../components/main-home/mainHome';
import NavbarProfile from '../../../components/navbar/navbarProfile';

export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { users: res.data }
  }
}

const SsgHome = ({ users }) => {
  <NavbarProfile/>
  // console.log(users.json());
  return <div className="container">{
    users.map(res => 
  <>
    <p>{res.name}</p>
  </>)}</div>;
}

export default SsgHome