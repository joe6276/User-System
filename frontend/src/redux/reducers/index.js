import { combineReducers } from "redux"
import usersReducer from "./usersReducers"
import projectReducer from "./projectReducers"
import taskReducer from "./taskReducer"

const rootReducer = combineReducers({
    users: usersReducer,
    projects: projectReducer,
    tasks:taskReducer

})

export default rootReducer
