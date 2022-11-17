// import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'

const ProfilerRecruiter = () => {
    return (
        <>
            <div className="banner-profile"></div>
            <div className="main-profile">
                <div className="container">
                    <div className="row">
                        <div className="card profile-card">
                            <div className="card-body d-flex align-items-center flex-column">
                                    {/* <Image
                                        className="img-fluid"
                                        src={previewImage == undefined || previewImage == "null" || previewImage == null ?
                                            (photo == undefined || photo == "null" || photo == null ?
                                                userPhoto
                                                :
                                                url_image + "/" + photo) : previewImage
                                        }
                                        alt="card image"
                                        width={100}
                                        height={100}
                                    /> */}

                                {/* <div className="edit-photo">
                                    {editPhoto ?
                                        <form onSubmit={handleSubmit}>
                                            {active ?
                                                <>
                                                    <div className="d-flex mt-3">
                                                        <button className="btn-cancel" onClick={handleCancelEditPhoto} type="submit">Cancel</button>
                                                        <button className="btn-save" type="submit">Save</button>
                                                    </div>
                                                </> :
                                                <>
                                                    <div className="upload-photo">
                                                        <label className="btn-label" htmlFor={"upload-photo"}>
                                                            Select Photo
                                                        </label>
                                                        <input
                                                            name="image"
                                                            type="file"
                                                            id="upload-photo"
                                                            className="btn-upload"
                                                            accept=".jpeg, .jpg, .png"
                                                            onChange={(e) => handleImageUpload(e)}
                                                        />
                                                    </div> </>
                                            }
                                        </form> :
                                        <Link href={"#"}>
                                            <a onClick={handleEditPhoto}>
                                                <Image width={16} height={16} src={editIcon} alt="edit icon" />
                                                <span>Edit</span>
                                            </a>
                                        </Link>
                                    }
                                </div> */}
                                {/* <div className="d-flex flex-column card-desc">
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
                                        {!edit ?
                                            <>
                                                <button onClick={handleEdit} className="btn btn-purple">Edit Profile</button>
                                            </>
                                            :
                                            <>
                                                <button onClick={handleCancelEdit} className="btn btn-white">Batal</button>
                                            </>
                                        }
                                    </div>
                                    <div className="skill">
                                        <label>Skill</label>
                                        <div className="d-flex">
                                            {allSkills === null || allSkills === undefined ?
                                                <p>-</p> :
                                                allSkills.map((val, index) => (
                                                    <div key={index} className="skill-tag">{val}</div>
                                                ))}
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilerRecruiter