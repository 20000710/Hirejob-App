import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import purpleIcon from '../../assets/img/purple-peworld.svg'

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-home">
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
                        {/* when user already login */}
                        <li className="nav-item">
                            <Link href="/home">
                                <a className="nav-link active home-menu" aria-current="page">
                                    Home
                                </a>
                            </Link>
                        </li>
                        {/* when user already login */}
                        <li className="nav-item auth-btn">
                            {/* when user already login */}
                            <Link href="/profile">
                                <a className="nav-link">
                                    <button className="btn btn-success btn-signup my-2 my-sm-0">
                                        Profile
                                    </button>
                                </a>
                            </Link>
                            {/* when user already login */}
                            {/* before login */}
                            {/* <Link href="/auth/login">
                                <a className="nav-link">
                                    <button className="btn btn-outline-success btn-login my-2 my-sm-0">
                                        Masuk
                                    </button>
                                </a>
                            </Link>
                            <Link href="/auth/signup">
                                <a className="nav-link">
                                    <button className="btn btn-success btn-signup my-2 my-sm-0">
                                        Daftar
                                    </button>
                                </a>
                            </Link> */}
                            {/* before login */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar