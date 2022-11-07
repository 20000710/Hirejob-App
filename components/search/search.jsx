import React, { useEffect, useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux'
import { searchWorkers } from '../../config/redux/actions/profileActions'

const Search = ({ token }) => {
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
        dispatch(searchWorkers(query, sortby, token))
    }
    console.log('sort: ', sortby);
    return (
        <>
            <style jsx>{`
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
                
                .search-profile .input-group .btn-search{
                    width: 121px;
                    height: 54px;
                    background-color: var(--purple);
                }
            `}</style>

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
                    >
                        <Dropdown.Item eventKey="name">Berdasarkan Nama</Dropdown.Item>
                        <Dropdown.Item eventKey="domicile">Berdasarkan Lokasi</Dropdown.Item>
                        <Dropdown.Item eventKey="skills">Berdasarkan Skills</Dropdown.Item>
                        <Dropdown.Item eventKey="job_desk">Berdasarkan Job Desk</Dropdown.Item>
                    </DropdownButton>
                    <button onClick={handleSearch} className="btn btn-success btn-search my-2 my-sm-0">
                        Search
                    </button>

                </div>
            </div>
        </>
    )
}

export default Search