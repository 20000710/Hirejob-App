import axios from "axios";
// import Swal from "sweetalert2";

export const getAllSkills = (token) => async (dispatch) => {
    try {
        const skills = await axios.get(
            process.env.API_BACKEND + "skills", {
                headers: {
                    token: token
                }
            }
        )
        const result = skills.data.data
        dispatch({ type: "GET_ALL_SKILL", payload: result })
    } catch (err) {
        console.log(error);
    }
}

export const getDetailSkill = (id, token) => async (dispatch) => {
    try {
        const skills = await axios.get(
            process.env.API_BACKEND + "skills/" + id, { 
                headers: {
                token: token
            }
        }
        )
        const result = skills.data.data
        dispatch({ type: "GET_DETAIL_SKILL", payload: result })
    } catch (error) {
        console.log(error);
    }
}
