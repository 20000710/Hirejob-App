import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllPortfolio = (token) => async (dispatch) => {
    try {
        const users = await axios.get(
            process.env.API_BACKEND + "portofolio", {
            headers: {
                token: token
            }
        }
        )
        const result = users.data.data
        dispatch({ type: "GET_ALL_PORTFOLIO", payload: result })
    } catch (err) {
        console.log(err);
    }
}

export const getDetailPortfolio = (id, token) => async (dispatch) => {
    try {
        const user = await axios.get(process.env.API_BACKEND + "portofolio/" + id, {
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

export const createPortfolio = (data, token) => async (dispatch) => {
    console.log('token: ', token);
    try {
        const form = new FormData();
        form.append("name", data.app_name)
        form.append("link", data.link_repo)
        form.append("type", data.portfolio_type)
        form.append("photo", data.portfolio_photo)
        form.append("porto_description", data.description_porto)
        const result = await axios.post(process.env.API_BACKEND + "portofolio/", form, {
            headers: {
                token: token
            }
        });
        toast.success(result.data.message, { toastId: "successCreatePortfolio" })
        dispatch({ type: "CREATE_PORTFOLIO", payload: result.data.data });

    } catch (error) {
        toast.warning(error, { toastId: "errorCreatePortfolio" })
        console.log(error);
    }
}

export const updatePortfolio = (data, token, id) => async (dispatch) => {
    console.log('data: ', data);
    try {
        const form = new FormData();
        form.append("name", data.app_name)
        form.append("link", data.link_repo)
        form.append("type", data.portfolio_type)
        form.append("photo", data.portfolio_photo)
        form.append("porto_description", data.description_porto)

        const result = await axios.put(process.env.API_BACKEND + "portofolio/" + id, form, {
            headers: {
                token: token
            }
        });
        toast.success(result.data.message, { toastId: "successUpdatePortfolio" })
        dispatch({ type: "UPDATE_PORTFOLIO", payload: result.data.data });
    } catch (error) {
        toast.warning(error, { toastId: "errorUpdatePortfolio" })
        console.log(error);
    }
}