const initialState = {
    dataWorker: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    dataRecruiter: {
      name: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      password: "",
    },
    isLoading: false,
  };
  
  const usersReducers = (state = initialState, action) => {
    if (action.type === "USER_LOGIN_PENDING") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "WORKER_REGISTER_SUCCESS") {
      return {
        ...state,
        dataWorker: action.payload,
      };
    } else if (action.type === "WORKER_LOGIN_SUCCESS") {
      return {
        ...state,
        dataWorker: action.payload,
      };
    } else if(action.type === "RECRUITER_REGISTER_SUCCESS") {
      return {
        ...state,
        dataRecruiter: action.payload,
      }
    } else if(action.type === "RECRUITER_LOGIN_SUCCESS"){
      return{
        ...state,
        dataRecruiter: action.payload,
      }
    } else {
      return state;
    }
  };
  
export default usersReducers;