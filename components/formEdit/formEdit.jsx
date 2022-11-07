import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createExperience, updateExperience } from '../../config/redux/actions/experienceActions';
import { createPortfolio, updatePortfolio } from '../../config/redux/actions/portfolioActions';
import { updateProfileWorker } from '../../config/redux/actions/profileActions';
import styles from './formEdit.module.css'

const FormEdit = ({ allExp, allPorto, worker, portfolio, experiences, token }) => {
    console.log('allExp: ', allExp);
    console.log('allPorto: ', allPorto);
    console.log('experience-form: ', experiences);
    console.log('portfolio-form: ', portfolio);
    const porto = {
        id: "",
        porto_name: "",
        link_repo: "",
        porto_type: "",
        photo: "",
        description: ""
    }
    const exp = {
        id: "",
        position: "",
        company: "",
        started: "",
        ended: "",
        description: "",
        photo: ""
    }
    portfolio.map(res => {
        porto.id = res.porto_id !== undefined ? res.porto_id : "";
        porto.porto_name = res.portfolio_name !== null ? res.portfolio_name : "";
        porto.link_repo = res.link !== null ? res.link : "";
        porto.porto_type = res.type !== null ? res.type : "";
        porto.photo = res.photo !== null ? res.photo : "";
        porto.description = res.description !== null ? res.description : "";
    })
    experiences.map(res => {
        exp.id = res.exp_id !== undefined ? res.exp_id : "";
        exp.position = res.position !== null ? res.position : "";
        exp.company = res.company_name !== null ? res.company_name : "";
        exp.started = res.started !== null ? res.started : "";
        exp.ended = res.ended !== null ? res.ended : "";
        exp.description = res.description !== null ? res.description : "";
        exp.photo = res.photo !== null ? res.photo : "";
    })
    const dispatch = useDispatch();
    const [allSkills, setAllSkills] = useState("")
    const [form, setForm] = useState({
        name: worker.name,
        job_desk: worker.job_desk,
        domicile: worker.domicile,
        workplace: worker.workplace,
        description_bio: worker.description,
        description_porto: porto.description,
        skill: "",
        position: exp.position,
        company: exp.company,
        started: exp.started,
        ended: exp.ended,
        description_exp: exp.description,
        app_name: porto.porto_name,
        link_repo: porto.link_repo,
        portfolio_type: porto.porto_type,
        portfolio_photo: porto.photo,
        exp_photo: exp.photo
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleRadioButton = (e) => {
        setForm({
            ...form,
            portfolio_type: e.currentTarget.value
        })
    }

    const handleSaveSkills = () => {
        if (allSkills.length > 0) {
            setAllSkills(allSkills.concat(",", form.skill))
        } else {
            setAllSkills(form.skill)
        }
        setForm({
            ...form,
            skill: ""
        })
    }

    const handleUploadExperience = (e) => {
        const file = e.target.files[0];
        setForm({
            ...form,
            exp_photo: file
        })
        console.log('file: ', file)
    };

    const handleUploadPortfolio = (e) => {
        const file = e.target.files[0];
        setForm({
            ...form,
            portfolio_photo: file
        })
        console.log('file: ', file)
    };

    const handleSubmit = (e) => {
        const matchArrExp = allExp.some(obj => obj.id === exp.id )
        const matchArrPorto = allPorto.some(obj => obj.id === porto.id)
        console.log('matchExp: ', matchArrExp);
        e.preventDefault();
        dispatch(updateProfileWorker(form, allSkills, token, exp.id, porto.id))
        if (!matchArrExp) {
            dispatch(createExperience(form, token))
        } else {
            dispatch(updateExperience(form, token, exp.id))
        }
        if (!matchArrPorto) {
            dispatch(createPortfolio(form, token))
        } else {
            dispatch(updatePortfolio(form, token, porto.id))
        }
    }
    // console.log("exp_id: ", expId);
    // console.log("porto_id: ", portoId);
    console.log("form: ", form);
    console.log("allSkills-form: ", allSkills);
    console.log('porto: ', porto);
    console.log('exp: ', exp);
    return (
        <form onSubmit={handleSubmit} className={styles["form-wrapper"]}>
            <form className={styles["data-diri"]}>
                <h1 className={styles["form-title"]}>Data Diri</h1>
                <hr />
                <div className={styles["edit-input"]}>
                    <label htmlFor="name" className="form-label wb">
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        placeholder="Masukkan nama lengkap"
                        name="name"
                        defaultValue={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="job_desk" className="form-label wb">
                        Job Desk
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="job_desk"
                        required
                        placeholder="Masukkan job desk"
                        name="job_desk"
                        defaultValue={form.job_desk}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="domicile" className="form-label wb">
                        Domisili
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="domicile"
                        required
                        placeholder="Masukkan domisili"
                        name="domicile"
                        defaultValue={form.domicile}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="workplace" className="form-label wb">
                        Tempat kerja
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="workplace"
                        required
                        placeholder="Masukkan tempat kerja"
                        name="workplace"
                        defaultValue={form.workplace}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="description_bio" className="form-label wb">
                        Deskripsi singkat
                    </label>
                    <textarea
                        className="form-control"
                        id="description_bio"
                        required
                        placeholder="Tuliskan deskripsi singkat"
                        name="description_bio"
                        defaultValue={form.description_bio}
                        rows={5}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <form className={styles.skill}>
                <h1 className={styles["form-title"]}>Skill</h1>
                <hr />
                <div className={styles["skill-input"]}>
                    <input
                        className="form-control"
                        id="skill"
                        required
                        placeholder="Java"
                        name="skill"
                        value={form.skill}
                        onChange={handleChange}
                    />
                    <button onClick={handleSaveSkills} type="button" className="btn btn-simpan">simpan</button>
                </div>
            </form>
            <form className={styles.experience}>
                <h1 className={styles["form-title"]}>Pengalaman</h1>
                <hr />
                <div className={styles["edit-input"]}>
                    <label htmlFor="position" className="form-label wb">
                        Posisi
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="position"
                        required
                        placeholder="Web developer"
                        name="position"
                        defaultValue={form.position}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="company" className="form-label wb">
                        Nama perusahaan
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="company"
                        required
                        placeholder="PT Harus bisa"
                        name="company"
                        defaultValue={form.company}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["second-row"]}>
                    <div>
                        <label htmlFor="started" className="form-label wb">
                            Mulai
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="started"
                            required
                            placeholder="Januari 2018"
                            name="started"
                            defaultValue={form.started}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="ended" className="form-label wb">
                            Berakhir
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="ended"
                            required
                            placeholder="Januari 2018"
                            name="ended"
                            defaultValue={form.ended}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="description_exp" className="form-label wb">
                        Deskripsi singkat
                    </label>
                    <textarea
                        className="form-control"
                        id="description_exp"
                        required
                        placeholder="Tuliskan deskripsi singkat"
                        name="description_exp"
                        rows={5}
                        defaultValue={form.description_exp}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["upload-input"]}>
                    <label for="formFile" class="form-label">Upload gambar</label>
                    <input onChange={handleUploadExperience} className="form-control" type="file" id="formFile" />
                </div>
            </form>
            <form className={styles.portfolio}>
                <h1 className={styles["form-title"]}>Portofolio</h1>
                <hr />
                <div className={styles["edit-input"]}>
                    <label htmlFor="app_name" className="form-label wb">
                        Nama aplikasi
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="app_name"
                        required
                        placeholder="Masukkan nama aplikasi"
                        name="app_name"
                        defaultValue={form.app_name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="link_repo" className="form-label wb">
                        Link repository
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="link_repo"
                        required
                        placeholder="Masukkan link repository"
                        name="link_repo"
                        defaultValue={form.link_repo}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles["radio-section"]}>
                    <label htmlFor="portfolio_type" className="form-label wb">
                        Type portfolio
                    </label>
                    <div className={styles["radio-inline"]}>
                        <div className="form-check" style={{ marginRight: "2rem" }}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="portfolio_type"
                                id="mobile"
                                checked={form.portfolio_type === "mobile"}
                                defaultValue={form.portfolio_type !== "mobile" ? "mobile" : form.portfolio_type}
                                onChange={handleRadioButton}
                            />
                            <label className="form-check-label" for="mobile_app">
                                Aplikasi mobile
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="portfolio_type"
                                id="web"
                                checked={form.portfolio_type === "web"}
                                defaultValue={form.portfolio_type !== "web" ? "web" : form.portfolio_type}
                                onChange={handleRadioButton}
                            />
                            <label className="form-check-label" for="app_web">
                                Aplikasi web
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles["upload-input"]}>
                    <label for="formFile" class="form-label">Upload gambar</label>
                    <input onChange={handleUploadPortfolio} className="form-control" type="file" id="formFile" />
                </div>
                <div className={styles["edit-input"]}>
                    <label htmlFor="description_porto" className="form-label wb">
                        Deskripsi singkat
                    </label>
                    <textarea
                        className="form-control"
                        id="description_porto"
                        required
                        placeholder="Tuliskan deskripsi singkat"
                        name="description_porto"
                        defaultValue={form.description_porto}
                        rows={5}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <button type="submit" className={styles["btn-submit"]}>Simpan</button>
        </form>
    )
}

export default FormEdit