
interface Actions{
    type:string
    payload:string | number
}

const initialState=  {
  userList: [],
}
  

  const Employee = (state=initialState, action:Actions) => {
    switch (action.type) {
      case "GETTING_DATA":
        return {
          ...state,  
          isLoding:true
        } 
      case "GET_DATA_SUCCESS":
        return {
          ...state,
          isLoding: false,
          userList: action.payload
  
        }
      case "GET_DATA_FAIL":
        return {
          ...state,
          isLoding: false,
          error:action.payload
        }
      default: return state
    }
  }

  export default Employee