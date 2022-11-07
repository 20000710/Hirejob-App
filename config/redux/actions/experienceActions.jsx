import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllExperience = (token) => async (dispatch) => {
    try {
        const users = await axios.get(
            process.env.API_BACKEND + "experiences", {
            headers: {
                token: token
            }
        }
        )
        const result = users.data.data
        dispatch({ type: "GET_ALL_EXPERIENCE", payload: result })
    } catch (err) {
        console.log(err);
    }
}

export const getDetailExperience = (id, token) => async (dispatch) => {
    try {
        const user = await axios.get(process.env.API_BACKEND + "experiences/" + id, {
            headers: {
                token: token
            }
        })
        const result = user.data
        dispatch({
            type: "GET_DETAIL_WORKER",
            payload: {
                worker: result.data,
                experience: result.experience,
                portfolio: result.portfolio
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const createExperience = (data, token) => async (dispatch) => {
    console.log('data: ', data);
    try {
        const form = new FormData();
        form.append("position", data.position)
        form.append("company_name", data.company)
        form.append("started", data.started)
        form.append("ended", data.ended)
        form.append("photo", data.exp_photo)
        form.append("exp_description", data.description_exp)

        const result = await axios.post(process.env.API_BACKEND + "experiences", form, {
            headers: {
                token: token
            }
        });
        toast.success(result.data.message, { toastId: "successCreateExperience" })
        dispatch({ type: "CREATE_EXPERIENCE", payload: result.data.data });
    } catch (error) {
        toast.warning(error, { toastId: "errorCreateExperience" })
        console.log(error);
    }
}

export const updateExperience = (data, token, id) => async (dispatch) => {
    console.log('data: ', data);
    try {
        const form = new FormData();
        form.append("position", data.position)
        form.append("company_name", data.company)
        form.append("started", data.started)
        form.append("ended", data.ended)
        form.append("photo", data.exp_photo)
        form.append("exp_description", data.description_exp)

        const result = await axios.put(process.env.API_BACKEND + "experiences/" + id, form, {
            headers: {
                token: token
            }
        });
        toast.success(result.data.message, { toastId: "successUpdateExperience" })
        dispatch({ type: "UPDATE_EXPERIENCE", payload: result.data.data });
    } catch (error) {
        console.log(error);
    }
}