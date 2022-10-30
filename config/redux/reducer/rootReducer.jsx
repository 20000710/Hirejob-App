import { combineReducers } from "redux";
import usersReducers  from "./userReducer";
import profileReducer from "./profileReducer";
import skillReducer from "./skillReducer";

const rootReducer = combineReducers({
    users: usersReducers,
    profile: profileReducer,
    skills: skillReducer,
})

export default rootReducer;
