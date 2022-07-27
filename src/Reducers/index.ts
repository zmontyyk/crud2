import { combineReducers } from "redux";
import Employee from "./Employee";
import SnackMSg from "./SnackMsg";


const rootReducer = combineReducers({
       FETCHING_DATA:Employee,
       SNACK_MSG:SnackMSg
})

export default rootReducer