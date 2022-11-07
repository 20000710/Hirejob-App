import { combineReducers } from "redux";
import usersReducers  from "./userReducer";
import profileReducer from "./profileReducer";
import skillReducer from "./skillReducer";
import experienceReducer from "./experienceReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
    users: usersReducers,
    profile: profileReducer,
    skills: skillReducer,
    experience: experienceReducer,
    portfolio: portfolioReducer,
})

export default rootReducer;
