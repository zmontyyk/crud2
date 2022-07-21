import {employeeData} from '../models/models'


export const  Fetch_DATA =()=>{
   return{
    type:"ALL"
   }
}


export const GettingData = (() => {
    return {
      type: "GETTING_DATA",
  
    }
  })
  export const fetchData = ((userList:employeeData) => {
    return {
      type: "GET_DATA_SUCCESS",
      payload: userList
    }
  })
  export const fetchDataFail = ((error:string) => {
    return {
      type: "GET_DATA_FAIL",
      payload: error
    }
  })
  
  