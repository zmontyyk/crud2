import {employeeData} from '../models/models'
import axios from 'axios'
import { Dispatch } from 'redux';

export const  Fetch_DATA =(()=>{
    return async (dispatch: any) => {
    dispatch(GettingData())
    try {
      const res = await axios.get('http://localhost:3000/employees')
      dispatch(fetchData(res.data))

    }catch (error) {
      dispatch(fetchDataFail(true))
    }
  }
})


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
  export const fetchDataFail = ((error:boolean) => {
    return {
      type: "GET_DATA_FAIL",
      payload: error
    }
  })
  
  