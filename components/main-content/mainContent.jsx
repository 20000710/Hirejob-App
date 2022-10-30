import Image from 'next/image'
import React from 'react'
import agencyImg from '../../assets/img/agency.jpg'
import clientImg from '../../assets/img/client.jpg'
import clientImg2 from '../../assets/img/client-2.jpg'
import personImg1 from '../../assets/img/person-1.png'
import personImg2 from '../../assets/img/person-2.png'
import personImg3 from '../../assets/img/person-3.png'

const MainContent = () => {
    return (
        <div>
            <div className="container">
                <div className="row first-row">
                    <div className="col-lg-5 d-flex flex-column left-side">
                        <div className="title">
                            <h1>
                                Talenta terbaik negri untuk perubahan revolusi 4.0
                            </h1>
                        </div>
                        <div className="sub-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        </div>
                        <button className="btn btn-start">Mulai Dari Sekarang</button>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-center align-items-center right-img">
                        <Image src={agencyImg} alt="agency image" />
                        <div className="rectangle mt-4"></div>
                        <div className="rectangle-wrapper">
                            <div className="rectangle2"></div>
                            <div className="rectangle3"></div>
                        </div>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-lg-5 d-flex flex-column left-side">
                        <Image src={clientImg} alt="client image" />
                        <div className="rectangle"></div>
                        <div className="rectangle-wrapper">
                            <div className="rectangle2"></div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex flex-column align-items-center right-text">
                        <div className="title">
                            <h1>Kenapa harus mencari tallent di peworld</h1>
                        </div>
                        <div className="checklist">
                            <div className="row">
                                <div className="purple-checklist"></div>
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className="row mt-4">
                                <div className="purple-checklist"></div>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className="row mt-4">
                                <div className="purple-checklist"></div>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className="row mt-4">
                                <div className="purple-checklist"></div>
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row third-row">
                    <div className="col-lg-5 mt-5 d-flex flex-column left-side">
                        <div className="skill">
                            <h1>Skill Talent</h1>
                        </div>
                        <div className="sub-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                        </div>
                        <div className="checklist">
                            <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                                <div className="row">
                                    <div className="yellow-checklist"></div>
                                    Java
                                </div>
                                <div className="row mt-4">
                                    <div className="yellow-checklist"></div>
                                    Kotlin
                                </div>
                                <div className="row mt-4">
                                    <div className="yellow-checklist"></div>
                                    PHP
                                </div>
                                <div className="row mt-4">
                                    <div className="yellow-checklist"></div>
                                    Javascript
                                </div>
                            </div>
                            <div style={{ display: "inline", marginLeft: '9.188rem' }}>
                                <div className="row">
                                    <div className="yellow-checklist"></div>
                                    Golang
                                </div>
                                <div className="row mt-4">
                                    <div className="yellow-checklist"></div>
                                    C++
                                </div>
                                <div className="row mt-4">
                                    <div className="yellow-checklist"></div>
                                    Ruby
                                </div>
                                <div className="row mt-4">
                                    <div className="yellow-checklist"></div>
                                    10+ Bahasa lainnya
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex flex-column align-items-center right-img2">
                        <Image src={clientImg2} alt="client image" style={{ width: "496px", height: "389.85px" }} />
                        <div className="rectangle"></div>
                        <div className="rectangle-wrapper">
                            <div className="rectangle2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opinion">
                <div className="title">
                    <h1>Their opinion about peworld</h1>
                </div>
                <div className="row fourth-row">
                    <div className="card">
                        <div className="card-body text-center">
                            <p><Image className="img-fluid" src={personImg1} alt="card image" /></p>
                            <h4 className="card-title">Harry Styles</h4>
                            <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <p><Image className="img-fluid" src={personImg2} alt="card image" /></p>
                            <h4 className="card-title">Niall Horan</h4>
                            <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body text-center">
                            <p><Image className="img-fluid" src={personImg3} alt="card image" /></p>
                            <h4 className="card-title">Louis Tomlinson</h4>
                            <p className="card-text">This is basic card with image on top, title, description and button.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="banner">
                    <div className="title">
                        <h1>Lorem ipsum dolor sit amet</h1>
                    </div>
                    <div className="button-start d-flex align-items-center">
                        <button className="btn">Mulai Dari Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent