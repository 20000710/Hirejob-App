import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import peWorldImg from '../../assets/img/peworld.svg'
import { useDispatch } from "react-redux";
import { registerRecruiter, registerWorker } from "../../config/redux/actions/userAction";

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState("");
    const [role, setRole] = useState("");
    const [disabled, setDisabled] = useState(true);
    const router = useRouter()
    const dispatch = useDispatch();
    const [confirmPassword, setConfirmPasword] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        position: "",
        phone: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const cek = form.password;

        if (cek !== confirmPassword) {
            setLoading(false);
            return;
        }

        if (role === "worker") {
            dispatch(registerWorker(form, router, setLoading));
        } else if (role === "recruiter") {
            dispatch(registerRecruiter(form, router, setLoading));
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const checkValidation = (e) => {
        const confirm = e.target.value;
        setConfirmPasword(confirm);
        const cek = form.password;
        if (cek !== confirm) {
            setIsError("Password not match!");
        } else {
            setIsError("");
        }
    };

    const handleRole = (data) => {
        setRole(data)
        setDisabled(false)
    }
    console.log(role);
    return (
        <main>
            <div className="row">
                <div className="logo">
                    <Image src={peWorldImg} alt="logo icon" />
                </div>
                <div className="col-lg-5 a img-bg d-flex justify-content-center align-items-center">
                    <div className="left-text-signup">
                        <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                    </div>
                    <div className="option-btn">
                        <button type="button" onClick={() => handleRole("worker")} className="btn btn-primary btn-worker">Daftar sebagai pekerja</button>
                        <div className="seperator-btn">
                            <div></div>
                            <span>atau</span>
                            <div></div>
                        </div>
                        <button type="button" onClick={() => handleRole("recruiter")} className="btn btn-primary btn-recruiter">Daftar sebagai perekrut</button>
                    </div>
                </div>
                {/* form input  */}
                <div className="col-lg-7 form-bg d-flex justify-content-start align-items-center">
                    <section className="form-input">
                        <div className="welcome">
                            <h3>Halo, Pewpeople</h3>
                            <h6 className="statement">Sign up to create your account</h6>
                        </div>
                        {/* form */}
                        <form onSubmit={handleSubmit}>
                            <div className="name">
                                <label htmlFor="name" className="form-label wb">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    placeholder="Masukkan nama panjang"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mail mt-4">
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
                            {role === "recruiter" ?
                                <>
                                    <div className="company mt-4">
                                        <label htmlFor="company" className="form-label wb">
                                            Perusahaan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="company"
                                            required
                                            placeholder="Masukkan nama perusahaan"
                                            name="company"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="position mt-4">
                                        <label htmlFor="position" className="form-label wb">
                                            Jabatan
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="position"
                                            required
                                            placeholder="Masukkan Jabatan anda"
                                            name="position"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </> : ""
                            }
                            <div className="phone mt-4">
                                <label htmlFor="phone" className="form-label wb">
                                    No handphone
                                </label>
                                <input
                                    type="phone"
                                    className="form-control"
                                    required
                                    id="phone"
                                    placeholder="Masukkan no handphone"
                                    name="phone"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="psw mt-4">
                                <label htmlFor="password" className="form-label wb">
                                    Kata sandi
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
                            <div className="psw mt-4">
                                <label htmlFor="password" className="form-label wb">
                                    Konfirmasi kata sandi
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    id="confirm-password"
                                    placeholder="Masukkan konfirmasi kata sandi"
                                    name="password"
                                    onChange={(e) => checkValidation(e)}
                                />
                                <p className="text-danger">{isError}</p>
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
                                    type="submit"
                                    className="btn btn-warning width-btn text-light wb login-btn"
                                    disabled={disabled}
                                >
                                    Daftar
                                </button>
                            )}
                        </form>
                        <div className="sign-up d-flex justify-content-center wb">
                            <p>
                                Anda sudah punya akun?{" "}
                                <Link href="/auth/login" className="signup wb">
                                    <a>Masuk Disini</a>
                                </Link>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Signup