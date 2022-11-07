import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import purpleIcon from '../../assets/img/purple-peworld.svg'
import bellIcon from '../../assets/img/bell.svg'
import mailIcon from '../../assets/img/mail.svg'
import profileIcon from '../../assets/img/profile.svg'
import { useRouter } from 'next/router'
import { destroyCookie } from "nookies";

const NavbarProfile = ({ photo }) => {
    const router = useRouter()
    const url_image = process.env.URL_IMG
    const handleClick = () => {
        destroyCookie(null, 'token', {
            path: '/'
        })
        destroyCookie(null, 'user_id', {
            path: '/'
        })
        router.push("/")
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-profile">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-menu">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active logo-purple" aria-current="page">
                                    <Image src={purpleIcon} alt="icon" />
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item profile-menu">
                            <Link href="#">
                                <a className="menu-icon">
                                    <Image src={bellIcon} alt="bell icon" width={24} height={24} />
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="menu-icon">
                                    <Image src={mailIcon} alt="mail icon" width={24} height={24} />
                                </a>
                            </Link>

                            <button
                                className="menu-icon"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <Image 
                                    src={photo === undefined || photo === "null" || photo == null ? 
                                        profileIcon : 
                                        url_image + "/" + photo
                                    } 
                                    alt="profile icon" 
                                    width={32} 
                                    height={32} 
                                />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/profile">
                                        <a>
                                        <button className="btn btn-primary mb-3" style={{ marginLeft: "1rem" }} >Lihat Profile</button>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <button className="btn btn-danger" style={{ marginLeft: "1rem" }} onClick={handleClick} >Log Out</button>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarProfile