import React from 'react'

const Search = () => {
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
                
                .search-profile .input-group .dropdown-toggle{
                    border-left: 1px solid #9EA0A5;
                    border-radius: 0;
                    height: 58px;
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
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Sort
                        </button>
                        <ul class="dropdown-menu">
                            <li style={{borderBottom: "2px solid #F2F3F4", padding: "20px"}}><a class="dropdown-item" href="#">Sortir berdasarkan nama</a></li>
                            <li style={{borderBottom: "2px solid #F2F3F4", padding: "20px"}}><a class="dropdown-item" href="#">Sortir berdasarkan Skill</a></li>
                            <li style={{borderBottom: "2px solid #F2F3F4", padding: "20px"}}><a class="dropdown-item" href="#">Sortir berdasarkan Lokasi</a></li>
                            <li style={{borderBottom: "2px solid #F2F3F4", padding: "20px"}}><a class="dropdown-item" href="#">Sortir berdasarkan freelance</a></li>
                            <li style={{padding: "20px"}}><a class="dropdown-item" href="#">Sortir berdasarkan fulltime</a></li>
                        </ul>
                        <button className="btn btn-success btn-search my-2 my-sm-0">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search