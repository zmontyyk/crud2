import { combineReducers } from "redux";
import Employee from "./Employee";


const rootReducer = combineReducers({
       FETCHING_DATA:Employee
})

export default rootReducer