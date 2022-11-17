import React, { useState } from 'react'
import HomeCard from '../home-card/homeCard'
import Pagination from '../pagination/pagination'
import Search from '../search/search'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux';
import styles from './mainHome.module.css'
import { searchWorkers } from '../../config/redux/actions/profileActions';

const MainHome = ({ allWorkers, token }) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const [sortby, setSortBy] = useState("")

  const handleKeyword = (e) => {
    setQuery(e.target.value)
  }

  const handleSelect = (e) => {
    console.log('e:', e);
    setSortBy(e)
  }

  const handleSearch = () => {
    const search = query.toLowerCase()
    dispatch(searchWorkers(search, sortby, token))
  }

  console.log('workers: ', allWorkers);
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

      .search-profile .input-group{
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0px 1px 20px rgb(197 197 197 / 25%);
        border-radius: 8px;
        width: 100%;
        height: 70px;
        margin-top: 3.125rem;
        display: flex;
    }
    
    .search-profile .input-group .form-control{
        height: 70px;
        border-radius: 0;
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
    }
    
    .search-profile .btn-dropdown{
      background-color: #fff!important;
      color: var(--light-black)!important;  
    }

    .search-profile .input-group .btn-search{
        width: 121px;
        height: 54px;
        background-color: var(--purple);
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
          <div className="search-profile">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={handleKeyword}
                aria-label="Text input with dropdown button" />
              <DropdownButton
                title="sort"
                onSelect={handleSelect}
                id="dropdown-menu-align-right"
                bsPrefix={styles['btn-sort']}
              >
                <Dropdown.Item className={styles["menu-sort"]} eventKey="name">Berdasarkan Nama</Dropdown.Item>
                <Dropdown.Item className={styles["menu-sort"]} eventKey="domicile">Berdasarkan Lokasi</Dropdown.Item>
                <Dropdown.Item className={styles["menu-sort"]} eventKey="skills">Berdasarkan Skills</Dropdown.Item>
                <Dropdown.Item className={styles["menu-sort"]} eventKey="job_desk">Berdasarkan Job Desk</Dropdown.Item>
              </DropdownButton>
              <button onClick={handleSearch} className="btn btn-success btn-search my-2 my-sm-0">
                Search
              </button>

            </div>
          </div>
          <HomeCard handleSearch={handleSearch} allWorkers={allWorkers} token={token} />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default MainHome