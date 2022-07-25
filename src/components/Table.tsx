import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import { EDit_ROW_ID, Fetch_DATA, UPDATE_USER } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { employeeData, Inputs } from "../models/models";
import Edit_User from './EditUser'
import ReadOnly from "./ReadOnly";
import { useForm, FormProvider } from "react-hook-form";
import AddNewUser from "./AddNewUser";

function Table() {
  const dispatch = useDispatch<any>()

  const [showAddrow, setshowAddrow] = useState<boolean>(false)




  useEffect(() => {
    dispatch(Fetch_DATA());
  }, [])


  //  All employee Data  from store
  const All_Employee_Data = useSelector((state: any) => {
    return state.FETCHING_DATA.userList;
  })

//  showing edit table row 
  const show_Edit_Row = useSelector((state: any) => {
    return state.FETCHING_DATA.data
  })
// getting id to update user 
const editId = useSelector((state: any) => {
  return state.FETCHING_DATA.data?.id
})


  const methods = useForm();
  const onSubmit = (data: any)=>{
    dispatch(UPDATE_USER(data,editId))
    dispatch(EDit_ROW_ID(null))
  }


  return (
    <div className="container-fluid" >
      <button className="button-17 mb-3"  onClick={()=>setshowAddrow(true)} >ADD</button>
         <FormProvider {...methods} >
      <form  onSubmit={methods.handleSubmit(onSubmit)} >
        <table className="table table-striped table-hover m-1 mt-5 ">
          <thead>
            <tr className="">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {All_Employee_Data.userList < 0 ? (
            <h1>hello</h1>
          ) : (
            <tbody>
              {All_Employee_Data.map((value: employeeData) => {
                return (
                  <React.Fragment key={value.id}>
                    {show_Edit_Row?.id === value.id ? <Edit_User   /> : <ReadOnly value={value} />}
                  </React.Fragment>
                )
              })}
              {showAddrow?  <AddNewUser/> :''}
            </tbody>
          )}
        </table>
        </form>
        </FormProvider>
    </div>
  );
}

export default Table;
