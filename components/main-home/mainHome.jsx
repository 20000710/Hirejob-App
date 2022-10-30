import React from 'react'
import HomeCard from '../home-card/homeCard'
import Pagination from '../pagination/pagination'
import Search from '../search/search'

const MainHome = ({ workers, allSkills }) => {
  console.log('workers: ', workers);
  console.log('user-skills: ', allSkills);
  return (
    <>
      <style jsx>{`
      .main-home{
        margin-left: 100px;
        margin-right: 100px;
        padding-bottom: 6.875rem;
      }

      .home-banner{
        display: flex;
        align-items: center;
        height: 90px;
        background-color: var(--purple)
      }
    
      .home-banner h1{
          font-weight: 700;
          font-size: 28px;
          color: #FFFFFF;
      }

      @media screen and (max-width: 770px){
        .main-home{
          margin-left: 50px;
          margin-right: 50px;
        }
      }
    `}</style>

      <div>
        <div className="home-banner">
          <div className="container">
            <h1>Top Jobs</h1>
          </div>
        </div>
        <div className="main-home">
          <Search />
          <HomeCard workers={workers} allSkills={allSkills} />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default MainHome