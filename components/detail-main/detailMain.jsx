import Image from 'next/image'
import React, { useState } from 'react'
import mapPin from '../../assets/img/map-pin.svg'
import instagram from '../../assets/img/instagram.svg'
import github from '../../assets/img/github.svg'
import gitlab from '../../assets/img/gitlab.svg'
import mail from '../../assets/img/mail.svg'
import userPhoto from '../../assets/img/user_default.png'
import portfolio1 from '../../assets/img/portfolio-1.jpg'
import Cookies from 'js-cookie'

const DetailMain = ({ worker, experience, portfolio }) => {
    console.log('worker: ', worker);
    const [exp, setExp] = useState([])
    console.log("exp: ", exp);
    const allSkills = worker.skills !== null || worker.skills !== undefined ? worker.skills?.split(",") : null
    console.log('experience: ', experience);
    console.log('portfolio: ', portfolio);
    console.log('allSkills: ', allSkills);
    const role = Cookies.get('role');
    const [navigate, setNavigate] = useState("portfolio");

    return (
        <>
            <style jsx>{`
            .main-profile{
                background-color: var(--dark-white);
                padding-bottom: 6.875rem;
            }

            .banner-profile{
                position: absolute;
                width: 100%;
                height: 70%;
                background-color: var(--purple);
            }

            .main-profile .profile-card{
                width: 357px;
                margin-right: 1.5rem;
                height: 1047px;
                margin-top: 4.375rem;
            }

            .main-profile .portfolio-card{
                width: 753px;
                height: 516px;
                margin-top: 4.375rem;
            }

            .profile-card .card-desc{
                margin-top: 2rem;
            }

            .location-name{
                color: var(--dark-grey);
                margin-left 1rem;
            }

            .status{
                color: var(--dark-grey);
            }

            .about-me{
                color: var(--dark-grey);
                font-weight: 400;
                font-size: 14px;
            }

            .profile-card,
            .portfolio-card{
                height: 100%;
                border: 0;
            }

            .profile-card .hire-btn .btn-purple{
                margin-top: 2.375rem;
                color: var(--white);
                width: 100%;
                height: 50px;
                background-color: var(--purple);
            }

            .profile-card .hire-btn .btn-white{
                margin-top: 1rem;
                border: 1px solid var(--purple);
                color: var(--purple);
                width: 100%;
                height: 50px;
                background-color: var(--white);
            }

            .profile-card .skill .skill-tag{
                width: fit-content;
                height: 28px;
                padding: 0.25rem 1rem;
                color: #fff;
                background: rgba(251, 176, 23, 0.6);
                border: 1px solid #FBB017;
                border-radius: 4px;
                font-weight: 600;
                font-size: 12px;
                margin-top: 1.25rem;
                margin-right: 0.625rem;
            }

            .profile-card .skill label{
                margin-top: 2.25rem;
            }

            .portfolio-card .nav-link{
                color: #000;
                font-weight: 600;
                font-size: 22px;
            }

            .portfolio-card .card-header{
                background: #fff;
            }

            .portfolio-card .nav-link:target{
                border-bottom: 4px solid var(--purple);
            }

            .contact .mail{
                margin-top: 4rem
            }

            .contact .mail,
            .contact .instagram,
            .contact .github{
                display: flex;
                align-items: center;
                margin-bottom: 1.5rem;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: var(--dark-grey);
            }

            .contact .gitlab{
                display: flex;
                align-items: center;
                font-weight: 400;
                font-size: 14px;
                color: var(--dark-grey);
            }

            .contact label{
                margin-left: 1.375rem;
            }

            .portfolio-img{
                width: 219px;
                display: flex;
                flex-direction: column;
            }

            .portfolio-img {
                margin-top: 1.875rem;
            }

            .portfolio-img label{
                font-weight: 400;
                font-size: 14px;
                margin-top: 1rem;
            }
            
            .company-icon{
                align-items: flex-start;
                display: flex;
                margin-top: 2.5rem;
            }

            .company-icon .flex-column{
                margin-left: 2rem;
            }

            .company-icon h3{
                font-weight: 600;
                font-size: 20px;
                margin-bottom: 0.5rem;
                color: var(--dark-black);
            }
            .company-icon h4{
                font-weight: 400;
                font-size: 18px;
                margin-bottom: 0;
                color: var(--light-black);
            }
            .company-icon p {
                font-size: 16px;
                line-height: 22px;
                color: var(--dark-grey);
            }
            .company-icon .datetime{
                display:flex;
            }

            .edit-photo{
                display: flex;
            }

            .edit-photo span{
                font-weight: 600;
                font-size: 22px;
                padding-left: 0.5rem;
                color: var(--dark-grey);
            }

            .btn-upload {
                z-index: -1000;
                opacity: 0;
                position: absolute
            }
            
            .btn-label {
                margin: 20px auto 0 auto;
                border: 1px solid var(--purple);
                border-radius: 10px;
                width: 150px;
                padding-top: 12.5px;
                padding-bottom: 12.5px;
                color: var(--purple);
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                cursor: pointer;
                transition: 400ms;
            }
            
            .btn-label:hover {
                box-shadow: 0px 8px 25px rgb(94, 80, 161);
                transform: translateY(-1px);
            }

            .btn-cancel{
                width: 150px;
                height: 50px;
                padding: 5px 0 5px 0;
                background: #f40404;
                border: none;
                border-radius: 10px;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                color: #FFFFFF;
                transition: 300ms;
                margin-right: 1rem;
            }
            
            .btn-cancel:hover{
                box-shadow: 0 0px 10px 3px rgba(244, 4, 4, 0.5);
                transform: translateY(-1px);
            }

            .btn-save{
                width: 150px;
                height: 50px;
                padding: 5px 0 5px 0;
                background: var(--purple);
                border: none;
                border-radius: 10px;
                color: var(--white);
            }

            @media screen and (max-width: 600px) {
                .main-profile .container{
                    padding-left: 2rem;
                    padding-right: 2rem;
                }
            }
        `}</style>
            <div className="banner-profile"></div>
            <div className="main-profile">
                <div className="container">
                    <div className="row">
                        <div className="card profile-card">
                            <div className="card-body d-flex align-items-center flex-column">
                                <p className="mb-0">
                                    <Image
                                        className="img-fluid"
                                        src={worker.photo === undefined || worker.photo === null ?
                                            userPhoto : worker.photo
                                        }
                                        alt="card image"
                                        width={100}
                                        height={100}
                                    />
                                </p>

                                <div className="d-flex flex-column card-desc">
                                    <h4 className="card-title">{worker.name}</h4>
                                    <p className="card-text">{worker.job_Desk !== "" || worker.job_desk !== null ? worker.job_desk : "unknown job  desk"}</p>
                                    <div className="d-flex align-items-center">
                                        <Image className="map-pin" src={mapPin} alt="map pin icon" width={16} height={16} />
                                        <div className="location-name mt-3">
                                            <p>{worker.domicile !== "" || worker.domicile !== null ? worker.domicile : "No location"}</p>
                                        </div>
                                    </div>
                                    <div className="status">
                                        <p>{worker.job_desk !== "" ? worker.job_desk : "unknown job desk"}</p>
                                    </div>
                                    <div className="about-me">
                                        {worker.description !== "" ? worker.description : "no description"}
                                    </div>
                                    <div className="hire-btn">
                                        {role === "recruiter" ? (
                                            <button className="btn btn-purple">Hire</button>
                                        ) : ""
                                        }
                                    </div>
                                    <div className="skill">
                                        <label>Skill</label>
                                        <div className="container row">
                                            {allSkills === null || allSkills === undefined ?
                                                <p>-</p> :
                                                allSkills.map((val, index) => (
                                                    <div key={index} className="skill-tag">{val}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <div className="mail">
                                            <Image src={mail} alt="mail icon" />
                                            <label>{worker.email}</label>
                                        </div>
                                        <div className="instagram">
                                            <Image src={instagram} alt="instagram icon" />
                                            <label>{worker.email}</label>
                                        </div>
                                        <div className="github">
                                            <Image src={github} alt="github icon" />
                                            <label>{worker.email}</label>
                                        </div>
                                        <div className="gitlab">
                                            <Image src={gitlab} alt="gitlab icon" />
                                            <label>{worker.email}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center portfolio-card">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="true" id="portfolio" onClick={() => setNavigate("portfolio")} href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pengalaman" onClick={() => setNavigate("experience")} href="#pengalaman">Pengalaman Kerja</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                {navigate === "portfolio" ?
                                    <div className="portfolio-section row">
                                        {portfolio.map((res, index) => (
                                            <div key={index} className="portfolio-img">
                                                <Image
                                                    src={
                                                        res.photo === undefined || res.photo === null ?
                                                            portfolio1 :
                                                            res.photo
                                                    }
                                                    width={219}
                                                    height={148}
                                                    style={{ borderRadius: "4px" }}
                                                    alt="portfolio image"
                                                />
                                                <label>{res.portfolio_name !== undefined || res.portfolio_name !== null ?
                                                    res.portfolio_name : "portfolio is empty"
                                                }
                                                </label>
                                            </div>
                                        )
                                        )}
                                    </div> :
                                    <div className="experience-section">
                                        {experience.map(res => (
                                            <>
                                                <div className="company-icon">
                                                    <Image
                                                        width={74}
                                                        height={74}
                                                        src={
                                                            res.photo === undefined || res.photo === null ? "" :
                                                            res.photo
                                                        }
                                                        alt="company image"
                                                    />
                                                    <div className="d-flex flex-column align-items-start">
                                                        <h3>{res.position !== undefined || res.position !== null ?
                                                            res.position : "position no is empty"
                                                        }</h3>
                                                        <h4>{
                                                            res.company_name === undefined || res.company_name === null ?
                                                                "company name is not set" :
                                                                res.company_name
                                                        }</h4>
                                                        <div className="datetime">
                                                            <p>{res.started === undefined || res.started === null &&
                                                                res.ended === undefined || res.ended === null ?
                                                                "-" :
                                                                `${res.started} - ${res.ended}`
                                                            }</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailMain