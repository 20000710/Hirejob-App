import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import peWorldImg from '../../assets/img/peworld.svg'
import { useDispatch } from "react-redux";
import { loginRecruiter, loginWorker } from "../../config/redux/actions/userAction";

const Login = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [role, setRole] = useState("")
    const [disabled, setDisabled] = useState(true)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (role === "worker") {
            dispatch(loginWorker(form, router, setLoading, role))
        } else if (role === "recruiter") {
            dispatch(loginRecruiter(form, router, setLoading, role))
        }
    };

    const handleRole = (data) => {
        setRole(data)
        setDisabled(false)
    }

    console.log('role: ', role);

    return (
        <main>
            <div className="row">
                <div className="logo">
                    <Image src={peWorldImg} alt="logo icon" />
                </div>
                <div className="col-lg-5 a img-bg d-flex justify-content-center align-items-center">
                    <div className="left-text">
                        <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                    </div>
                    <div className="option-btn">
                        <button type="button" onClick={() => handleRole("worker")} className="btn btn-primary btn-worker">Masuk sebagai pekerja</button>
                        <div className="seperator-btn">
                            <div></div>
                            <span>atau</span>
                            <div></div>
                        </div>
                        <button type="button" onClick={() => handleRole("recruiter")} className="btn btn-primary btn-recruiter">Masuk sebagai perekrut</button>
                    </div>
                </div>
                {/* form input  */}
                <div className="col-lg-7 form-bg d-flex justify-content-start align-items-center">
                    <section className="form-input">
                        <div className="welcome">
                            <h3>Halo, Pewpeople</h3>
                            <h6 className="statement">Log in into your existing account</h6>
                        </div>
                        {/* form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mail">
                                <label htmlFor="email" className="form-label wb">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    required
                                    placeholder="Masukkan alamat email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="psw mt-3">
                                <label htmlFor="password" className="form-label wb">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    id="password"
                                    placeholder="Masukkan kata sandi"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="forgot-psw my-3 d-flex justify-content-end wb">
                                <p>
                                    <Link href="/forgotpassword">
                                        <a>Lupa kata sandi?</a>
                                    </Link>
                                </p>
                            </div>
                            {loading ? (
                                <button
                                    type="submit"
                                    className="btn btn-warning width-btn text-light my-3 wb"
                                    disabled
                                >
                                    <span
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                </button>
                            ) : (
                                <button
                                    disabled={disabled}
                                    type="submit"
                                    className="btn btn-warning text-light login-btn"
                                >
                                    Log in
                                </button>
                            )}
                        </form>
                        <div className="sign-up d-flex justify-content-center wb">
                            <p>
                                Anda Belum punya akun?{" "}
                                <Link href="/auth/signup" className="signup wb">
                                    <a>Daftar Disini</a>
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Login