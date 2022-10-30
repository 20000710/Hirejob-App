import Image from 'next/image'
import React, { useState } from 'react'
import personImg1 from '../../assets/img/person-3.png'
import mapPin from '../../assets/img/map-pin.svg'
import instagram from '../../assets/img/instagram.svg'
import github from '../../assets/img/github.svg'
import gitlab from '../../assets/img/gitlab.svg'
import mail from '../../assets/img/mail.svg'
import portfolio1 from '../../assets/img/portfolio-1.jpg'
import portfolio2 from '../../assets/img/portfolio-2.jpg'
import portfolio3 from '../../assets/img/portfolio-3.jpg'
import portfolio4 from '../../assets/img/portfolio-4.jpg'
import portfolio5 from '../../assets/img/portfolio-5.jpg'
import portfolio6 from '../../assets/img/portfolio-6.jpg'
import tokopediaImg from '../../assets/img/tokopedia-img.jpg'

const MainProfile = () => {
    const [navigate, setNavigate] = useState("portfolio");
    const [edit, setEdit] = useState(false);

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
                margin-right: auto;
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

            .profile-card .hire-btn .btn{
                margin-top: 2.375rem;
                width: 100%;
                height: 50px;
                background-color: var(--purple);
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
        `}</style>
            <div className="banner-profile"></div>
            <div className="main-profile">
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
                                    <div className="about-me">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                                    </div>
                                    <div className="hire-btn">
                                        <button className="btn btn-primary">Hire</button>
                                    </div>
                                    <div className="skill">
                                        <label>Skill</label>
                                        <div className="container row">
                                            <div className="skill-tag">Python</div>
                                            <div className="skill-tag">Laravel</div>
                                            <div className="skill-tag">Golang</div>
                                            <div className="skill-tag">Javascript</div>
                                            <div className="skill-tag">PHP</div>
                                            <div className="skill-tag">HTML</div>
                                            <div className="skill-tag">C++</div>
                                            <div className="skill-tag">Kotlin</div>
                                            <div className="skill-tag">Swift</div>
                                        </div>
                                    </div>
                                    <div className="contact">
                                        <div className="mail">
                                            <Image src={mail} alt="mail icon" />
                                            <label>Louistommo@gmail.com</label>
                                        </div>
                                        <div className="instagram">
                                            <Image src={instagram} alt="instagram icon" />
                                            <label>@Louist91</label>
                                        </div>
                                        <div className="github">
                                            <Image src={github} alt="github icon" />
                                            <label>@Louistommo</label>
                                        </div>
                                        <div className="gitlab">
                                            <Image src={gitlab} alt="gitlab icon" />
                                            <label>@Louistommo91</label>
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
                                        <div className="portfolio-img">
                                            <Image src={portfolio1} alt="portfolio image" />
                                            <label>Remainder app</label>
                                        </div>
                                        <div className="portfolio-img">
                                            <Image src={portfolio2} alt="portfolio image" />
                                            <label>Social media app</label>
                                        </div>
                                        <div className="portfolio-img">
                                            <Image src={portfolio3} alt="portfolio image" />
                                            <label>Project management web</label>
                                        </div>
                                        <div className="portfolio-img">
                                            <Image src={portfolio4} alt="portfolio image" />
                                            <label>Remainder app</label>
                                        </div>
                                        <div className="portfolio-img">
                                            <Image src={portfolio5} alt="portfolio image" />
                                            <label>Social media app</label>
                                        </div>
                                        <div className="portfolio-img">
                                            <Image src={portfolio6} alt="portfolio image" />
                                            <label>Project management web</label>
                                        </div>
                                    </div> :
                                    <div className="experience-section">
                                        <div className="company-icon">
                                            <Image width={74} height={74} src={tokopediaImg} alt="company image" />
                                            <div className="d-flex flex-column align-items-start">
                                                <h3>Engineer</h3>
                                                <h4>Tokopedia</h4>
                                                <div className="datetime">
                                                    <p>July 2019 - January 2020</p>
                                                    <p style={{marginLeft: "0.75rem"}}>6 months</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="company-icon">
                                            <Image width={74} height={74} src={tokopediaImg} alt="company image" />
                                            <div className="d-flex flex-column align-items-start">
                                                <h3>Web Developer</h3>
                                                <h4>Tokopedia</h4>
                                                <div className="datetime">
                                                    <p>July 2019 - January 2020</p>
                                                    <p style={{marginLeft: "0.75rem"}}>6 months</p>
                                                </div>
                                            </div>
                                        </div>
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

export default MainProfile