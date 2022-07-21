import { combineReducers } from "redux";
import Employee from "./Employee";


const rootReducer =combineReducers({
    Fetch_Employee:Employee
})

export default rootReducer