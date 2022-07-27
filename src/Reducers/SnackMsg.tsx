
interface Actions{
    type:string
    payload:string
}

const initialState=  {
    name:''
}
  

  const SnackMSg = (state=initialState, action:Actions) => {
    switch (action.type) {
      case "SNACK_NAME":
        return {
          ...state,
          name:action.payload
        }
      default: return state
    }
  }

  export default SnackMSg