import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from "nookies";
import jwtDecode from "jwt-decode";

export const registerWorker = (data, router, setLoading) => async (dispatch) => {
  try {
    const result = await axios.post(
      process.env.API_BACKEND + "auth/workers/register",
      data
    );
    const user = result.data.data;
    toast.success(user.message, { toastId: "successSignUp" })
    dispatch({ type: "WORKER_REGISTER_SUCCESS", payload: user });
    router.push("/auth/login");
    setLoading(false);
  } catch (error) {
    console.log('error: ', error);
    toast.warning(error, { toastId: "errorSignUp" })
    setLoading(false);
  }
};

export const registerRecruiter = (data, router, setLoading) => async (dispatch) => {
  try {
    const result = await axios.post(
      process.env.API_BACKEND + "auth/recruiters/register", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }
    );
    console.log('result', result);
    const user = result.data.data;
    toast.success(user.message, { toastId: "successSignUp" })
    dispatch({ type: "RECRUITER_REGISTER_SUCCESS", payload: user });
    router.push("/auth/login");
    setLoading(false);
  } catch (error) {
    console.log('error: ', error);
    toast.warning(error, { toastId: "errorSignUp" })
    setLoading(false);
  }
};

export const loginWorker = (data, router, setLoading, role) => async (dispatch) => {
  try {
    const result = await axios.post(
      process.env.API_BACKEND + "auth/workers/login",
      data
    );
    const user = result.data;
    const { id } = jwtDecode(result.data.token)
    toast.success("Sign In Success. Welcome " + user.name, { toastId: "successSignIn" })
    dispatch({ type: "WORKER_LOGIN_SUCCESS", payload: user });
    setCookie(null, 'token', result.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setCookie(null, 'user_id', id, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setCookie(null, 'role', role, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.push("/");
    setLoading(false);
  } catch (error) {
    console.log(error);
    toast.warning(error?.response?.data?.message, { toastId: "errorSignIn" })
    setLoading(false);
  }
};

export const loginRecruiter = (data, router, setLoading, role) => async (dispatch) => {
  console.log('data: ', data);
  try {
    const result = await axios.post(
      process.env.API_BACKEND + "auth/recruiters/login", data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    });
    console.log('result', result);
    const user = result.data;
    console.log('user-recruiter', user);
    toast.success("Sign In Success. Welcome " + user.name, { toastId: "successSignIn" })
    dispatch({ type: "RECRUITER_LOGIN_SUCCESS", payload: user });
    setCookie(null, 'token', result.data.token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setCookie(null, 'user_id', result.data.id, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setCookie(null, 'role', role, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    router.push("/");
    setLoading(false);
  } catch (error) {
    console.log(error);
    toast.warning(error?.response?.data?.message, { toastId: "errorSignIn" })
    setLoading(false);
  }
};
