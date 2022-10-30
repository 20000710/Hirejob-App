import React from 'react'
import Image from 'next/image'
import personImg1 from '../../assets/img/person-3.png'
import mapPin from '../../assets/img/map-pin.svg'

const MainEditProfile = () => {
    return (
        <>
            <style jsx>{`
            .main-edit-profile{
                background-color: var(--dark-white);
                padding-bottom: 6.875rem;
            }

            .banner-profile{
                position: absolute;
                width: 100%;
                height: 70%;
                background-color: var(--purple);
            }

            .main-edit-profile .profile-card{
                width: 357px;
                margin-right: 1.5rem;
                height: 1047px;
                margin-top: 4.375rem;
            }

            .main-edit-profile .portfolio-card{
                width: 753px;
                height: 516px;
                margin-top: 4.375rem;
            }

            .profile-card .card-desc{
                margin-top: 2rem;
                margin-right: auto;
            }

            .location-name{
                color: var(--dark-grey);
                margin-left 1rem;
            }

            .status{
                color: var(--dark-grey);
            }
        `}</style>
            <div className="banner-profile"></div>
            <div className="main-edit-profile">
                <div className="container">
                    <div className="row">
                        
                        <div className="card profile-card">
                            <div className="card-body d-flex align-items-center flex-column">
                                <p className="mb-0"><Image className="img-fluid" src={personImg1} alt="card image" width={100} height={100} /></p>
                                <div className="d-flex flex-column card-desc">
                                    <h4 className="card-title">Louis Tomlinson</h4>
                                    <p className="card-text">Web Developer</p>
                                    <div className="d-flex align-items-center">
                                        <Image className="map-pin" src={mapPin} alt="map pin icon" width={16} height={16} />
                                        <div className="location-name mt-3">
                                            <p>Purwokerto, Jawa Tengah</p>
                                        </div>
                                    </div>
                                    <div className="status">
                                        <p>Freelancer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainEditProfile