import Image from 'next/image'
import React, { useState } from 'react'
import mapPin from '../../assets/img/map-pin.svg'
import Link from 'next/link'
import userPhoto from '../../assets/img/user_default.png'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWorkers } from '../../config/redux/actions/profileActions'

const HomeCard = ({ search, sortby, handleSearch, allWorkers, token }) => {
    const dispatch = useDispatch()
    const [skill, setSkill] = useState([])
    const { workers } = useSelector(state => state.profile)
    
    useEffect(() => {
        dispatch(getAllWorkers(search, sortby, token))
        handleSearch
        const getAllSkills = (skill) => {
            const filter = skill.map(res => res?.split(","))
            setSkill(filter)
        }

        const allSkills = workers.map((res) => {
            return res.skills !== null || res.skills !== undefined ? res.skills : ""
        })
        getAllSkills(allSkills)
    }, [])

    return (
        <>
            <style jsx>{`
            .home-card{
                margin-top: 3.125rem;
                width: 100%;
                background: #FFFFFF;
                box-shadow: 0px 1px 20px rgba(197, 197, 197, 0.25);
                border-radius: 8px;
            }
            
            .home-card .card-title{
                font-weight: 600;
                font-size: 22px;
            }
            
            .home-card .card-body .card-desc{
                margin-left: 1.938rem;
            }
            
            .home-card .card-body .card-desc p{
                color: var(--dark-grey);
                font-weight: 400;
                font-size: 14px;
            }
            
            .home-card .card-body .location-name p{
                margin-bottom: 0;
                margin-left: 0.813rem;
            }
            
            .home-card .card-body .skill-tag{
                height: 28px;
                padding: 0.25rem 1rem;
                color: #fff;
                background: rgba(251, 176, 23, 0.6);
                border: 1px solid #FBB017;
                border-radius: 4px;
                font-weight: 600;
                font-size: 12px;
                margin-top: 1.063rem;
            }
            
            .home-card .card-body .skill-tag:not(:last-child){
                margin-right: 1rem;
            }

            .button-profile a{
                width: 148px;
                height: 54px;
                padding-top: 0.75rem;
                background: var(--purple);
                border-radius: 4px;
                border: 0;
            }

            .content-wrapper{
                width: 100%
            }

            @media screen and (max-width: 770px){
                .content-wrapper{
                    flex-direction: column;
                    justify-content: center;
                }

                .home-card .card-body{
                    flex-direction: column;
                }

                .home-card .card-desc{
                    margin-left: 0!important;
                    align-items: center;
                }
                .button-profile a{
                    font-size: 15px;
                    width: auto;
                    height: auto;
                    padding: 0.5rem 1rem;
                }

                .card-body .img-user{
                    width: 80px;
                    height: 80px;
                }
            }
            
        `}</style>
            {workers.map((res, index) => <>
                <div className="home-card">
                    <div className="card">
                        <div className="card-body d-flex align-items-center">
                            <p className="mb-0 img-user">
                                <Image
                                    width={120}
                                    height={120}
                                    className="img-fluid img-profile"
                                    src={
                                        res.photo_worker == undefined || res.photo_worker == "" ?
                                            userPhoto :
                                            res.photo_worker
                                    }
                                    alt="card image"
                                    style={{ borderRadius: "50%" }} />
                            </p>
                            <div className="d-flex justify-content-between align-items-center content-wrapper">
                                <div className="d-flex flex-column card-desc">
                                    <h4 className="card-title">{res.name}</h4>
                                    <p className="card-text">{res.job_desk}</p>
                                    <div className="d-flex align-items-center">
                                        <Image className="map-pin" src={mapPin} alt="map pin icon" width={16} height={16} />
                                        <div className="location-name">
                                            {res.domicile == "" || res.domicile == null ? (
                                                <p>Location not set</p>
                                            ) : (
                                                <p>{res.domicile}</p>
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        {skill.length !== 0 || skill !== undefined  ?
                                            skill[index]?.map((res, idx) => (
                                                res !== "" ?
                                                <div className="skill-tag" key={idx} >{res}</div> :
                                                "-"
                                                ))
                                            : "-" 
                                        }
                                    </div>
                                </div>
                                <div className="button-profile">
                                    <Link href={`/profile/${res.id}`}>
                                        <a className="btn btn-primary">Lihat Profile</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
        </>
    )
}

export default HomeCard