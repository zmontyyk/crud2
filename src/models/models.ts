import { type } from "os"


export interface employeeData {
    length: number
    map(arg0: (value: employeeData) => JSX.Element): import("react").ReactNode
    userList: number
    firstName: string
    lastName: string
    email: string
    age: number | string
    gender: string
    id: string | number


}


export interface singleRootState {
    FETCHING_DATA: {
        data: employeeData
    }

}
export interface RootState {

    FETCHING_DATA:{
        data: {
            id:number
        }
        userList:employeeData
      
    }

}

export type Inputs = {
    firstName?: string
    lastName?: string
    email?: string | number
    age?: number | string
    gender?: string
    id?: string | number
   
};


export   interface Remove_User_Props {
    deleteID: {
      firstName: string;
      id: number
    }
    cleanUp: () => void
  }
  