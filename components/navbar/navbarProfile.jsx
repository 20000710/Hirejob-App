import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import purpleIcon from '../../assets/img/purple-peworld.svg'
import bellIcon from '../../assets/img/bell.svg'
import mailIcon from '../../assets/img/mail.svg'
import profileIcon from '../../assets/img/profile.svg'
import { useRouter } from 'next/router'

const NavbarProfile = () => {
    const router = useRouter()
    const handleClick = () => {
        if(localStorage !== undefined){
            localStorage.removeItem("token");
            router.push("/")
        }
        else{
            return
        }
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
                                <Image src={profileIcon} alt="profile icon" width={32} height={32} />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="#">
                                        <button className="btn btn-danger" style={{marginLeft: "1rem"}} onClick={handleClick} >Log Out</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"}>
                                        <a className="dropdown-item" href="#">Edit Profile</a>
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