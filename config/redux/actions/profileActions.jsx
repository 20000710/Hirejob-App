import axios from "axios";
import Swal from "sweetalert2";

export const getAllWorkers = async (dispatch) => {
    try {
        const users = await axios.get(
            process.env.API_BACKEND + "/workers"
        )
        const result = users.data.data
        dispatch({ type: "GET_ALL_WORKER", payload: result })
        Swal.fire({
            text: result.data.message,
            icon: "success",
        });
    } catch (err) {
        Swal.fire({
            title: err,
            text: err.response.data.error,
            icon: "warning",
        });
    }
}
